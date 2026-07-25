import { useEffect, useRef, useState } from "react";
import { Volume2 } from "lucide-react";
import { videos } from "../data";

// Seção de vídeo em tela cheia, logo abaixo do hero.
// - Toca em loop automático, mudo, sem os controles nativos do YouTube.
// - Botão grande para ativar o áudio (some depois de clicado).
// - Barra de progresso "falsa": começa rápida e desacelera até o fim,
//   reiniciando a cada loop do vídeo — só para dar a sensação de vídeo curto.

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

// easing ease-out cúbico: rápido no início, lento no final
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function VideoSection() {
  const playerRef = useRef<any>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);
  const durationRef = useRef<number>(45); // valor padrão até sabermos a duração real

  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;

    function tick() {
      const elapsed = (Date.now() - startRef.current) / 1000;
      const t = Math.min(elapsed / durationRef.current, 1);
      setProgress(easeOutCubic(t) * 100);
      rafRef.current = requestAnimationFrame(tick);
    }

    function restart() {
      startRef.current = Date.now();
      setProgress(0);
    }

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
            const d = e.target.getDuration?.();
            if (d && d > 0) durationRef.current = d;
            restart();
            rafRef.current = requestAnimationFrame(tick);
            e.target.playVideo();
          },
          onStateChange: (e: any) => {
            // 0 = terminou -> reinicia manualmente pra garantir o loop
            // e reinicia a barra de progresso junto
            if (e.data === 0) {
              const d = e.target.getDuration?.();
              if (d && d > 0) durationRef.current = d;
              e.target.seekTo(0, true);
              e.target.playVideo();
              restart();
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

  const activateSound = () => {
    if (!playerRef.current) return;
    playerRef.current.unMute();
    playerRef.current.setVolume(100);
    playerRef.current.playVideo();
    setMuted(false);
  };

  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-jc-dark sm:h-[85vh] md:h-screen">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-screen min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2">
        <div id="jc-hero-video" className="h-full w-full" />
      </div>

      {muted && (
        <button
          type="button"
          onClick={activateSound}
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 rounded-full bg-jc-dark/70 px-10 py-8 text-jc-cream backdrop-blur-sm transition hover:bg-jc-dark/90"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-jc-gold text-jc-gold">
            <Volume2 className="h-8 w-8" strokeWidth={1.75} />
          </span>
          <span className="font-display text-lg">Ativar som</span>
        </button>
      )}

      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-white/10">
        <div
          className="h-full bg-jc-gold"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
}
