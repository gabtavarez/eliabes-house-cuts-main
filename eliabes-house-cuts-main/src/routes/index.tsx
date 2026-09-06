import { createFileRoute } from "@tanstack/react-router";
import heroBarber from "../assets/hero-barber.jpg";
import corteFade from "../assets/corte-fade.jpg";
import corteTexturizado from "../assets/corte-texturizado.jpg";
import corteClassico from "../assets/corte-classico.jpg";
import corteRisca from "../assets/49802374.png";
import corteLongo from "../assets/491281902.png";
import corteSocial from "../assets/41234234.png";
import logo from "../assets/53283953.png";
import whatsappIcon from "../assets/icone whats.png";
import { Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "5511996791221";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const TESTIMONIALS = [
  {
    quote:
      "Excelente profissional! Super gente boa, muito pontual e o resultado ficou ótimo.",
    author: "Caue B. — Jundiaí",
  },
  {
    quote:
      "Atendimento a domicilio, com horarios diferenciados. Otimo pra quem busca praticidade e comodidade, qualidade de serviço sensacional.",
    author: "Isis T. — Jundiaí",
  },
  {
    quote:
      "Excelente trabalho do Eliabe! Ele é extremamente paciente, atencioso e deixa a criança super a vontade.",
    author: "Elisama A. — Jundiaí",
  },
  {
    quote:
      "Indiscutível o melhor barbeiro da região. Atende na comodidade da sua casa, com o horário estabelecido pelo cliente. Super simpático, conversa de tudo e ainda realiza a limpeza do local que foi feito o corte de cabelo não deixando preocupações de limpeza da parte do cliente.",
    author: "Diego S. — Jundiaí",
  },
  {
    quote:
      "Melhor atendimento, melhor corte, e o mais importante, no conforto da sua casa! Obrigado!",
    author: "Tiago S. — Jundiaí",
  },
  {
    quote:
      "Excelente profissional, com equipamentos excelente para atendimento em domicílio.",
    author: "Scott R. — Jundiaí",
  },
  {
    quote:
      "De um corte do meu filho virou amizade e meu barbeiro tbm, recomendo, excelente profissional, excepcional....",
    author: "Henrique F. — Jundiaí",
  },
  {
    quote:
      "Foi meu barbeiro pra época de quartel e virou meu barbeiro oficial, sempre pontual, profissional e com preço justo. Recomendo!",
    author: "Gabriel T. — Jundiaí",
  },
  {
    quote:
      "Atendimento à domicílio, corte perfeito e super educado. Recomendo",
    author: "Aline F. — Jundiaí",
  },
  {
    quote:
      "Fiquei surpreso pela pelo atendimento e pelo preparo de conseguir atender em domicílio com mínimo de incômodo! muito bom mesmo",
    author: "Reinaldo R. — Jundiaí",
  },
  {
    quote:
      "Super indico, simpático, interagiu com meu filho que tem fobia da maquininha, conversaram, foi super rápido e nós amamos! Sem contar da praticidade de ser em sua casa!",
    author: "Michele F. — Jundiaí",
  },

];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Eliabe · Barbearia Domiciliar" },
      { name: "description", content: "Eliabe leva a precisão da barbearia até a sua casa. Corte de cabelo, barba e combo com agendamento pelo WhatsApp." },
      { property: "og:title", content: "Eliabe · Barbearia Domiciliar" },
      { property: "og:description", content: "Atendimento de barbearia premium na casa dos clientes. Agende pelo WhatsApp." },
      { property: "og:image", content: heroBarber },
      { name: "twitter:image", content: heroBarber },
    ],
  }),
});

function WhatsAppButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

