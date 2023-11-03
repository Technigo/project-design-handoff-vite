import CardOne from "../../assets/images/card1.png";
import { useTranslation } from "react-i18next";

export const MemberSwiperCard = ({ cardOne }) => {
  const { t } = useTranslation();

  return (
    <div className="card">
      <div className="cardOne">
        {cardOne}
        <img src={CardOne} alt="card one" />
        <div className="text-box">
          <h4>{t("MemberSwiperCard.cardText")}</h4>
          <p>{t("MemberSwiperCard.cardAuthor")}</p>
        </div>
      </div>
    </div>
  );
};

// export const MemberSwiperCard = ({ cardOne }) => {
//   return (
//     <div className="card">
//       <div className="cardOne">
//         {cardOne}
//         <img src={CardOne} alt="card one" />
//         <div className="text-box">
//           <h4>
//             FamiliyFitness has been a game changer in our family. Finally we
//             have time to exercise again!
//           </h4>
//           <p>Helena and Marcus Brodtkorp, Members for 2 years</p>
//         </div>
//       </div>
//     </div>
//   );
// };
