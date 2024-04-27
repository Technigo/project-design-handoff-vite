import { Button } from "./Button";

export const WorkshopCard = ({ workshop }) => {
  return (
    <div className="flex h-workCardSmall flex-col overflow-hidden rounded-tl-2xl rounded-tr-custom md:h-workCardMed md:max-w-2xl lg:h-workCardLarge lg:max-w-5xl lg:flex-row lg:rounded-bl-custom">
      <div className="h-1/2 lg:h-full lg:w-1/2">
        <img
          className="h-full w-full object-cover object-center"
          src={workshop.imageUrl}
          alt={workshop.altText}
        />
      </div>
      <div className="flex flex-1 flex-col rounded-bl-custom rounded-br-2xl border-b-4 border-l-4 border-yellow bg-yellowLight px-4 py-8 md:p-8 lg:rounded-bl-none lg:rounded-tr-custom lg:border-b-8 lg:border-l-0 lg:border-t-8">
        <h3 className="font-heading text-xl font-medium leading-8 md:text-font26 md:leading-10">
          {workshop.title}
        </h3>
        <p className="pt-2 font-mont text-sm font-medium leading-6 tracking-tight md:text-lg md:leading-10">
          {workshop.text}
        </p>
        <div className="flex flex-grow items-end justify-end">
          <Button
            icon={"/icons/arrow_l.svg"}
            altText={"arrow"}
            btnText={"Continue to Book"}
          />
        </div>
      </div>
    </div>
  );
};
