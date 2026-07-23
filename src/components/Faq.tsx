import { faqItems } from "../data";

export default function Faq() {
  return (
    <section className="bg-jc-gray px-5 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold text-jc-ink sm:text-4xl">
          Perguntas Frequentes
        </h2>
        <p className="mt-3 text-base text-gray-600 sm:text-lg">
          Reunimos as dúvidas mais comuns para que você tenha total segurança
          antes de escolher sua assessoria.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl divide-y divide-jc-gold/20">
        {faqItems.map((item) => (
          <details key={item.question} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-jc-gold">
              <span className="text-base font-medium sm:text-lg">
                {item.question}
              </span>
              <span className="shrink-0 text-xl transition-transform group-open:rotate-90">
                ›
              </span>
            </summary>
            <div className="mt-3 space-y-2 whitespace-pre-line text-[15px] leading-relaxed text-gray-700 sm:text-base">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
