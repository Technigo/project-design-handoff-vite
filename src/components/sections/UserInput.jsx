import { GeneralButton } from '../GeneralButton';

const placeholder = ['First Name', 'Last Name', 'Email Address'];

export const UserInput = () => {
  return (
    <>
      <section className="grid w-full items-center justify-center justify-items-center bg-neutral-milk px-[38px] py-20">
        <div className="flex max-w-96 flex-col pb-[24px] text-center font-futura font-bold xl:mt-20 xl:max-w-max">
          <h2 className="font-futura text-xl font-bold md:text-2xl xl:text-4xl">
            JOIN OUR COMMUNITY
          </h2>
          <p className=" justify-self-center px-10 pt-6 text-center font-avenir text-base font-medium text-black">
            Don’t miss out on free offerings, exclusive offers and new classes
            and retreats
          </p>
        </div>
        <form
          className="grid place-items-center gap-8 xl:mb-12 xl:mt-8 xl:flex"
          onSubmit={(e) => e.preventDefault()}
        >
          {placeholder.map((item, index) => (
            <input
              key={index}
              type="text"
              placeholder={item}
              className="h-[40px] border-[1px] border-primary-black bg-white text-center font-medium text-black focus:outline-none focus:ring-2 focus:ring-accent-blue xl:w-56 "
            />
          ))}
          <GeneralButton text="Join us" customStyle="justify-self-center" />
        </form>
      </section>
    </>
  );
};
