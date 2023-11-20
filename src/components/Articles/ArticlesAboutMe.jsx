import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Button } from "../Buttons/Button";

const ArticlesAboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2.5rem;
  max-width: 650px;

  .testimonial-0 {
    margin-bottom: 50px;
  }

  .testimonial-1 {
    margin-bottom: 50px;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  h2 {
    font-size: 19px;
    font-weight: 600;
    text-align: center;
    padding: 80px 0;
    text-transform: uppercase;
  }

  h3 {
    font-size: 19px;
    margin: 50px 0 25px;
  }

  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 160%;
    padding-bottom: 10px;
  }

  Button {
    background-color: #c00202;
    color: #ffffff;
    font-weight: 800;
    font-size: 14px;
    padding: 8px 25px;
    border-radius: 12px;
    line-height: 160%;
  }

  @media screen and (min-width: 768px) {
    margin: auto;

    h2,
    h3 {
      font-size: 30px;
    }

    img {
      max-width: 500px;
      height: 343px;
    }
    p {
      font-size: 24px;
      line-height: 160%;
    }
    Button {
      font-size: 24px;
      margin-top: 20px;
    }

    .testimonial-0 {
      margin-top: 100px;
    }

    .testimonial-1 {
      margin-bottom: 50px;
    }
  }

  @media screen and (min-width: 1024px) {
    max-width: 1000px;

    .testimonial-0 {
      display: grid;
      grid-template-columns: 60% 40%;
      column-gap: 56px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        grid-column: 2 / 2;
        grid-row: 1 / 1;
      }
    }

    .testimonial-1 {
      display: grid;
      grid-template-columns: 40% 60%;
      column-gap: 56px;

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }

    h2 {
      font-size: 36px;
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
          {testimonial.map(
            (
              testimonial,
              index // Accessing the 'cards' section of the JSON data
            ) => (
              <div key={index} className={`testimonial-${index}`}>
                {/*Add a class to each article*/}
                <img
                  src={testimonial.imageurl} // Accessing the 'imageurl' section of the JSON data
                  alt={t("testimonial.imagealt")} // Accessing the 'imagealt' section of the JSON data
                />
                <div className="testimonial-details">
                  <h3>{testimonial.heading}</h3>{" "}
                  {/* Accessing the 'heading' section of the JSON data */}
                  <p>{testimonial.paragraph}</p>{" "}
                  {/* Accessing the 'paragraph' section of the JSON data */}
                  <Button>{testimonial.button}</Button>
                </div>
              </div>
            )
          )}
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
