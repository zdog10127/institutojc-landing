import { links, pricingCards } from "../data";

export default function PricingCards() {
  return (
    <section id="assessoria" className="bg-jc-dark px-5 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-2xl text-center text-jc-cream">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Escolha sua Assessoria
        </h2>
        <p className="mt-3 text-base text-jc-cream/70 sm:text-lg">
          A mesma metodologia. O nível de acompanhamento ideal para você
        </p>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center gap-14 sm:mt-14 sm:gap-16">
        {pricingCards.map((card) => (
          <div key={card.id} className="w-full max-w-sm">
            <img
              src={card.image}
              alt={card.name}
              className="w-full drop-shadow-xl"
            />

            <details className="group mt-4 rounded-lg bg-jc-cream/95 open:rounded-b-none">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-base font-medium text-jc-ink">
                Ver detalhes da {card.name}
                <span className="text-jc-gold transition-transform group-open:rotate-90">
                  ›
                </span>
              </summary>
              <div className="space-y-4 rounded-b-lg bg-jc-cream/95 px-5 pb-5 text-[15px] text-jc-ink sm:text-base">
                <div>
                  <p className="font-semibold">AO COMPRAR VOCÊ RECEBE:</p>
                  <ul className="mt-1 list-inside list-disc space-y-1 text-gray-700">
                    {card.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                {card.courtesy.length > 0 && (
                  <div>
                    <p className="font-semibold">CORTESIA:</p>
                    <ul className="mt-1 list-inside list-disc space-y-1 text-gray-700">
                      {card.courtesy.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {card.choreographyReceives.length > 0 && (
                  <div>
                    <p className="font-semibold">
                      AO ESCOLHER SUA(S) COREOGRAFIA(S) VOCÊ RECEBE:
                    </p>
                    <ul className="mt-1 list-inside list-disc space-y-1 text-gray-700">
                      {card.choreographyReceives.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className="text-base font-semibold text-jc-gold">
                  INVESTIMENTO: {card.price}
                </p>

                <div className="space-y-1 text-xs leading-relaxed text-gray-500">
                  {card.footnotes.map((f, i) => (
                    <p key={i}>{f}</p>
                  ))}
                </div>
              </div>
            </details>

            <a
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block rounded-lg bg-jc-ink py-4 text-center text-base font-semibold text-blue-400 transition hover:bg-jc-ink/80"
            >
              Quero a {card.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
