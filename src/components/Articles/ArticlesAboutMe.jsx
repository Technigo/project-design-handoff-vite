import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Button } from "../Buttons/Button";

const ArticlesAboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 60px;
  max-width: 650px;

  .testimonial-0 {
    margin-bottom: 50px;
  }

  .testimonial {
    margin-bottom: 50px;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  h2 {
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    padding-bottom: 30px;
    text-transform: uppercase;
  }

  p {
    font-size: 12px;
    font-weight: 300;
    line-height: 18px;
    padding-bottom: 10px;
  }

  Button {
    background-color: #c00202;
    color: #ffffff;
    font-weight: 600;
  }

  @media screen and (min-width: 768px) {
    margin: auto;
  }

  h2 {
    font-size: 30px;
  }

  p {
    font-size: 18px;
  }

  Button {
    font-size: 18px;
    padding: 8px 25px;
    border-radius: 10px;
    margin-top: 20px;
  }

  .testimonial-0 {
    margin-top: 100px;
  }

  .testimonial-1 {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 900px;

    .testimonial-0 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 70px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        grid-column: 2 / 2;
        grid-row: 1 / 1;

        /* .testimonial-details {
          grid-column: 1 / 2;
          grid-row: 1 / 1;
        } */
      }
    }

    .testimonial-1 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 70px;

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }
    p {
      line-height: 160%;
    }
  }
`;

export const ArticlesAboutMe = () => {
  const { t, ready } = useTranslation(); // Use useTranslation to get the 't' function from i18next

  const testimonial = t("aboutPage.mainSection.testimonial", {
    returnObjects: true,
  });

  if (!ready) return "Loading testimonials"; // If the translations are not ready, return "Loading testimonials..."

  return (
    <ArticlesAboutMeContainer>
      <div className="instructors-container">
        <h2>{t("aboutPage.mainSection.secondaryHeading")}</h2>
        <div className="instructors">
          {testimonial.map((testimonial, index) => (
            <div key={index} className={`testimonial-${index}`}>
              <img src={testimonial.imageurl} alt={t("testimonial.imagealt")} />
              <div className="testimonial-details">
                <h2>{testimonial.heading}</h2>
                <p>{testimonial.paragraph}</p>
                <Button>{testimonial.button}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ArticlesAboutMeContainer>
  );
};

{
  /* <div className="instructors-container">
<h2>meet your instructors</h2>
  <div className="instructors">
      {testimonial.map(
          (
          testimonial,
          index
          ) => (
          <div key={index} className={`testimonial-${index}`}><img src={testimonial.imageurl} alt={testimonial.imagealt} />
          <div className="testimonial-details">
              <h2>{testimonial.heading}</h2>
              <p>{testimonial.paragraph}</p>
              <Button>{testimonial.button}</Button>
          </div>
      )}

  </div>

</div>
);
};
 */
}
