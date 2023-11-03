import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import squatImage from '../../assets/Squat.jpg';
import meditateImage from '../../assets/Meditate.jpg';
import treatsImage from '../../assets/Treats.jpg';
import catLeftIcon from '../../assets/CatLeft.svg';
import catRightIcon from '../../assets/CatRight.svg';
import styled from 'styled-components';
import Button from '../Button.jsx';
import leftPaw from '../../assets/LeftPaw.png';
import rightPaw from '../../assets/RightPaw.png';
import { useTranslation } from 'react-i18next';

const FeaturesContainer = styled(animated.div)`
    display: flex;
    width: 360px 
    overflow: hidden;
    will-change: transform;
`;

const Feature = styled.div`
    position: left;
    width: 100%;
    height: auto;
    background-size: cover;
    transition: background-image 0.3s ease-in-out;
`;

const FeatureImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

const IconsContainer = styled.div`
    width: 329px; // The actual content width without padding
    display: flex;
    justify-content: space-between;
    padding: 0px 16px; // Adding the padding for the icons
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
`;

const FeatureContent = styled.div`
    background-color: #2A3439;
    color: #D2FDFF;
    width: 297px; // 329px
    height: 232px;         
    padding: 16px;        
    border-radius: 8px;   
    display: flex;       
    flex-direction: column;
    justify-content: space-between; 
    background-size: cover;
`;

const FeatureTitle = styled.h2`
font-size: 32px;
margin-bottom: 0.5rem;
font: 'Montserrat Subrayada';
`;

const FeatureText = styled.p`
font-size: 16px;
margin-bottom: 1rem;
font: 'Electrolize';
text-align: left;
`;

const gradients = [
    "linear-gradient(#2C2C2C, #FFFFFF)", // for Lappability
    "linear-gradient(#C09C83, #FFFFFF)", // for Relaxation
    "linear-gradient(#968772, #FFFFFF)"  // for Treats
];
const Dot = styled.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#D2FDFF' : '#757575'};
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s;
`;

const Features = () => {
    const [activeFeature, setActiveFeature] = useState(1);
    const { t } = useTranslation();

    const transitionStyles = useSpring({
        transform: `translateX(-${activeFeature * 360}px)`,
    });

    const featuresData = [
        {
            image: squatImage,
            alt: t('features.lappability.alt'),
            title: t('features.lappability.title'),
            text: t('features.lappability.text')
        },
        {
            image: meditateImage,
            alt: t('features.relaxation.alt'),
            title: t('features.relaxation.title'),
            text: t('features.relaxation.text')
        },
        {
            image: treatsImage,
            alt: t('features.treats.alt'),
            title: t('features.treats.title'),
            text: t('features.treats.text')
        }
    ];

    return (
        <div>
            <FeaturesContainer style={transitionStyles}>
                {featuresData.map((feature, index) => (
                    <Feature key={index} style={{ backgroundImage: gradients[index] }}>
                        <FeatureImage src={feature.image} alt={feature.alt} />
                        <IconsContainer>
                            <Icon src={leftPaw} alt={t('features.icons.leftPaw.alt')} onClick={() => {
                                if (activeFeature > 0) setActiveFeature(activeFeature - 1);
                            }} />
                            <Icon src={catLeftIcon} alt={t('features.icons.leftCat.alt')} />
                            <div style={{textAlign: 'center', marginTop: '10px'}}>
                                {featuresData.map((_, index) => (
                                    <Dot key={index} $active={index === activeFeature} onClick={() => setActiveFeature(index)} />
                                ))}
                            </div>
                            <Icon src={catRightIcon} alt={t('features.icons.rightCat.alt')} />
                            <Icon src={rightPaw} alt={t('features.icons.rightPaw.alt')} onClick={() => {
                                if (activeFeature < featuresData.length - 1) setActiveFeature(activeFeature + 1);
                            }} />
                        </IconsContainer>
                        <FeatureContent>
                            <FeatureTitle>{feature.title}</FeatureTitle>
                            <FeatureText>{feature.text}</FeatureText>
                            <Button>MORE</Button>
                        </FeatureContent>
                    </Feature>
                ))}
            </FeaturesContainer>
        </div>
    );
}

export default Features;






