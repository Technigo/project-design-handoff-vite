import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Headings } from "../Components/Headings";
import styled from "styled-components";

const MediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`
const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (min-width: 394px) {
    gap: 79px;
  }
`

const Button = styled.button`
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: var(--font);
  font-size: 15px;
  line-height: 18.17px;
  font-weight: 500;

  @media (min-width: 394px) {
    font-size: var(--text-size-mobile);
    line-height: var(--text-height-mobile);
`

const Icon = styled.svg`
  width: 30px;
  height: 30px;

  @media (min-width: 394px) {
    width: 50px;
    height: 50px;
  }
`

const StyledImportedIcon = styled(FontAwesomeIcon)`
  width: 30px;
  height: 30px;

  @media (min-width: 394px) {
    width: 50px;
    height: 50px;
  }
`

export const SocialMedia = () => {
  const sectionId = 7;

  return (
    <MediaWrapper>
      <Headings sectionId={sectionId} />
      <IconWrapper>
        <Button type="button">
          <Icon 
            width="34" 
            height="34" 
            viewBox="0 0 34 34" 
            fill="none" 
            xmlns="http://www.w3.org/2000/Icon"
          >
            <path 
              id="Vector 2" 
              d="M4.72137 26.6003L3.19707 30.665L8.27807 29.6488C12.0252 31.4525 13.7663 31.7775 17.4239 31.6812C20.6952 31.5952 22.7839 31.3922 25.5535 29.6488C28.5433 27.7668 29.7805 25.7205 31.1425 22.5355C31.1425 22.5355 32.6669 17.9623 31.6507 13.8978C30.6345 9.83326 26.2037 4.40432 20.9806 2.71957C15.7574 1.03483 11.6044 2.41226 7.26187 5.76817C5.37127 7.22922 4.28023 8.21132 3.19707 10.3411C1.74666 13.1929 1.90907 15.2827 2.18087 18.4707C2.46344 21.7848 4.72137 26.6003 4.72137 26.6003Z" 
              stroke="#525B64" 
              strokeWidth="3"/>
          </Icon>
          Whatsapp
        </Button>

        <Button type="button">
          <StyledImportedIcon icon={faInstagram} style={{color: "#525B64",}} />
          Instagram
        </Button>

        <Button type="button">
          <Icon 
            width="33" 
            height="34" 
            viewBox="0 0 33 34" 
            fill="none" 
            xmlns="http://www.w3.org/2000/Icon"
          >
            <path 
              id="Vector 1" 
              d="M14.1 21.1999V31.6999C5.4 31.6999 1.5 26.9 1.5 16.9998C1.5 5.3 7.5 2 17.4 2C26.1 2 31.5 6.2 31.5 16.9998C31.5 26.9 27.6 31.6999 18.9 31.6999V21.1999H22.5L23.1 16.9998H18.9C18.5002 12.4719 19.3784 11.2475 23.1 11.5999V8.29985C17.9542 7.5508 15.6879 8.038 14.1 12.4998V16.9998H10.2V21.1999H14.1Z" 
              stroke="#525B64" 
              strokeWidth="3"
            />
          </Icon>
          Facebook
        </Button>

        <Button type="button">
          <StyledImportedIcon icon={faXTwitter} style={{color: "#525B64",}} />
          Twitter
        </Button>
      </IconWrapper>
      
    </MediaWrapper>
  )
}
