import server from "../dist/server/server.js";

type VercelRequest = {
  method?: string;
  url?: string;
  headers: Record<string, string | string[] | undefined>;
  on: (event: "data" | "end", callback: (chunk?: Buffer) => void) => void;
};

type VercelResponse = {
  statusCode: number;
  setHeader: (name: string, value: string) => void;
  end: (body?: Buffer) => void;
};

function readBody(request: VercelRequest): Promise<Buffer> {
  return new Promise((resolve) => {
    const chunks: Buffer[] = [];
    request.on("data", (chunk) => {
      if (chunk) chunks.push(chunk);
    });
    request.on("end", () => resolve(Buffer.concat(chunks)));
  });
}

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  const forwardedProtocol = request.headers["x-forwarded-proto"];
  const protocol = Array.isArray(forwardedProtocol)
    ? forwardedProtocol[0]
    : forwardedProtocol ?? "https";
  const host = request.headers.host ?? "localhost";
  const headers = new Headers();

  for (const [name, value] of Object.entries(request.headers)) {
    if (value !== undefined) headers.set(name, Array.isArray(value) ? value.join(", ") : value);
  }

  const method = request.method ?? "GET";
  const body = method === "GET" || method === "HEAD" ? undefined : await readBody(request);
  const upstreamRequest = new Request(
    new URL(request.url ?? "/", `${protocol}://${host}`),
    { method, headers, body: body as unknown as BodyInit },
  );
  const upstreamResponse = await server.fetch(upstreamRequest, {}, {});

  response.statusCode = upstreamResponse.status;
  upstreamResponse.headers.forEach((value, name) => response.setHeader(name, value));

  if (method === "HEAD") {
    response.end();
    return;
  }

  response.end(Buffer.from(await upstreamResponse.arrayBuffer()));
}