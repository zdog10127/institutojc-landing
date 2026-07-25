import { images } from "../data";

export default function Hero() {
  return (
    <section className="bg-jc-dark px-5 pb-10 pt-16 text-center text-jc-cream sm:px-6 md:pt-20">
      <h1 className="font-display mx-auto max-w-xl text-2xl italic leading-snug sm:text-3xl md:text-4xl">
        Transforme sua dança
      </h1>
      <h2 className="font-display mx-auto mt-1 max-w-xl text-2xl font-semibold leading-snug sm:text-3xl md:text-4xl">
        num momento inesquecível!
      </h2>

      <img
        src={images.logoDark}
        alt="Instituto JC - Instituto de Dança"
        className="mx-auto mt-8 w-32 md:w-36"
      />
    </section>
  );
}
