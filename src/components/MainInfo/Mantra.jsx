import styled from "styled-components";

const MantraContainer = styled.div`
  max-width: 500px;
  padding: 10px 20px;
  border-top: 3px solid #f26631;
  border-bottom: 3px solid #f26631;
  background-color: #f1f1f1;
  font-weight: 600;
  font-size: 18px;
  text-align: center;

  span {
    color: #c00202;
  }
`;

export const Mantra = () => {
  return (
    <MantraContainer>
      Transforms you <span>physically</span> and <span>mentally</span>. Low
      impact, <span>high intensity</span> workout that strengthen & tone your
      body.
    </MantraContainer>
  );
};
