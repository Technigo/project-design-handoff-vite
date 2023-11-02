import styled from "styled-components";

const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  padding: 60px 52px;
  gap: 64px;
  max-width: 400px;
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
  }
  p {
    font-size: 12px;
    font-weight: 300;
    line-height: 18px;
    padding-bottom: 10px;
  }

  button {
    background-color: #c00202;
    color: #ffffff;
    border-radius: 10px;
    border-style: none;
    padding: 6px 14px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const Articles = () => {
  return (
    <ArticlesContainer>
      <div className="join-workout">
        <img src="/article1.png" className="join-workout" alt="Join Workout" />
        <h2>Join a full-body workout</h2>
        <p>
          Our studio bringing you remarkable full-body workouts focused on body
          positivity and inclusivity, with expert instructors to guide you every
          step of the way.
        </p>
        <button>book a class</button>
      </div>
      <div className="home-workout">
        <img
          src="public/article2.png"
          className="home-workout"
          alt="Workout at home"
        />
        <h2>Workout at home</h2>
        <p>
          Hundreds of on-demand workouts. Start with a collection of fiery
          beginner barre workouts to light up your body in a powerful,
          methodical way.
        </p>
        <button>Start free trial</button>
      </div>
    </ArticlesContainer>
  );
};
