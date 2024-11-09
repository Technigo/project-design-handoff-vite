import React from 'react';
import styled from 'styled-components';
import { Card } from './Cards';
import Icon from './Icon';

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  padding: 0 16px; /* Mobile padding */

  /* Tablet (min-width: 768px) */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 23px;
    padding: 0 19px;
  }

  /* Desktop (min-width: 1025px) */
  @media (min-width: 1025px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    padding: 0 64px; /* Balance padding left and right */
  }

  /* Large Desktop (min-width: 1440px) */
  @media (min-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    padding: 0 64px; /* Keep it consistent with desktop */
  }

  /* Extra Large Screens (max-width: 1600px) */
  @media (min-width: 1600px) {
    padding: 0 100px; /* Increase padding for larger screens */
  }
`;

export const CardInfo = () => {
  const cardData = [
    {
      iconName: "JulklapparIcon", 
      title: "Julklappar",
      description: "Din hjälp ser till att fler barn får uppleva glädjen i att få en julklapp att öppna och känna hopp på julafton. Tillsammans kan vi sprida värme och omtanke.",
      buttonText: "Swisha 100 kr"
    },
    {
      iconName: "VinterkladerIcon", 
      title: "Vinterkläder",
      description: "Barn växer snabbt och sliter ut vinterkläder – ge ett barn en varm vinter genom att skänka en gåva för nya varma kläder som skyddar mot kylan.",
      buttonText: "Swisha 200 kr"
    },
    {
      iconName: "JulmatskasseIcon", 
      title: "Julmatskasse",
      description: "Stötta barnfamiljer att kunna fira en jul med mat på bordet. Ge familjer i behov en chans till en minnesvärd julmiddag. Tillsammans gör vi julen ljusare för alla!",
      buttonText: "Swisha 300 kr"
    },
    {
      iconName: "ValfrittBeloppIcon", 
      title: "Valfritt belopp",
      description: "Varje gåva spelar roll - stora som små donationer hjälper barnfamiljer att klara vintern och fira en varm jul. Swisha ett valfritt belopp och gör skillnad för de som behöver det mest.",
      buttonText: "Swishat valt belopp"
    },
  ];

  return (
    <CardGrid>
      {cardData.map((data, index) => (
        <Card
          key={index}
          icon={<Icon name={data.iconName} width={91} height={106} />}
          title={data.title}
          description={data.description}
          buttonText={data.buttonText}
        />
      ))}
    </CardGrid>
  );
};
