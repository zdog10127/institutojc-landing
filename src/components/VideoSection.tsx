import { forwardRef, useEffect, useRef, useState } from "react";
import { Volume2 } from "lucide-react";
import { videos } from "../data";

// Seção de vídeo em tela cheia, logo abaixo do hero.
// - Toca em loop automático, mudo, sem os controles nativos do YouTube.
// - Botão grande para ativar o áudio; clicar de novo no vídeo muta outra vez.
// - No mobile o vídeo fica centralizado (sem cortar as bordas); no desktop
//   ele preenche a tela inteira (cover).
// - Barra de progresso "falsa": um ciclo independente de 7min10s, que
//   acelera bem no início e desacelera até o fim — só pra dar a sensação
//   de vídeo curto. Não está sincronizada com o tempo real do vídeo.

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<void> | null = null;

function loadYouTubeApi(): Promise<void> {
  if (window.YT && window.YT.Player) return Promise.resolve();
  if (apiPromise) return apiPromise;

  apiPromise = new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve();
    };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  });

  return apiPromise;
}

// Ciclo fixo da barra de progresso: 7min10s
const PROGRESS_CYCLE_SECONDS = 7 * 60 + 10;

// easing bem acentuado: dispara rápido no início e desacelera bastante no final
function easeOutQuint(t: number) {
  return 1 - Math.pow(1 - t, 5);
}

const VideoSection = forwardRef<HTMLElement>((_props, ref) => {
  const playerRef = useRef<any>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(Date.now());

  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  // Barra de progresso: ciclo próprio de 7min10s, independente do vídeo real
  useEffect(() => {
    let raf: number;

    function tick() {
      const elapsed = (Date.now() - startRef.current) / 1000;
      const t = (elapsed % PROGRESS_CYCLE_SECONDS) / PROGRESS_CYCLE_SECONDS;
      setProgress(easeOutQuint(t) * 100);
      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    let cancelled = false;

    loadYouTubeApi().then(() => {
      if (cancelled) return;
      playerRef.current = new window.YT.Player("jc-hero-video", {
        videoId: videos.heroYoutubeId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          disablekb: 1,
          modestbranding: 1,
          rel: 0,
          fs: 0,
          playsinline: 1,
          iv_load_policy: 3,
        },
        events: {
          onReady: (e: any) => {
            e.target.playVideo();
          },
          onStateChange: (e: any) => {
            // 0 = terminou -> reinicia manualmente pra garantir o loop
            if (e.data === 0) {
              e.target.seekTo(0, true);
              e.target.playVideo();
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      playerRef.current?.destroy?.();
    };
  }, []);

  const toggleMute = () => {
    if (!playerRef.current) return;
    if (muted) {
      playerRef.current.unMute();
      playerRef.current.setVolume(100);
      playerRef.current.playVideo();
      setMuted(false);
    } else {
      playerRef.current.mute();
      setMuted(true);
    }
  };

  return (
    <section
      ref={ref}
      className="relative h-[70vh] w-full overflow-hidden bg-jc-dark sm:h-[85vh] md:h-screen"
    >
      {/* Mobile: vídeo centralizado, mantendo proporção, sem cortar.
          Desktop (md+): vídeo preenche a tela inteira (cover). */}
      <div className="absolute inset-0 flex items-center justify-center md:block">
        <div className="pointer-events-none aspect-video w-full md:absolute md:left-1/2 md:top-1/2 md:aspect-auto md:h-screen md:min-h-full md:w-[177.78vh] md:min-w-full md:-translate-x-1/2 md:-translate-y-1/2">
          <div id="jc-hero-video" className="h-full w-full" />
        </div>
      </div>

      {/* Camada clicável: ativa o som na primeira vez, e alterna mudo/som
          depois disso. */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Ativar som do vídeo" : "Silenciar vídeo"}
        className="absolute inset-0 flex items-center justify-center"
      >
        {muted && (
          <span className="flex flex-col items-center gap-3 rounded-full bg-jc-dark/70 px-10 py-8 text-jc-cream backdrop-blur-sm transition hover:bg-jc-dark/90">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-jc-gold text-jc-gold">
              <Volume2 className="h-8 w-8" strokeWidth={1.75} />
            </span>
            <span className="font-display text-lg">Ativar som</span>
          </span>
        )}
      </button>

      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-white/10">
        <div className="h-full bg-jc-gold" style={{ width: `${progress}%` }} />
      </div>
    </section>
  );
});

VideoSection.displayName = "VideoSection";

export default VideoSection;
