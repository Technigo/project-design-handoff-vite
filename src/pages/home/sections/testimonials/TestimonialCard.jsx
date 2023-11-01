import data from "../../../../json/testimonials.json";

export const TestimonialCard = () => {
  return (
    <div className="testimonials-container">
      {data.testimonials.map(({ id, text, user }) => {
        return (
          <div className="single-testimonial" key={id}>
            <p>{text}</p>
            <span className="username">{user}</span>
          </div>
        );
      })}
    </div>
  );
};
