import { Button } from "../../Reusable/Buttons/button"
import "./readmore.css"

export const ReadMore = () => {


const ourClanText = "At Galactic Fitness, we're on a mission to create heroes. With a warm welcome to all, including newcomers to fitness, we're here to help you unleash your potential. Our inspiration comes from the timeless spirit of the Star Wars universe. Let us be your guiding force on the path to becoming the hero of your own story. Join us on this epic adventure."
const ourConceptText = "Our unique concept blends fitness and fandom. We offer Jedi training, where you start as a Padawan and train with lightsabers, cardio, and wellness. For those drawn to the dark side, our Sith training is intense,focusing on sparring and self-defence. For those who seek the strength of the Mandalorians, our training emphasises on muscle mass and CrossFit. Whether you're a Jedi, Sith, or Mandalorian at heart, our gym caters to your inner hero's journey."

  return (
    <section className="readMore-section">
<div>
  <h1>THIS IS OUR CLAN</h1>
<p>{ourClanText}</p>
</div>

<div>
  <Button buttonText={"READ MORE"} buttonClass={"read-more-btn"} />
</div>

<div>
  <h1>OUR CONCEPTS</h1>
  <p>{ourConceptText}</p>
</div>
    </section>
  )
}
