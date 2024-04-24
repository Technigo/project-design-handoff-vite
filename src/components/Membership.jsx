import euro from '../assets/euro-sign.svg';
import { Button } from './Button';
import { SignupButton } from './SignupButton';

export const Membership = () => {
  return (
    <section className="flex h-[570px] flex-col items-center bg-pray bg-cover bg-center bg-no-repeat px-11 pt-20 ">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="font-futura text-xl font-bold">
          JOIN OUR ONLINE MEMBERSHIP
        </h2>
        <h3 className="font-futura text-lg font-medium">
          ASPIRE YOGA ONLINE STUDIO
        </h3>
      </div>
      <div className="my-4 inline-flex w-full justify-center">
        <SignupButton />
      </div>
      <div className="inline-flex items-center justify-center font-futura ">
        <img src={euro} alt="euro" />
        <span className="text-base">29.00</span>
      </div>
      <p className="my-2	text-base font-medium">Every month</p>
      <Button text="Sign up" />
    </section>
  );
};
