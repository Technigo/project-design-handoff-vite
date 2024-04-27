import styled from "styled-components";

// Styled component for the card content
const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 48px;
  padding: 16px 32px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  width: 572px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  font-family: Avenir, sans-serif;
`;

// Styled component for the class image
const StyledClassImage = styled.img`
  width: 206px;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  opacity: 0.96;
`;

// Styled container for text and button
const StyledTextButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: flex-start; 
  width: 248px;
  font-family: Avenir, sans-serif;
  gap: 16px;
  font-size: 16px;
`;

// Styled component for the class description
const StyledClassDescription = styled.div`
  color: #000;
  font-weight: 500;
  margin: 0;
`;

// Styled component for the button
const StyledButton = styled.button`
  background: #b3583b;
  border: none;
  padding: 8px 48px;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  gap: 10px;
  &:hover {
    background-color: #552a1c;
  }
`;

// Styled component for the button, centered
const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center; // Centers the button within its wrapper
  width: 100%; // Ensures the wrapper takes full width for centering
`;


const StyledClassName = styled.p`
  color: #000;
  padding-top: 16px;
  margin: 0;
`;

//Hard code the class card
export const ClassCard = () => {
  return (
    <>
      {/* First Card */}
      <StyledCard>
        <StyledClassImage src="/class01.png" alt="The Reformer" />
        <StyledTextButton>
          <StyledClassName>
            <strong>The Reformer</strong> - challenges core strength, stability,
            and balance.
          </StyledClassName>
          <StyledClassDescription>
            <p>We also offer 1-1 classes.</p> <br />
            <p>Suitable for all levels of fitness.</p>
          </StyledClassDescription>
          <StyledButtonWrapper>
            <StyledButton>Book Now</StyledButton>
          </StyledButtonWrapper>
        </StyledTextButton>
      </StyledCard>

      {/* Second Card */}
      <StyledCard>
        <StyledClassImage src="/class02.png" alt="Get on the Mat" />
        <StyledTextButton>
          <StyledClassName>
            <strong>Get on the Mat</strong> - Learn the fundamentals at your own
            pace.
          </StyledClassName>
          <StyledClassDescription>
            A great place to start your pilates journey.
          </StyledClassDescription>
          <StyledButtonWrapper>
            <StyledButton>Book Now</StyledButton>
          </StyledButtonWrapper>
        </StyledTextButton>
      </StyledCard>

      {/* Third Card */}
      <StyledCard>
        <StyledClassImage src="/class03.png" alt="Pre and Postnatal" />
        <StyledTextButton>
          <StyledClassName>
            <strong>Pre and Postnatal</strong>
          </StyledClassName>
          <StyledClassDescription>
            Gentle exercises to maintain strength, flexibility, and promote
            relaxation.
          </StyledClassDescription>
          <StyledButtonWrapper>
            <StyledButton>Book Now</StyledButton>
          </StyledButtonWrapper>
        </StyledTextButton>
      </StyledCard>

      {/* Fourth Card */}
      <StyledCard>
        <StyledClassImage src="/class04.png" alt="On Demand" />
        <StyledTextButton>
          <StyledClassName>
            <strong>On Demand</strong> - workout wherever, whenever, you decide.
          </StyledClassName>
          <StyledClassDescription>
            Live classes online and over 100 pre-recorded sessions.
          </StyledClassDescription>
          <StyledButtonWrapper>
            <StyledButton>Book Now</StyledButton>
          </StyledButtonWrapper>
        </StyledTextButton>
      </StyledCard>
    </>
  );
};

// // export const ClassCard = ({ classData }) => {
// //   return (
// //     <StyledClassCard>
// //       <StyledClassImage src={classData.imageId} alt={classData.className} />

// //       <StyledTextButton>
// //         <StyledClassDescription>
// //           <StyledClassName>{classData.className}</StyledClassName>

// //           {classData.description}
// //         </StyledClassDescription>

// //         {classData.buttonText && (
// //           <StyledButton onClick={() => console.log("Button clicked!")}>
// //             {classData.buttonText}
// //           </StyledButton>
// //         )}
// //       </StyledTextButton>
// //     </StyledClassCard>
// //   );
// // };

// import styled from "styled-components";

// // Styled component for the card content
// const StyledCard = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   gap: 48px;
//   padding: 16px;
//   background: #ffffff;
//   border-radius: 12px;
//   box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
//   width: 572px;
// `;

// // Styled component for the class image
// const StyledClassImage = styled.img`
//   width: 206px;
//   height: 200px;
//   object-fit: cover;
//   border-radius: 12px;
// `;

// // Styled container for text and button
// const StyledTextButton = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   /* align-items: flex-start;  */
//   gap: 32px;
//   width: 248px;
// `;

// // Styled component for the class description
// const StyledClassDescription = styled.div`
//   color: #666;
//   font-family: Avenir, sans-serif;
//   font-size: 18px;
//   line-height: 1.5;
//   margin: 0;
// `;

// // Styled component for the class name
// const StyledClassName = styled.h3`
//   font-size: 20px;
//   color: #333;
//   margin: 0;
// `;

// // Styled component for the button
// const StyledButton = styled.button`
//   background: #b3583b;
//   border: none;
//   padding: 8px 48px;
//   border-radius: 12px;
//   color: white;
//   cursor: pointer;
//   font-size: 18px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #552a1c;
//   }
// `;

// export const ClassCard = ({ image, name, description, buttonLabel }) => {
//   return (
//       <StyledCard>
//         <StyledClassImage src={image} alt={name} />
//         <StyledTextButton>
//           <StyledClassName>{name}</StyledClassName>
//           <StyledClassDescription>{description}</StyledClassDescription>
//           <StyledButton>{buttonLabel}</StyledButton>
//         </StyledTextButton>
//       </StyledCard>

//   );
// };
