import "./offer.css"

export const Offer = () => {

    const offerText = "At Galactic Fitness, we embrace all ages and fitness levels. Whether you're a youngling beginning your fitness journey or a seasoned master, we're here to support you. Our special membership packages cater to your unique needs, ensuring that everyone, from Padawans to Masters, can unlock their inner hero with us."
  return (
    <section className="offer-section">
      <div className="offer-text-wrapper">
        <h1>WHAT WE OFFER</h1>
        <p>{offerText}</p>
       </div>
    </section>
  )
}
