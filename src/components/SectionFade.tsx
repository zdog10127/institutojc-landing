type Direction = "dark-to-cream" | "cream-to-dark";

// Faixa fina com gradiente, usada entre seções de cores de fundo
// diferentes pra suavizar a transição (em vez de um corte seco).
export default function SectionFade({ direction }: { direction: Direction }) {
  const gradient =
    direction === "dark-to-cream"
      ? "bg-gradient-to-b from-jc-dark to-jc-cream"
      : "bg-gradient-to-b from-jc-cream to-jc-dark";

  return <div aria-hidden className={`h-10 w-full sm:h-16 ${gradient}`} />;
}
