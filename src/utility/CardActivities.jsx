import styled from "styled-components"
import Button from "./Button"

export const CardActivities = ({ imageSrc, title, description, onButtonClick }) => (
	<CardWrapper>
		<CardImage src={imageSrc} alt={title} />
		<CardTitle>{title}</CardTitle>
		<CardDescription>{description}</CardDescription>
		{onButtonClick && (
			<CardButton onClick={onButtonClick}>
				Continue to Book
				<ArrowIcon />
			</CardButton>
		)}
	</CardWrapper>
)

export default CardActivities;

const CardWrapper = styled.div`
   display: flex;
   align-items: center;
`

const CardImage = styled.img`
    border-radius: 16px 0 0 56px;
`
const CardTitle = styled.h3`
    font-family: var(header);
`
const CardDescription = styled.p`
	color: var(--blue);
	font-family: var(--paragraph);
`
const CardButton = styled(Button)`
	
`

const ArrowIcon = styled.span`
	width: 27px;
	height: 24px;
	background: url('/icons/arrow1.svg');
	background-size: contain;
`

