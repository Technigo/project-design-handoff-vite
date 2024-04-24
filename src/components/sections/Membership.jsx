import euro from '../../assets/euro-sign.svg';
import { GeneralButton } from '../GeneralButton';
import { PillButton } from '../PillButton';

export const Membership = () => {
  return (
    <section className="flex h-[570px] flex-col items-center bg-pray bg-cover bg-center bg-no-repeat px-11 pt-10 lg:h-[800px] lg:bg-cover	lg:bg-bottom lg:pt-16">
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
      <div className="inline-flex items-center justify-center font-futura ">
        <img src={euro} alt="euro" />
        <span className="text-base xl:text-xl">29.00</span>
      </div>
      <p className="my-2	text-base font-medium">Every month</p>
      <GeneralButton text="Sign up" />
    </section>
  );
};
