import "./trainers.css"

export const Trainers = () => {
  return (
    <section className="trainers-section">
        <div className="trainers-headline">
            <h1>OUR TRANIERS</h1>
            <p>3 CONCEPTS, 1 TRIBE, GET READY</p>
        </div>

        <div className="tranier-card-wrapper">
            <div className="trainer-card">
                <img className="trainer-card-img" src="/Images/trainer-dragana.png" alt="image of dragana" />
                {/* <div className="trainer-card-text">
                    <h1>Dragana</h1>
                    <p>Meet our Sith Trainer! She&apos;s all about intense workouts and self-discipline. With a background in Taekwando and MMA, Dragana will help you build strength and resilience through Sith training.</p>
                </div> */}
            </div>

            <div className="trainer-card">
                <img src="/Images/trainer-apinya.png" alt="image of apinya" />
                {/* <div className="trainer-card-text">
                    <h1>Apinya</h1>
                    <p>Meet our Jedi and Meditation Instructor! Apinya is well-versed in Japanese Kendo and specialises in Jedi training through Karate. She will guide you to find inner peace with meditation and wellness.</p>
                </div> */}
            </div>

            <div className="trainer-card">
                <img src="/Images/trainer-hamza.png" alt="image of hamza" />
                {/* <div className="trainer-card-text">
                    <h1>Hamza</h1>
                    <p>Meet our Mandalore Hamza! With a focus on building muscle mass and endurance through high-intensity CrossFit workouts, Hamza is here to help you achieve your fitness goals. This is the way!</p>
                </div> */}
            </div>
        </div>

    </section>
  )
}
