import { ButtonPrimary } from "../component/ButtonPrimary";
import { ButtonSecondary } from "../component/ButtonSecondary";
import { ButtonThird } from "../component/ButtonThird";

export const JoinUs = () => {
  return (
    <div className="flex flex-col items-center gap-28">
      <ButtonPrimary text={"Join us"} addedClasses="py-21 px-6" />
      <ButtonSecondary text={"Who are we?"} />
      <ButtonSecondary text={"Membership cards"} />
      <ButtonPrimary
        text={"Book a private session"}
        addedClasses="w-44 py-21 px-6 "
      />

      <div className="flex flex-row gap-2.5">
        <ButtonThird addedClasses="" text={"45 minutes"} />
        <ButtonThird text={"3 sections"} />
        <ButtonThird text={"Heart rate monitor"} />
      </div>
    </div>
  );
};
