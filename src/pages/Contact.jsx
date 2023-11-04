import React, { useState } from 'react';
import callIcon from "../assets/icons/call.svg"
import chatIcon from "../assets/icons/chat.svg"
import emailIcon from "../assets/icons/email.svg"
import { H2_Headline } from "../components/Typography/H2_Headline";
import "./contact.css";
import { PText } from "../components/Typography/PText.jsx"
import { ContactBtn } from "../components/Buttons/contactBtn.jsx";
import { ChatBtn } from "../components/Buttons/ChatBtn.jsx";
import { SubmitBtn } from '../components/Buttons/SubmitBtn.jsx';
import { NewQuestionBtn } from '../components/Buttons/NewQuestionBTN.jsx';
import coffeImg from "../assets/images_mobile/Coffee_img.png";

export const Contact = () => {

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  let headline_contact = "Welcome to contact us";
  const contact_info = [
    {
      id: "1d",
      image: emailIcon,
      alt: "email icon",
      text: `Fill in our form and we'll get back 
      to you in 24 hours`,
    },
    {
      id: "2d",
      image: chatIcon,
      alt: "char icon",
      text: `Chat with us 
      Everyday
      9PM - 10AM CET`,
    },
    {
      id: "3d",
      image: callIcon,
      alt: "call icon",
      text: `Call us +46 771 793 336
      Monday - Friday 
      9PM - 5AM CET`,
    }
  ];
  const handleAskQuestionClick = () => {
    setIsFormVisible(true);
    setIsQuestionSubmitted(false);
    setName('');
    setEmail('');
    setQuestion('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsFormVisible(false);
    setIsQuestionSubmitted(true);
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-content">
        <H2_Headline h2_headline={headline_contact} />
        {isQuestionSubmitted ? (
          <div className="ask-new-question-wrapper">
            <img src={coffeImg} alt=""/>
            <div className="contact-info-wrapper">
              <img src={contact_info[0].image} alt={contact_info[0].alt} />
              <div className="contact-info">
                <PText text="Thanks for your question! We’ll get back to you within 24 hours." />
                <NewQuestionBtn onClick={handleAskQuestionClick} />
              </div>
            </div>
          </div>
        ) : isFormVisible ? (
          <div className="contact-info-wrapper">
            <img src={contact_info[0].image} alt={contact_info[0].alt} />
            <form onSubmit={handleFormSubmit} className="contact-info">
              <PText text={contact_info[0].text} />
              <div className="form-field">
                <label htmlFor="name"><PText text="Name" /></label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email"><PText text="Email" /></label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="question"><PText text="How can we help?" /></label>
                <textarea
                  id="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  rows="5"
                  required
                />
              </div>
              <SubmitBtn />
            </form>
          </div>
        ) : (
          <div className="question contact-info-wrapper">
            <img src={contact_info[0].image} alt={contact_info[0].alt} />
            <div className="contact-info">
              <PText text={contact_info[0].text} />
              <ContactBtn onClick={handleAskQuestionClick} />
            </div>
          </div>
        )}
        <div className="chat contact-info-wrapper">
          <img src={contact_info[1].image} alt={contact_info[1].alt} />
          <div className="contact-info">
            <PText text={contact_info[1].text} />
            <ChatBtn />
          </div>
        </div>
        <div className="phone contact-info-wrapper">
          <img src={contact_info[2].image} alt={contact_info[2].alt} />
          <div className="contact-info">
            <PText text={contact_info[2].text} />
          </div>
        </div>
      </div>
    </div>
  );
}
