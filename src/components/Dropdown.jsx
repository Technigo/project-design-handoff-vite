import { useState } from "react";
import styled from "styled-components";
import menuIcon from "../assets/heroSectionImages/menu.png";
import vector from "../assets/heroSectionImages/vector.png";
export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "Camps", label: "Camps" },
    { value: "Accommodation", label: "Accommodation" },
    { value: "About Us", label: "About Us" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SelectContainer>
      <DropdownButton onClick={toggleDropdown}>
        <DropdownMenu src={menuIcon} alt="Navigation bar menu" open={isOpen} />
      </DropdownButton>

      <OptionsContainer open={isOpen}>
        <VectorBtn onClick={toggleDropdown}>
          <VectorImg src={vector} />
        </VectorBtn>
        {options.map((option) => (
          <Option key={option.value}>{option.label}</Option>
        ))}
      </OptionsContainer>
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const DropdownButton = styled.button`
  background: none;
  font-size: 16px;
  border: none;
  width: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DropdownMenu = styled.img`
  padding-top: 24px;
`;

const OptionsContainer = styled.div`
  position: absolute;
  background: linear-gradient(180deg, #99c4eb 0%, #c3ddf3 100%);
  top: 100%;
  width: 150px;
  padding-bottom: 20px;
  border: none;
  display: ${({ open }) => (open ? "" : "none")};
`;

const VectorBtn = styled.button`
  background: none;
  border: none;
`;

const VectorImg = styled.img`
  display: flex;
  background: none;
  border: none;
  flex-direction: flex-end;
  width: 12px;
  height: 12px;
  padding-left: 125px;
  padding-top: 6px;
`;

const Option = styled.div`
  position: relative;
  right: 0;
  cursor: pointer;
  color: (--Powder-Black, #0b1623);
  text-align: left;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  padding: 12px;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;
