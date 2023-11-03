// import "./trainers.css"
// import { useTranslation } from "react-i18next"

// export const Trainers = () => {
//     const { t } = useTranslation()

//   return (
//     <section className="trainers-section">


//         <div className="trainers-headline">
//             <h1>{t("Trainers.h1")}</h1>
//             <p>{t("Trainers.p1")}</p>
//         </div>

//         <div className="tranier-card-wrapper">

//             <div className="trainer-card">
//                 <img className="trainer-card-img" src="/Images/trainer-dragana.png" alt="image of dragana" />
//                  <div className="trainer-card-text">
//                     <h1>Dragana</h1>
//                     <p></p>
//                 </div> 
//             </div>

//             <div className="trainer-card">
//                 <img src="/Images/trainer-apinya.png" alt="image of apinya" />
//                  <div className="trainer-card-text">
//                     <h1>Apinya</h1>
//                     <p>{t("Trainers.p3")}</p>
//                 </div>
//             </div>

//             <div className="trainer-card">
//                 <img src="/Images/trainer-hamza.png" alt="image of hamza" />
//                 <div className="trainer-card-text">
//                     <h1>Hamza</h1>
//                     <p>{t("Trainers.p4")}</p>
//                 </div>
//             </div>
//         </div>

//     </section>
//   )
// }
import "./trainers.css";
import { useTranslation } from "react-i18next";

export const Trainers = () => {
  const { t } = useTranslation();

  return (
    <section className="trainers-section">
      <div className="trainers-wrapper">
        <div className="trainer-card">
          <div className="trainer-card-content">
            <img src="/Images/trainer-dragana.png" alt="image of dragana" />
            <div className="trainer-card-text">
              <h1>Dragana</h1>
              <p>{t("Trainers.p2")}</p>
            </div>
          </div>
        </div>

        <div className="trainer-card">
          <div className="trainer-card-content">
            <img src="/Images/trainer-apinya.png" alt="image of apinya" />
            <div className="trainer-card-text">
              <h1>Apinya</h1>
              <p>{t("Trainers.p3")}</p>
            </div>
          </div>
        </div>

        <div className="trainer-card">
          <div className="trainer-card-content">
            <img src="/Images/trainer-hamza.png" alt="image of hamza" />
            <div className="trainer-card-text">
              <h1>Hamza</h1>
              <p>{t("Trainers.p4")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


