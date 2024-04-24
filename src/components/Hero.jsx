import styled from "styled-components";

const StyledHero = styled.section`
  font-family: "AvenirMedium", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 177px;

  background-image: url("/heading.png");
  background-size: cover;
  background-position: center 50%;
  background-repeat: no-repeat;

  .web-title {
    position: relative;
  }

  .web-title-logo {
    position: absolute;
    top: 36%;
    left: 6%;
  }

  h1 {
    margin-top: 100px;
    font-family: "Calistoga", serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 75px;
    letter-spacing: 7.2px;
  }

  h2 {
    color: #000;

    font-family: "AvenirMedium", sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .title-extra-info {
    margin-top: 160px;
  }

  .slogan-keyword {
    margin-top: 10rem;
    color: #000;
    font-family: "AvenirBlack", sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  .start-btn {
    margin-top: 15vw;
    margin-bottom: 1rem;
  }

  .customer-comments {
    width: 100%;
    background-color: #e4dbd2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 8rem;
  }

  .customer-comments li {
    margin-right: 7vw;
  }

  #last-comment {
    margin-right: 0;
  }

  li {
    list-style-type: none;
    margin: 0 auto;
  }

  .comment-keyword {
    color: #000;
    font-family: "AvenirBlack", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .comment-break {
    display: block;
  }
`;

export const Hero = () => {
  return (
    <StyledHero className="hero-section">
      <div className="web-title">
        <img
          className="web-title-logo"
          src="./curve.png"
          alt="web-title-logo"
        />
        <h1>Curve Pilates</h1>
      </div>
      <h2>Wellness and Movement</h2>
      <h2 className="title-extra-info">
        Helping <span className="slogan-keyword">everybody</span> to strengthen,
        heal & recharge
      </h2>
      <button className="start-btn">Get Started</button>
      <ul className="customer-comments">
        <li className="comment">
          “I always feels <span className="comment-keyword">so good</span> after
          a session, I saw improvements after a few weeks”
          <span className="comment-break">- Charlotte</span>
        </li>
        <li className="comment">
          “The teachers are <span className="comment-keyword">fantastic </span>
          and the classes are so fun!”
          <span className="comment-break">- Ben</span>
        </li>
        <li className="comment" id="last-comment">
          “Pilates is the only exercise that has worked for me,
          <span className="comment-keyword"> no more back pain</span>”
          <span className="comment-break">- Jesse</span>
        </li>
      </ul>
    </StyledHero>
  );
};
