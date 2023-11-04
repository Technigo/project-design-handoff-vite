import "./Contact.css";
import { SectionTitle } from "../../../../components/reusable/SectionTitle";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="page-wrapper">
        <div className="text-info">
          <SectionTitle className="contact-title" title="Let's get in touch:" />
          <p>
            I believe that energy is everywhere and when you subscribe to my
            newsletter you will get my kind of energy in your mailbox. Every now
            and then. But a good music list is never a bad energy?!
          </p>
        </div>
        <form action="">
          <div className="input-wrapper">
            <label htmlFor="">Name:</label>
            <input class="input-box" type="text" placeholder="your name" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="">Email:</label>
            <input class="input-box" type="text" placeholder="your email" />
          </div>
          <button className="form-btn">Good music, yes please!</button>
        </form>
      </div>
    </section>
  );
};
