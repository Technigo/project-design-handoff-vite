import { CardContainer } from "./CardContainer";
import { ImageContainer } from "./ImageContainer"
import Rectangle30 from '../assets/Rectangle30.png'
import { TextContainer } from "./TextContainer";
import { Title } from "./Title";
import { Description } from "./Description";
import { TestImageComponent } from "./TestImageComponent";
 
export const NewCard = ({ title, description, image }) => {
    return (
        <CardContainer>
          {/* <ImageContainer image={image} /> */}
          <TestImageComponent/>
          <TextContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </TextContainer>
        </CardContainer>
    )
}