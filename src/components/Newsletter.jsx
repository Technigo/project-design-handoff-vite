import styled from "styled-components";
import stretchingPoseImage from "../../public/images/stretchingpose.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 50px;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 920px) {
    padding: 0 60px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  position: relative;
  overflow: visible;

  @media (max-width: 725px) {
    flex-direction: column-reverse;
  }
`;

const TextContent = styled.div`
  max-width: 500px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1200px) {
    max-width: 100%;
  }

  @media (max-width: 725px) {
    align-items: center;
    text-align: center;
    margin: 0 auto;
    max-width: 100%;
  }
`;

const Heading = styled.h1`
  font-family: "Gerbera", sans-serif;
  font-weight: 700;
  font-size: 64px;
  line-height: 100px;
  color: #620981;
  margin-bottom: 60px;
  white-space: nowrap;
  overflow: visible;

  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 42.78px;
    margin-bottom: 30px;
  }

  @media (max-width: 725px) {
    font-size: 30px;
    line-height: 40.11px;
    text-align: center;
  }
`;

const Input = styled.input`
  width: 446px;
  height: 67px;
  border-radius: 60px;
  padding: 10px 50px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #111111;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    height: 31px;
    padding: 10px 15px;
    font-size: 14px;
  }

  @media (max-width: 920px) {
    width: 248px;
    height: 31px;
    padding: 10px 15px;
    font-size: 14px;
  }

  @media (max-width: 725px) {
    width: 343px;
    height: 67px;
    padding: 10px 50px;
    font-size: 20px;
  }

  @media (max-width: 350px) {
    width: 300px;
    height: 67px;
    padding: 10px 50px;
    font-size: 20px;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #111111;
  margin-top: 15px;

  @media (max-width: 1200px) {
    font-size: 12px;
    line-height: 18px;
    margin-top: 10px;
  }

  @media (max-width: 725px) {
    text-align: left;
  }

  @media (max-width: 350px) {
    font-size: 12px;
  }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  appearance: none;
  border: 2px solid #111111;
  border-radius: 5px;
  background-color: none;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: #620981;
    border: 2px solid #620981;
  }

  &:checked::after {
    content: "✓";
    display: block;
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 1200px) {
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }

  @media (max-width: 725px) {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  @media (max-width: 350px) {
    width: 30px;
    height: 20px;
  }
`;

const Image = styled.img`
  width: 680px;
  height: auto;
  object-fit: cover;
  position: relative;
  top: 0;
  right: 0;
  transform: translateY(0);
  z-index: 1;
  margin-top: 20px;

  @media (max-width: 1200px) {
    width: 400px;
  }

  @media (max-width: 920px) {
    width: 360px;
  }

  @media (max-width: 725px) {
    width: 100%;
    max-width: 360px;
  }
`;

const Button = styled.button`
  width: 300px;
  height: 64px;
  border-radius: 60px;
  padding: 0 50px;
  background-color: #620981;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  border: none;
  cursor: pointer;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #430159;
  }

  @media (max-width: 1200px) {
    width: 140px;
    height: 31px;
    font-size: 14px;
    margin-top: 20px;
  }

  @media (max-width: 725px) {
    width: 226px;
    height: 55px;
    font-size: 20px;
    margin-top: 40px;
  }
`;

export const Newsletter = () => {
  return (
    <Wrapper>
      <Container>
        <TextContent>
          <Heading>
            Stay connected,
            <br />
            join our newsletter.
          </Heading>
          <Input placeholder="Name" />
          <Input placeholder="Telephone" />
          <Input placeholder="E-mail" />
          <CheckboxLabel>
            <Checkbox type="checkbox" />
            I want to stay updated with the latest news,
            <br />
            events, workshops and special offers.
          </CheckboxLabel>
          <Button>Subscribe</Button>
        </TextContent>
        <Image src={stretchingPoseImage} alt="Stretching Pose" />
      </Container>
    </Wrapper>
  );
};
