import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SupportgroupImage } from '../ui/SupportgroupImage';
import { SupportgroupTextContainer } from '../ui/SupportgroupTextContainer';
import { HeaderText } from '../ui/Typography';
import supportgroupData from '../supportgroups.json';

const SupportgroupCardStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 20rem;
height: 16.875rem;
border-radius: var(--Radius-200, 0.5rem);
box-shadow: 1px 4px 4px 0px rgba(0, 0, 0, 0.25);
overflow: hidden;
margin-bottom: 2.5rem;

&:hover {
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    border: var(--sds-size-stroke-border) solid #000;
    cursor: pointer;
  }`

const SupportgroupCardContainerStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
grid-column: span 4;
max-width: 700px;

@media (min-width: 768px){
    grid-column: span 8;
  }

@media (min-width: 1200px){
    grid-column: span 12;
  }
`

export const SupportgroupCard = () => {
  const [supportgroups, setSupportgroups] = useState([])
  useEffect(() => {
    setSupportgroups(supportgroupData)
    console.log(supportgroupData)
  }, []);

  const handleCardClick = (supportgroup) => {
    console.log(`Card clicked: ${supportgroup.title}`)
  };

  return (
    <>
      <SupportgroupCardContainerStyle>
        {supportgroups.map((supportgroup, index) => (
          < SupportgroupCardStyle
            key={index}
            onClick={() => handleCardClick(supportgroup)}
          >
            <SupportgroupImage
              supportgroupImage={supportgroup.supportgroupImage}
              alt={supportgroup.alt}
            />
            <SupportgroupTextContainer>
              <HeaderText>{supportgroup.title}</HeaderText>
            </SupportgroupTextContainer>
          </SupportgroupCardStyle>
        ))
        }
      </SupportgroupCardContainerStyle >
    </>
  )
}