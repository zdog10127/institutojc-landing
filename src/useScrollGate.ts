import { useEffect, useRef, useState, type RefObject } from "react";

// Impede rolar para além do elemento de referência (o vídeo) durante
// GATE_DURATION_MS a partir do carregamento da página.
const GATE_DURATION_MS = 2 * 60 * 1000; // 2 minutos

export function useScrollGate(boundaryRef: RefObject<HTMLElement | null>) {
  const [unlocked, setUnlocked] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(
    GATE_DURATION_MS / 1000,
  );
  const startedAtRef = useRef(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Date.now() - startedAtRef.current;
      const left = Math.max(0, Math.ceil((GATE_DURATION_MS - elapsed) / 1000));
      setRemainingSeconds(left);
      if (elapsed >= GATE_DURATION_MS) {
        setUnlocked(true);
        clearInterval(interval);
      }
    }, 250);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (unlocked) return;

    function clamp() {
      const el = boundaryRef.current;
      if (!el) return;
      const maxScroll = el.offsetTop + el.offsetHeight;
      if (window.scrollY > maxScroll) {
        window.scrollTo({ top: maxScroll });
      }
    }

    window.addEventListener("scroll", clamp, { passive: true });
    window.addEventListener("wheel", clamp, { passive: true });
    window.addEventListener("touchmove", clamp, { passive: true });
    window.addEventListener("keydown", clamp);

    return () => {
      window.removeEventListener("scroll", clamp);
      window.removeEventListener("wheel", clamp);
      window.removeEventListener("touchmove", clamp);
      window.removeEventListener("keydown", clamp);
    };
  }, [unlocked, boundaryRef]);

  return { unlocked, remainingSeconds };
}
