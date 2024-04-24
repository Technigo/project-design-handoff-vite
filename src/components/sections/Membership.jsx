import pray from '../../assets/bgImage/yoga-pray.png';
import euro from '../../assets/euro-sign.svg';
import { GeneralButton } from '../GeneralButton';
import { PillButton } from '../PillButton';

export const Membership = () => {
  return (
    <section className="grid grid-cols-1 grid-rows-[auto_auto__auto_1fr] place-items-center  bg-[#ECECEC] px-11 pt-10 md:pt-20 xl:pt-32">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="font-futura text-xl font-bold md:text-2xl xl:text-4xl">
          JOIN OUR ONLINE MEMBERSHIP
        </h2>
        <h3 className="font-futura text-lg font-medium xl:text-xl">
          ASPIRE YOGA ONLINE STUDIO
        </h3>
      </div>
      <div className="my-4 inline-flex w-full justify-center">
        <PillButton />
      </div>
      <div>
        <div className="inline-flex items-center justify-center font-futura ">
          <img src={euro} alt="euro" />
          <span className="text-base xl:text-xl">29.00</span>
        </div>
        <p className="text-base font-medium">Every month</p>
      </div>
      <GeneralButton
        text="Sign up"
        customStyle="relative top-5 md:top-7 xl:top-10"
      />
      <div className="relative bottom-0">
        <img
          src={pray}
          alt="yoga pose pray"
          className="w-52 object-cover md:w-72 xl:w-[28rem]"
        />
      </div>
    </section>
  );
};
