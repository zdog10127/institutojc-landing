import { useEffect, useRef, useState } from "react";
import { Music4, Pause } from "lucide-react";
import { videos } from "../data";

// Player de música flutuante: toca o áudio do vídeo do Instituto JC
// de forma independente do vídeo do hero (que fica mudo em loop).
// Usa a API oficial do player do YouTube (iframe fica escondido fora
// da tela, só o botão de play/pause fica visível).

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

export default function MusicPlayer() {
  const playerRef = useRef<any>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let cancelled = false;

    loadYouTubeApi().then(() => {
      if (cancelled) return;
      playerRef.current = new window.YT.Player("jc-music-player", {
        videoId: videos.heroYoutubeId,
        playerVars: {
          controls: 0,
          disablekb: 1,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
        },
        events: {
          onReady: () => setReady(true),
          onStateChange: (event: any) => {
            setPlaying(event.data === window.YT.PlayerState.PLAYING);
          },
        },
      });
    });

    return () => {
      cancelled = true;
      playerRef.current?.destroy?.();
    };
  }, []);

  const toggle = () => {
    if (!playerRef.current) return;
    if (playing) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  return (
    <>
      <div
        id="jc-music-player"
        className="pointer-events-none fixed left-[-9999px] top-[-9999px] h-px w-px opacity-0"
      />
      <button
        type="button"
        onClick={toggle}
        disabled={!ready}
        aria-label={playing ? "Pausar música" : "Tocar música do Instituto JC"}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-jc-gold bg-jc-dark text-jc-gold shadow-lg transition hover:bg-jc-gold hover:text-jc-dark disabled:cursor-wait disabled:opacity-40"
      >
        {playing ? (
          <Pause className="h-6 w-6" strokeWidth={2} />
        ) : (
          <Music4 className="h-6 w-6" strokeWidth={2} />
        )}
      </button>
    </>
  );
}
