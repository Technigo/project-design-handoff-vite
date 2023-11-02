import testimonial1 from "/testimonials/testimonial-1.png"
import "./testimonials.css"

export const Testimonials = () => {
    return (
        <div className="red red-testimonial grid-parent">
            <div className="testimonials section">
                <img className="testimonial-pic" src={testimonial1} />
                <div className="testimonial-text">
                    <p>FamiliyFitness has been a game changer in our family. Finally we have time to exercise again!</p>
                    <p className="testimonial-caption">Helena and Marcus Brodtkorp, Members for 2 years</p>
                </div>
            </div>

        </div>
    )
}