import { GeneralButton } from '../GeneralButton';

export const Testimonial = () => {
  return (
    <section className="flex flex-col">
      <div className="h-96 bg-tree bg-cover bg-center"></div>
      <div className="bg-neutral-milk px-4 py-11 text-center text-base">
        <p>
          “I left with a feeling of being strong, powerful and capable of so
          much more than I could ever imagine.
        </p>
        <p className="mt-4">Your way of teaching is world-class.”</p>
        <p className="mt-4">- Grace Wetterlund, SWEDEN</p>
        <GeneralButton text="More testimonials" customStyle="mt-8" />
      </div>
    </section>
  );
};
