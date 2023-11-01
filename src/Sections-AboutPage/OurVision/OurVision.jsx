import "./ourVision.css"

export const OurVision = () => {
const ourVisionText = "Galactic Fitness was born from our deep love for Star Wars and our commitment to inclusivity. We welcome all, especially those new to fitness, and offer a supportive environment where everyone can unlock their potential. We want to unite fans and fitness enthusiasts in a community where everyone feels included. Together, we explore our potential, support one another, and build healthier lives. Galactic Fitness is more than a gym; it's a place to become the hero you've always admired. Join us on this epic adventure where the Force meets fitness, and unlock the hero within you."

  return (
   <section>
<div>
    <h1>OUR VISION</h1>
    <p>{ourVisionText}</p>
</div>
<div>
    <img src="/Images/ourVision-vader.png" alt="" />
</div>

   </section>
  )
}
