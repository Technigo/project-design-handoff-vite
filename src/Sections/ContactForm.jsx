import { useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [message, setMessage] = useState("");

  const handleAnswers = () => {
    if (!name || !email || !message) {
      alert("Please fill in the fields!");
    } else if (!email.includes("@")) {
      alert("Please fill in a valid email address!")
    } else {
      handleSubmit(); //why cannot submit when user has updated a correct email?
    }
  }

  const handleInputNameChange = (e) => {
    setName(e.target.value);
  }

  const handleInputEmailChange = (e) => {
    setEmail(e.target.value);
  }
 
  const updateTextarea = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. We will contact you shortly!");
  };

  return (
    <div className="form-wrapper">
      <form>
        <h3>Have more questions or feedback? Message us!</h3>
        <div className="full-input">
          <label htmlFor="name">name</label>
          <input type="text" name="name" value={name} onChange={handleInputNameChange}></input>
        </div>

        <div className="full-input">
          <label htmlFor="email">email</label>
          <input type="text" name="email" value={email} onChange={handleInputEmailChange}></input>
        </div>

        <div className="full-message">
          <label htmlFor="message">message</label>
          <textarea name="message" rows={10} cols={30} value={message} onChange={updateTextarea}></textarea>
        </div>
      </form>

      <button type="submit" className="submit" onClick={handleAnswers}>Submit</button>
    </div>
    

  )
}