function Index() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const revealElements = pageRef.current?.querySelectorAll(
      ".reveal-on-scroll",
    );

    if (!revealElements?.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={pageRef}
      className={`${isLightTheme ? "light" : "dark"} min-h-screen bg-ink text-cream antialiased selection:bg-gold/30 selection:text-cream`}
    >
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-line/70 bg-ink/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-baseline gap-2">
            <img
              src={logo}
              alt="Mayer Home Barber"
              className="theme-logo h-12 w-auto object-contain"
            />
          </div>
          <nav className="hidden items-center gap-8 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-cream/70 md:flex">
            <a href="#servicos" className="transition-colors hover:text-gold">
              Serviços
            </a>
            <a href="#galeria" className="transition-colors hover:text-gold">
              Galeria
            </a>
            <a href="#depoimentos" className="transition-colors hover:text-gold">
              Depoimentos
            </a>
            <a href="#area" className="transition-colors hover:text-gold">
              Área
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsLightTheme((current) => !current)}
              aria-label={isLightTheme ? "Ativar tema escuro" : "Ativar tema claro"}
              title={isLightTheme ? "Ativar tema escuro" : "Ativar tema claro"}
              className="theme-toggle relative flex size-10 items-center justify-center overflow-hidden rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              <Sun className={`absolute size-4 transition-all duration-300 ${isLightTheme ? "rotate-0 scale-100" : "rotate-90 scale-0"}`} aria-hidden="true" />
              <Moon className={`absolute size-4 transition-all duration-300 ${isLightTheme ? "-rotate-90 scale-0" : "rotate-0 scale-100"}`} aria-hidden="true" />
            </button>
            <WhatsAppButton className="group inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-ink">
              Agendar
            </WhatsAppButton>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16">
        <div className="grid items-center gap-10 md:items-start md:grid-cols-12">
          <div className="animate-fade-up md:col-span-5">
            <p className="mb-6 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.35em] text-gold">
              Atendimento domiciliar
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[1.05] tracking-tight text-balance md:text-6xl">
              O corte perfeito, {" "}
              <span className="font-medium italic text-gold-soft">
                 no conforto
                 da sua casa.
              </span>
            </h1>
            <p className="mt-9 max-w-[42ch] text-[15px] leading-relaxed text-cream/70 text-pretty">
              Economize tempo e tenha um atendimento de barbearia premium onde você estiver.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppButton className="group inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3.5 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.15em] text-ink transition-colors hover:bg-gold-soft">
                Agendar via WhatsApp
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </WhatsAppButton>
              <a
                href="#servicos"
                className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.15em] text-cream/60 transition-colors hover:text-cream"
              >
                Ver serviços
              </a>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="relative">
              <img
                src={heroBarber}
                alt="Eliabe cortando cabelo com precisão em ambiente sofisticado"
                width={1080}
                height={1350}
                className="hero-image w-full rounded-lg bg-panel object-cover outline-1 -outline-offset-1 outline-black/5"
              />
              <div className="absolute -bottom-25 -left-20 hidden items-center gap-3 rounded-md border border-line bg-ink-soft px-4 py-3 sm:flex">
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-gold">
                  Desde 2018
                </span>
                <span className="h-4 w-px bg-line"></span>
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-cream/60">
                  +2.400 cortes
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="reveal-on-scroll border-t border-line/70">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.35em] text-gold">
                 Serviços
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight text-balance">
                O melhor da barbearia, na sua casa
              </h2>
            </div>
            <p className="hidden max-w-[28ch] text-right font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-cream/40 md:block">
              Preços a partir de
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="service-card reveal-on-scroll group rounded-lg border border-line bg-ink-soft p-8 transition-colors hover:border-gold/50">
              <span className="font-[family-name:var(--font-mono)] text-[11px] text-gold/70">
                01
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl tracking-tight">
                Corte de cabelo
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">
                Tesoura e máquina, acabamento na navalha. Estilo definido com
                você.
              </p>
              <div className="mt-6 flex items-baseline justify-between border-t border-line pt-5">
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-cream/40">
                  Domiciliar
                </span>
                <span className="font-[family-name:var(--font-display)] text-xl text-gold-soft">
                  R$ 60
                </span>
              </div>
            </div>
            <div className="service-card reveal-on-scroll group rounded-lg border border-line bg-ink-soft p-8 transition-colors hover:border-gold/50">
              <span className="font-[family-name:var(--font-mono)] text-[11px] text-gold/70">
                02
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl tracking-tight">
                Barba completa
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">
                Toalha quente, óleo e navalhado. Contorno limpo e pele
                confortável.
              </p>
              <div className="mt-6 flex items-baseline justify-between border-t border-line pt-5">
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-cream/40">
                  Domiciliar
                </span>
                <span className="font-[family-name:var(--font-display)] text-xl text-gold-soft">
                  R$ 60
                </span>
              </div>
            </div>
            <div className="service-card reveal-on-scroll group rounded-lg border border-gold/40 bg-panel p-8 transition-colors hover:border-gold">
              <span className="font-[family-name:var(--font-mono)] text-[11px] text-gold">
                03 · Em destaque
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl tracking-tight">
                Combo corte + barba
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">
                Ritual completo com hidratação final. A experiência mais
                procurada.
              </p>
              <div className="mt-6 flex items-baseline justify-between border-t border-line pt-5">
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-cream/40">
                  Domiciliar
                </span>
                <span className="font-[family-name:var(--font-display)] text-xl text-gold">
                  R$ 100
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" className="reveal-on-scroll border-t border-line/70 bg-ink-soft/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.35em] text-gold">
            Galeria
          </p>
          <h2 className="mb-12 font-[family-name:var(--font-display)] text-4xl tracking-tight text-balance">
            Portfólio de cortes
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="gallery-item reveal-on-scroll group relative overflow-hidden rounded-lg">
              <img
                src={corteFade}
                alt="Corte fade médio com acabamento preciso"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-lg bg-panel object-cover outline-1 -outline-offset-1 outline-black/5 transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-ink/70 px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-gold-soft">
                Low Fade
              </span>
            </div>
            <div className="gallery-item reveal-on-scroll group relative overflow-hidden rounded-lg">
              <img
                src={corteTexturizado}
                alt="Corte texturizado moderno"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-lg bg-panel object-cover outline-1 -outline-offset-1 outline-black/5 transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-ink/70 px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-gold-soft">
                Texturizado moderno
              </span>
            </div>
            <div className="gallery-item reveal-on-scroll group relative overflow-hidden rounded-lg">
              <img
                src={corteClassico}
                alt="Corte clássico pompadour com side part"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-lg bg-panel object-cover outline-1 -outline-offset-1 outline-black/5 transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-ink/70 px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-gold-soft">
                Clássico com side part
              </span>
            </div>
            <div className="gallery-item reveal-on-scroll group relative overflow-hidden rounded-lg">
              <img
                src={corteRisca}
                alt="Corte curto com risca lateral e acabamento degradê"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-lg bg-panel object-cover outline-1 -outline-offset-1 outline-black/5 transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-ink/70 px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-gold-soft">
                Risca lateral
              </span>
            </div>
            <div className="gallery-item reveal-on-scroll group relative overflow-hidden rounded-lg">
              <img
                src={corteLongo}
                alt="Corte texturizado com franja longa"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-lg bg-panel object-cover outline-1 -outline-offset-1 outline-black/5 transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-ink/70 px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-gold-soft">
                Texturizado longo
              </span>
            </div>
            <div className="gallery-item reveal-on-scroll group relative overflow-hidden rounded-lg">
              <img
                src={corteSocial}
                alt="Corte social curto com risca desenhada"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-lg bg-panel object-cover outline-1 -outline-offset-1 outline-black/5 transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-ink/70 px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-gold-soft">
                Social com risca
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="depoimentos" className="reveal-on-scroll border-t border-line/70">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.35em] text-gold">
            Depoimentos
          </p>
          <h2 className="mb-10 font-[family-name:var(--font-display)] text-4xl tracking-tight text-balance">
            O que dizem os clientes
          </h2>
          <div className="space-y-6 overflow-hidden">
            <div className="testimonial-track testimonial-track-left">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
                <blockquote
                  key={`top-${testimonial.author}-${index}`}
                  className="w-[min(82vw,29rem)] flex-none rounded-lg border border-line bg-ink-soft p-6"
                >
                  <p className="font-[family-name:var(--font-body)] text-lg leading-relaxed text-cream text-pretty">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <footer className="mt-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-gold-soft">
                    {testimonial.author}
                  </footer>
                </blockquote>
              ))}
            </div>
            <div className="testimonial-track testimonial-track-right">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
                <blockquote
                  key={`bottom-${testimonial.author}-${index}`}
                  className="w-[min(82vw,29rem)] flex-none rounded-lg border border-line bg-ink-soft p-6"
                >
                  <p className="font-[family-name:var(--font-body)] text-lg leading-relaxed text-cream text-pretty">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <footer className="mt-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-gold-soft">
                    {testimonial.author}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AREA AND CONTACT */}
      <section id="area" className="reveal-on-scroll border-t border-line/70 bg-ink-soft/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="font-[family-name:var(--font-display)] text-3xl tracking-tight">
                ELIABE
              </span>
              <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-cream/50">
                O cuidado em cada corte, com o conforto de estar em casa.
              </p>
            </div>
            <div className="md:col-span-3">
              <p className="mb-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-gold">
                Contato
              </p>
              <ul className="space-y-2 text-sm text-cream/60">
                <li>
                  <WhatsAppButton className="transition-colors hover:text-gold">
                    WhatsApp
                  </WhatsAppButton>
                </li>
                <li>
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="transition-colors hover:text-gold"
                  >
                    +55 11 99679-1221
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/eliabe_mayer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gold"
                  >
                    @mayer_eliabe
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-5">
              <p className="mb-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-gold">
                Horário
              </p>
              <p className="text-sm text-cream/60">Seg — Sáb · 09h às 20h</p>
              <p className="mt-1 text-sm text-cream/50">
                Agendamento prévio pelo WhatsApp.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-10 border-t border-line/70 pt-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="mb-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.35em] text-gold">
                Área
              </p>
              <h2 className="mb-8 font-[family-name:var(--font-display)] text-4xl tracking-tight text-balance">
                Onde eu atendo
              </h2>
              <ul className="space-y-2 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.1em] text-cream/60">
                <li className="flex items-center gap-3">
                  <span className="text-gold">◆</span> Jundiaí e bairros da cidade
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold">◆</span> Região de Jundiaí
                </li>
              </ul>
            </div>
            <iframe
              src="https://www.google.com/maps?q=Jundia%C3%AD%2C%20SP&output=embed"
              title="Mapa da região de atendimento em Jundiaí"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full rounded-lg border-0 bg-panel outline-1 -outline-offset-1 outline-black/5 md:col-span-5"
            />
          </div>
        </div>
      </section>

      <footer className="reveal-on-scroll border-t border-line/70 bg-ink-soft/60">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-cream/40">
              © 2026 Mayer Home Barber · Barbearia em domicílio
            </p>
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-cream/40">
              Feito com precisão
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <WhatsAppButton
        className="whatsapp-float fixed bottom-6 right-6 z-50"
        aria-label="Falar pelo WhatsApp"
      >
        <span className="whatsapp-sign">
          <img src={whatsappIcon} alt="" aria-hidden="true" />
        </span>
        <span className="whatsapp-text">WhatsApp</span>
      </WhatsAppButton>
    </div>
  );
}
