import { images, videos } from "../data";

export default function Hero() {
  const embedSrc =
    `https://www.youtube.com/embed/${videos.heroYoutubeId}` +
    `?autoplay=1&mute=1&loop=1&playlist=${videos.heroYoutubeId}` +
    `&controls=0&disablekb=1&modestbranding=1&rel=0&fs=0` +
    `&iv_load_policy=3&playsinline=1&showinfo=0`;

  const watchUrl = `https://www.youtube.com/watch?v=${videos.heroYoutubeId}`;

  return (
    <section className="bg-jc-dark px-5 py-16 text-center text-jc-cream sm:px-6 md:py-28">
      <h1 className="font-display mx-auto max-w-3xl text-4xl italic leading-tight sm:text-5xl md:text-6xl">
        Transforme sua dança
      </h1>
      <h2 className="font-display mx-auto mt-2 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
        num momento inesquecível!
      </h2>

      <img
        src={images.logoDark}
        alt="Instituto JC - Instituto de Dança"
        className="mx-auto mt-10 w-40 md:w-48"
      />

      <div className="mx-auto mt-14 max-w-xl overflow-hidden rounded-lg shadow-2xl md:mt-16">
        <div className="relative aspect-video w-full">
          {/* Vídeo em loop automático, mudo, sem controles do usuário */}
          <iframe
            className="pointer-events-none h-full w-full"
            src={embedSrc}
            title="Apresentação Portal JC - Instituto de Dança"
            allow="autoplay; encrypted-media; picture-in-picture"
            tabIndex={-1}
          />
          {/* Camada por cima: qualquer clique leva direto ao YouTube, numa aba nova */}
          <a
            href={watchUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Assistir vídeo completo no YouTube"
            className="absolute inset-0 block"
          />
        </div>
      </div>
      <p className="mx-auto mt-3 max-w-xl text-xs text-jc-cream/50">
        Toque no vídeo para assistir a versão completa no YouTube
      </p>
    </section>
  );
}
