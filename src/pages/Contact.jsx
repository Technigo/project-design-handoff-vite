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
import contact_image from "../assets/images_mobile/contact_image2.png"
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  let headline_contact = t("contact.headline_contact");
  const contact_info = [
    {
      id: "1d",
      image: emailIcon,
      alt: "email icon",
      text: t("contact.info_contact.emailText")
    },
    {
      id: "2d",
      image: chatIcon,
      alt: "char icon",
      text: t("contact.info_contact.chatText")

    },
    {
      id: "3d",
      image: callIcon,
      alt: "call icon",
      text: t("contact.info_contact.callText")

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
    <section className="contact-page-wrapper">
      <div className="contact-content">
        <H2_Headline h2_headline={headline_contact} />
        <div className="contact-image-content-wrapper">
          {isQuestionSubmitted ?
            <img className="coffeeimg" src={coffeImg} alt="Coffee cup with the text Thanks" /> :
            <img
              src={contact_image}
              alt="woman doing a tree pose."
              className="contact-image"
            />
          }
          <div className="contact-page-content-wrapper">
            {isQuestionSubmitted ? (
              <>
                <div className="contact-info-wrapper question-asked-wrapper">
                  <img src={contact_info[0].image} alt={contact_info[0].alt} />
                  <div className="contact-info question-asked">
                    <PText text={t("contact.form_contact.confirmationText")} />
                    <NewQuestionBtn onClick={handleAskQuestionClick} />
                  </div>
                </div>
              </>
            ) : isFormVisible ? (
              <div className="contact-page-form">
                <div className="contact-info-wrapper">
                  <img src={contact_info[0].image} alt={contact_info[0].alt} />
                  <form onSubmit={handleFormSubmit} className="contact-info">
                    <PText
                      className="new_line"
                      text={contact_info[0].text}
                    />
                    <div className="form-field">
                      <label htmlFor="name">
                        <PText text={t("contact.form_contact.label.0")} />
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">
                        <PText text={t("contact.form_contact.label.1")}
                        />
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="question">
                        <PText text={t("contact.form_contact.label.2")} />
                      </label>
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
              </div>
            ) : (
              <div className="ask-question-first contact-info-wrapper">
                <img src={contact_info[0].image} alt={contact_info[0].alt} />
                <div className="contact-info">
                  <PText
                    text={contact_info[0].text}
                  />
                  <ContactBtn onClick={handleAskQuestionClick} />
                </div>
              </div>
            )}
            <div className="contact-content-wrapper">
              <div className="contact-info-wrapper">
                <img src={contact_info[1].image} alt={contact_info[1].alt} />
                <div className="contact-info">
                  <PText
                    className="new_line"
                    text={contact_info[1].text}
                  />
                  <ChatBtn />
                </div>
              </div>
              <div className="contact-info-wrapper">
                <img src={contact_info[2].image} alt={contact_info[2].alt} />
                <div className="contact-info">
                  <PText
                    className="new_line"
                    text={contact_info[2].text}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
