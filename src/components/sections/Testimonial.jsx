import { GeneralButton } from '../GeneralButton';
import treePose from '../../assets/bgImage/yoga-pose-tree.jpeg';

export const Testimonial = () => {
  return (
    <section className="flex flex-col md:flex-row">
      {/* <div className="min-h-96 w-full bg-tree bg-cover bg-center md:h-auto md:min-h-[30rem] md:w-3/6"></div> */}
      <div className="md:w-3/6">
        <img
          className="object-cover"
          src={treePose}
          alt="image of yoga tree pose"
        />
      </div>
      <div className=" bg-neutral-milk px-4 py-11 text-center text-base md:h-full md:w-3/6 md:place-content-center md:px-16 md:text-lg xl:px-24 xl:text-xl">
        <p>
          “I left with a feeling of being strong, powerful and capable of so
          much more than I could ever imagine. Your way of teaching is
          world-class.”
        </p>
        <p className="mt-4">- Grace Wetterlund, SWEDEN</p>
        <GeneralButton text="More testimonials" customStyle="mt-8" />
      </div>
    </section>
  );
};
