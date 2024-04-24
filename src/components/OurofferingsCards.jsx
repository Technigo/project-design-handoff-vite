import React from 'react'

export const OurofferingsCards = () => {
  return (
    <div>OurofferingsCards</div>
  )
}


const OurOfferingsSection = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    color: #0b1623;

    /* Powder/Mobile/Headings */
    font-family: Philosopher;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 39px */
  }
  p {
    color: var(--Powder-Black, #0b1623);
    /* Powder/Mobile/Body large */
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 20.8px */
  }
`;

const OurOfferingsImage = styled.div`
  background-image: url(${});
  background-repeat: no-repeat;
  background-position: left;
  display: flex;
  justify-content: left;
  height: 70px;
  width: 70px;
  padding-top: 45px;
`;

const OurOfferingsText = styled.div`
  flex-direction: column;
  width: 280px;
  h2 {
    color: #0b1623;
    font-size: 21px;
    font-family: Philosopher;
    font-weight: 700;
    line-height: 27.3px;
    word-wrap: break-word;
  }
  p {
    color: var(--Powder-Black, #0b1623);
    font-family: Mulish;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 18.2px */
  }
`;

const OurOfferingsCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;
const OurOfferingsSnowboard = styled.div`
  background-image: url(${houseMobile});
  background-repeat: no-repeat;
  background-position: left;
  display: flex;
  justify-content: left;
  height: 70px;
  width: 70px;
  padding-top: 45px;
`;






