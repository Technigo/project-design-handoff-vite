import React from 'react';
import { Card } from './Cards';
import Icon from './Icon';

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
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {cardData.map((data, index) => (
        <Card
          key={index}
          icon={<Icon name={data.iconName} width={91} height={106} />}
          title={data.title}
          description={data.description}
          buttonText={data.buttonText}
        />
      ))}
    </div>
  );
};

