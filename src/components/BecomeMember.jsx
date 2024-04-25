import membership from "/image-membership.png";

export const BecomeMember = () => {
  return (
    <section className="py-8">
      <div className="bg-amber">
        <div className="image-cut-out">
          <img src={membership} alt="membership-image" />
        </div>
        <div className="final-cta-content">
          <h3>Det handlar om dig</h3>
          <p>
            Ditt välmående är våran prioritet. Gå med i Studio Mama&apos;s
            community och stärk din kropp och ditt sinne!
          </p>
          <button>Bli medlem idag</button>
        </div>
      </div>
    </section>
  );
};
