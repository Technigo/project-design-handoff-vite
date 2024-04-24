export const Article = () => {
  return (
    <section className="p-20 md:p-66 flex justify-start overflow-x-scroll">
      <div className="flex-1 w-full" style={{ minWidth: "189px" }}>
        <img src="/assets/images/crossfit-23.jpg" alt="Crossfit Mamas" />
        <h2 className="my-[13px]">what is crossfit mamas?</h2>
        <p>
          A community with fantastic mums just like you, offering fun,
          challenging workouts in small groups.
        </p>
      </div>

      <div className="flex-1 mx-4" style={{ minWidth: "189px" }}>
        <img src="/assets/images/crossfit-46.jpg" alt="Crossfit Mamas" />
        <h2 className="my-[13px]">what to expect the first time</h2>
        <p>
          You might be nervous, and that’s normal. But don’t worry, we’ll guide
          you through it.
        </p>
      </div>

      <div className="flex-1" style={{ minWidth: "189px" }}>
        <img
          src="/assets/images/unsplash_h4i9G-de7Po.jpg"
          alt="Crossfit Mamas"
        />
        <h2 className="my-[13px]">classes tailored to your needs</h2>
        <p>
          Our classes are tailored for new mums and programmed by specialist
          coaches for safe lifting.
        </p>
      </div>
    </section>
  );
};
