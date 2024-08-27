import styled from "styled-components";
import stretchingPoseImage from "../../public/images/stretchingpose.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 100px;
  box-sizing: border-box;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  position: relative;
  overflow: visible;
`;

const TextContent = styled.div`
  max-width: 500px;
  position: relative;
  z-index: 2;
`;

const Heading = styled.h1`
  font-family: "Gerbera", sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: #620981;
  margin-bottom: 60px;
`;

const Input = styled.input`
  width: 360px;
  height: 60px;
  border-radius: 60px;
  padding: 10px 40px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #111111;
  box-sizing: border-box;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #111111;
  margin-top: 15px;
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
`;

const Image = styled.img`
  width: 620px;
  height: auto;
  object-fit: cover;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

const Button = styled.button`
  width: 260px;
  height: 64px;
  border-radius: 60px;
  padding: 0 50px;
  background-color: #620981;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 22px;
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
