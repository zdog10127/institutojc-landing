import { images, links } from "../data";

export default function Footer() {
  return (
    <footer className="bg-jc-dark px-5 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        <img src={images.logoFooter} alt="Instituto JC" className="w-24" />

        <div className="flex items-center gap-4">
          {[
            { href: links.instagram, label: "Instagram", icon: "instagram" },
            { href: links.youtube, label: "Youtube", icon: "youtube" },
            { href: links.whatsapp, label: "Whatsapp", icon: "whatsapp" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-jc-gold text-jc-gold transition hover:bg-jc-gold hover:text-jc-dark"
            >
              <SocialIcon name={s.icon} />
            </a>
          ))}
        </div>

        <div className="text-center text-sm md:text-right">
          <a
            href={links.terms}
            className="font-medium text-jc-cream underline decoration-jc-gold/60 underline-offset-2 transition hover:text-jc-gold-light"
          >
            Termos de Uso
          </a>
          <p className="mt-2 text-jc-gold/80">© 2026 Instituto JC</p>
          <p className="text-jc-gold/80">Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const common = "h-5 w-5 fill-current";
  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className={common}>
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.75 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
      </svg>
    );
  }
  if (name === "youtube") {
    return (
      <svg viewBox="0 0 24 24" className={common}>
        <path d="M22 12s0-3.2-.4-4.7a2.9 2.9 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 0 0 2-2C22 15.2 22 12 22 12zM10 15.5v-7l6 3.5z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common}>
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7.9-.3.2-.5.1a6.6 6.6 0 0 1-2-1.2 7.3 7.3 0 0 1-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.4a1.8 1.8 0 0 0 .2-.4.4.4 0 0 0 0-.4c-.1-.1-.5-1.3-.7-1.7s-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.1 11.1 0 0 0 4.3 3.8c1.5.7 1.5.4 1.8.4a2.1 2.1 0 0 0 1.4-1 1.7 1.7 0 0 0 .1-1c-.1-.1-.2-.2-.4-.3z" />
    </svg>
  );
}
