// import Slider from "react-slick"
// import {useState} from "react"

// export const ClassCard = () => {
//     const [isClick, setClicked] = useState ('white')

//   const clickCard = () => {
//     setClicked (isClick === 'white' ? 'pink' : 'white')
//   }
//     const classData = [

//         {
//             image:'/classImg/ZumbaEnergetic.jpeg',
//             name:'Zumba Energetic',
//             info: 'A class for you that want a fast paced and high cardio workout!',
//         },
//         {
//             image:'/classImg/ZumbaHeavy.jpeg',
//             name:'Zumba Heavy',
//             info: 'This class will challenge you a bit further - dance with weights!'
//         },
//         {
//             image:'./classImg/JustZumba.jpeg',
//             name: 'Just Zumba',
//             info: 'The classic Zumba concept! follow along with dance steps!'
//         }
//     ]

//     return (
//       <div className="flex flex-col items-center justify-center sm:pt-[40px] md:gap-y-1 md:pt-[80px] lg:gap-y-5 lg:px-[60px] lg:pt-[144px]">
//         <h4 className="ubuntu text-white  sm:text-xl lg:text-3xl">
//           Some of our classes!
//         </h4>
//         <div className="flex sm:gap-1 md:gap-[30px] lg:gap-[27px]">
//             {classData.map((classItem) => (
//                 <div key={classItem.name} className={`flex flex-col rounded-[10px] bg-purple shadow-base shadow-yellow hover:cursor-pointer hover:bg-yellow hover:text-black sm:h-[369px] sm:w-[257px] sm:gap-y-1 sm:px-[15px] sm:pb-[24px] sm:pt-1 md:h-[382px] md:w-[334px] md:px-[32px] md:pb-[32px] md:pt-[24px] lg:h-[552px] lg:w-[422px] lg:gap-y-[25px] lg:px-[40px] lg:pb-[45px] lg:pt-[40px] text-${isClick }`} onClick={clickCard}>
//                     <img src={classItem.image} alt={classItem.name} className="rounded-[10px] sm:h-[132px] sm:w-[226px] md:h-[196px] md:w-[270px] lg:h-[289px] lg:w-[342px]"/>
//                     <div className="flex flex-col sm:gap-y-[8px] sm:px-[15px] md:gap-y-1 lg:gap-y-2">
//                     <h5 className="ubuntu sm:text-lg lg:text-xl">{classItem.name}</h5>
//                     <p className="ubuntu sm:text-5xl md:text-base lg:text-5xl">{classItem.info}</p>
//                     </div>
//                 </div>
//             ))}
        
//         </div>
//       </div>
//     );

    

// }