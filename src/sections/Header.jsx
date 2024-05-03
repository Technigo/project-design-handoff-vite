import { Button } from "../components/Button";

export const Header = () => {
  return (
    <section className="flex h-headerMobile w-screen bg-header-image bg-cover bg-center bg-no-repeat px-8 py-16 md:px-16 lg:h-headerDesktop lg:px-32 lg:py-24">
      <div className="flex w-full flex-col justify-end gap-8 ">
        <div className="flex flex-col md:flex-row">
          <h1 className="text-left font-heading text-font32 leading-10 text-yellow md:text-font40 md:leading-lh48 lg:text-font56 lg:leading-lh56">
            Be with yourself at{" "}
            <span className="text-yellowLight">Oasis Wellness Center</span>
          </h1>
        </div>
        <div className="flex items-end justify-end">
          <Button btnText={"Check Availability"} />
        </div>
      </div>
    </section>
  );
};
