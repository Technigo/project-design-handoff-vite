import { Button } from "../styles/Button";

export const Hero = () => {
  return (
    <section
      className="relative bg-[url(/assets/images/crossfit-48.png)] p-40 md:p-66 bg-cover text-white flex flex-col items-center justify-center"
      style={{ height: "600px" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10">
        <h1 className="mt-11 text-h1-tab-mob lg:text-h1-desktop font-bold mb-6">
          fun, fabulous & fearless: crossfit for mums
        </h1>
        <h2 className="mb-6 text-h2-tab-mob">
          Ready for crossfit and cuddles? Join our small groups for amazing mums
          just like you.
        </h2>

        <Button
          className={
            "join-btn text-join-btn text-black md:text-join-btn-tablet lg:text-join-btn-desktop bg-crimson-light active:bg-plum-light hover:bg-terracotta text-button w-40 h-10"
          }
          label={"Join us!"}
        />
      </div>
    </section>
  );
};
