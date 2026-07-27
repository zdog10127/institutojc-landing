import { useRef } from "react";
import { steps } from "../data";
import { useScrollGate } from "../useScrollGate";

function formatTime(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function HowItWorks() {
  // A trava de rolagem libera só depois que este bloco (card "Compra
  // Segura" + aviso) estiver totalmente visível — ou seja, dá tempo de
  // ver o vídeo e o primeiro passo antes de liberar o resto da página.
  const gateRef = useRef<HTMLDivElement>(null);
  const { unlocked, remainingSeconds } = useScrollGate(gateRef);

  return (
    <section className="bg-jc-cream px-5 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold text-jc-ink sm:text-4xl">
          Como funciona?
        </h2>
        <p className="mt-3 text-base text-gray-600 sm:text-lg">
          Da compra ao grande dia, você acompanha cada etapa com clareza e
          tranquilidade
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-5xl space-y-3">
        {steps.map((step, i) => {
          const card = (
            <div className="rounded-xl bg-white px-6 py-8 text-center shadow-sm sm:px-10 sm:py-10">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-jc-gold font-display text-xl text-jc-gold">
                {i + 1}
              </div>
              <h3 className="font-display mt-4 text-xl font-semibold text-jc-ink sm:text-2xl">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-2xl text-[15px] leading-relaxed text-gray-600 sm:text-base">
                {step.text}
              </p>
            </div>
          );

          if (i === 0) {
            return (
              <div key={step.title} ref={gateRef}>
                {card}
                {!unlocked && (
                  <p className="mt-4 text-center text-lg font-medium text-jc-gold sm:text-xl">
                    Continue assistindo — libera em{" "}
                    {formatTime(remainingSeconds)}
                  </p>
                )}
              </div>
            );
          }

          return <div key={step.title}>{card}</div>;
        })}
      </div>
    </section>
  );
}
