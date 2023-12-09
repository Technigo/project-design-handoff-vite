// import { SimpleSlider } from "./SimpleSlider"

import testimonial1 from "/testimonials/testimonial-1.png"
import testimonial2 from "/testimonials/Testimonial2.png"
import testimonial3 from "/testimonials/Testimonial3.png"
import testimonial4 from "/testimonials/Testimonial4.png"

import "./testimonials.css"

export const Testimonials = () => {

    const testimonialArray = [
        {
            index: 1,
            image: testimonial1,
            text: "FamiliyFitness has been a game changer in our family. Finally we have time to exercise again!",
            name: "Helena and Marcus Brodtkorp,",
            memberYears: "Members for 2 years"
        }, 
        {
            index: 2,
            image: testimonial2,
            text: "You don’t have to have children to come here. It’s a modern centre, and the people who work here are like friends to me and my husband.",
            name: "Christina Holm,",
            memberYears: "Member for 7 years"
        }, 
        {
            index: 3,
            image: testimonial3,
            text: "For many years I had a terrible back pain, but couldn't prioritize training because I’m a single dad. FamilyFitness came to my rescue.",
            name: "Olav Stormberg,",
            memberYears: "Member for 5 years"
        }, 
        {
            index: 4,
            image: testimonial4,
            text: "It’s great fun being at MiniFit! I’m always really looking forward to playing there.I love it!",
            name: "Susanna Lindtner",
            memberYears: "Minifit member for 1 year"
        }
    ]
    return (
        <div className="red red-testimonial grid-parent">
             <div className="testimonials section">
                 {/*testimonialArray.map((item, index) => {*/
        //             <div className={`testimonial-${index%2}`}>
        //                 <img className="testimonial-pic" src={item.image} />
        //                 <div className="testimonial-text">
        //                     <p>{item.text}</p>
        //                     <p className="testimonial-caption">{item.name}</p>
        //                     <p className="testimonial-caption">{item.memberYears}</p>

        //                 </div>
        //             </div>
        //         })}
    }
                <div className={`testimonial-${testimonialArray[0].index%2}`}>
                    <img className="testimonial-pic" src={testimonial1} />
                    <div className="testimonial-text">
                        <p>{testimonialArray[0].text}</p>
                        <p className="testimonial-caption">{testimonialArray[0].name}</p>
                        <p className="testimonial-caption">{testimonialArray[0].memberYears}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}