import "./facilities.css"

export const Facilities = () => {

const facilitiesText = "At Galactic Fitness, our modern and cozy facilities offer the perfect environment for your fitness journey. Train in our well-equipped spaces featuring cutting-edge fitness tools. Find your inner peace in our meditation room, or engage in dynamic sparring and martial arts training in our dedicated dojo. Additionally, we have a unique 'handout' area with a cinema, complete with popcorn machines, where you can enjoy Star Wars movie nights with fellow enthusiasts. It's all here to enhance your experience as you become the hero of your story."

  return (
    <section className="facilities-section">
<div className="facilities-text-wrapper">
    <h1>OUR FACILITIES</h1>
    <p>{facilitiesText}</p>
</div>

<div className="facilities-card-wrapper">

    <div className="facilities-card">
        <img src="/Images/facilities-img-1.png" alt="" />
    </div>

    <div className="facilities-card">
        <img src="/Images/facilities-img-2.png" alt="" />
    </div>

    <div className="facilities-card">
        <img src="/Images/facilities-img-3.png" alt="" />
    </div>

    <div className="facilities-card">
        <img src="/Images/facilities-img-4.png" alt="" />
    </div>
    

</div>

    </section>
  )
}
