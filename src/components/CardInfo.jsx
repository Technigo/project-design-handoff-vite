import React from 'react';
import Card from './Cards';

const WinterClothesIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    
    <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
  </svg>
);

const CardInfo = () => {
  const cardData = [
    {
      icon: <WinterClothesIcon />, 
      title: "Julklappar",
      description: "Din hjälp ser till att fler barn får uppleva glädjen i att få en julklapp att öppna och känna hopp på julafton. Tillsammans kan vi sprida värme och omtanke.",
      buttonText: "Swisha 100 kr"
      },  
    {
      icon: <WinterClothesIcon />,
      title: "Vinterkläder",
      description: "Barn växer snabbt och sliter ut vinterkläder – ge ett barn en varm vinter genom att skänka en gåva för nya varma kläder som skyddar mot kylan.",
      buttonText: "Swisha 200 kr"
      },
    {
      icon: <WinterClothesIcon />, 
      title: "Julmatskasse",
      description: "Sötta barnfamiljer att kunna fira en jul med mat på bordet. Ge familjer i behov en chans till en minnesvärd julmiddag. Tillsammans gör vi julen ljusare för alla!",
      buttonText: "Swisha 300 kr"
      },
    {
        icon: <WinterClothesIcon />, 
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
          icon={data.icon}
          title={data.title}
          description={data.description}
          buttonText={data.buttonText}
        />
      ))}
    </div>
  );
};

export default CardInfo;
