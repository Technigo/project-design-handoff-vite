import data from "../../../../json/testimonials.json";
import "./Testimonials.css";

export const TestimonialCard = () => {
  return (
    <div className="testimonials-container">
      {data.testimonials.map(({ id, text, customer }) => {
        return (
          <div className="single-testimonial" key={id}>
            <p>{text}</p>
            <span className="customer-name">{customer}</span>
          </div>
        );
      })}
    </div>
  );
};
