import { comparisonNote, images } from "../data";

export default function PreparationTable() {
  return (
    <section className="bg-jc-cream px-5 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl font-semibold text-jc-ink sm:text-4xl">
          Sua preparação começa aqui!
        </h2>
        <p className="mt-3 text-base text-gray-600 sm:text-lg">
          Uma única metodologia. Três níveis de personalização
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
        <img
          src={images.preparationTable}
          alt="Tabela comparativa: Sua Preparação, Sua Coreografia e Seu Acompanhamento nas assessorias Essencial, Orientada e Exclusiva"
          className="w-full rounded-xl border border-jc-gold/20 shadow-sm"
        />

        <p className="mt-6 text-center text-sm text-gray-500 sm:text-base">
          {comparisonNote}
        </p>
      </div>
    </section>
  );
}
