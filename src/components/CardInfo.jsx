import React from 'react';
import styled from 'styled-components';
import { Card } from './Cards';
import Icon from './Icon';

const CardGrid = styled.div`
  display: grid;
  gap: 32px; /* Space between cards */

  /* Mobile (320px to 767px) */
  @media (min-width: 320px) and (max-width: 767px) {
    grid-template-columns: 1fr; /* Single column */
    padding: 0 16px; /* Equal padding on left and right for mobile */
  }

  /* Tablet (768px to 1024px) */
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns on tablet */
    padding: 0 19px; /* Balanced left and right padding */
  }

  /* Desktop (1025px to 1600px) */
  @media (min-width: 1025px) and (max-width: 1600px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns on desktop */
    padding: 0 64px; /* Larger padding for desktop */
  }

  /* Large Desktop (above 1600px) */
  @media (min-width: 1600px) {
    grid-template-columns: repeat(4, 1fr); /* Four columns on very large screens */
    padding: 0 100px; /* More padding on very large screens */
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
