// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {useState} from "react"

// export const InstructorCard = () => {
//     const [isClick, setClicked] = useState ('white')
//     const [clickId, setClickedId] = useState (null)

//   const clickCard = () => {
//     setClicked (isClick === 'white' ? 'pink' : 'white')
//     setClickedId(clickId)
//   }

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   }


//     const insData = [
//         {
//             id: "1",
//             image: "/instructorImg/Susie.jpeg",
//             name: "Susie",
//             info: "Always cheerful and energetic - Susie will make sure you'll have a great time!"
//         },
//         {
//             id: "2",
//             image: "/instructorImg/Olivia.jpeg",
//             name: "Olivia",
//             info: "Always on the look out for the latest Zumba trends, Olivia can guarantee you new steps every month!"
//         },
//         {
//             id: "3",
//             image: "/instructorImg/Micheal.jpeg",
//             name: "Micheal",
//             info: "Having a big passion for dance, Michael will make sure you'll also love dance as much as he does!"
//         }
//     ]

//     return (
//         <div className="flex flex-col items-center justify-center sm:gap-y-1 sm:pt-3 md:gap-y-1 md:pt-[80px] lg:gap-y-5 lg:pt-[144px]">
//             <h4 className="ubuntu text-white sm:text-xl lg:text-3xl">
//         Meet three of our instructors!
//       </h4>
//       <div className={`flex sm:gap-1 md:gap-1 `} >
//         <Slider {...settings}>
//             {insData.map((insItem)=>(
//             <div key={insItem.id} className={`shadow-opacity-75 flex flex-col rounded-[10px] bg-purple shadow-xl shadow-pink hover:cursor-pointer hover:bg-pink hover:text-black 
//             sm:h-[338px] sm:w-[202px] sm:gap-y-1 sm:px-[20px] sm:pb-[25px] sm:pt-[15px]
//             md:h-[361px] md:w-[245px] md:gap-y-[20px] md:px-[25px] md:pb-[35px] md:pt-[15px]
//             lg:h-[434px] lg:w-[395px]  lg:gap-y-[25px] 
//             lg:px-[40px] lg:pb-[35px] lg:pt-[25px] text-${isClick}`} onClick={() => clickCard(insItem.id)}>
//                 <img src={insItem.image} alt={insItem.name} className="sm:w-[162px] sm:h-[85px] rounded-[10px] object-cover object-center md:w-[195px] md:h-[104px] lg:w-[315px] lg:h-[150px]" />
//                 <div className="flex flex-col sm:gap-y-[8px] md:gap-y-[15px] lg:gap-y-[20px]">
//                     <h5 className="ubuntu sm:text-lg md:text-xl ">{insItem.name}</h5>
//                     <p className="ubuntu sm:text-base lg:text-5xl">{insItem.info}</p>
//                 </div>
//             </div>
//         ))}
//         </Slider>
        
//       </div>
//         </div>
//     )
// }