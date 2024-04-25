import { useState } from "react"
import styled from "styled-components"
import arrowIcon from "../assets/icons/language-select-arrow.svg"

export const LanguageSelect = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const options = [
    { value: "ENG", label: "ENG" },
    { value: "FR", label: "FR" }
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <LanguageSelectContainer>
      <DropdownButton onClick={toggleDropdown}>
        <h3>{selectedOption ? selectedOption.label : "ENG"}</h3>
        <ArrowIcon src={arrowIcon} alt="Select arrow" open={isOpen} />
      </DropdownButton>
      <OptionsContainer open={isOpen}>
        {options.map((option) => (
          <Option key={option.value} onClick={() => handleOptionClick(option)}>
            {option.label}
          </Option>
        ))}
      </OptionsContainer>
    </LanguageSelectContainer>
  )
}

const LanguageSelectContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`

const DropdownButton = styled.button`
  background: none;
  font-size: 16px;
  border: none;
  width: 74px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  @media (min-width: 744px) and (max-width: 1493px) {
    font-size: 18px;
    width: 90px;
    gap: 16px;
  }

  @media (min-width: 1494px) {
    font-size: 18px;
    width: 90px;
    gap: 16px;
  }
`

const ArrowIcon = styled.img`
  transition: transform ease-in-out 0.3s;
  width: 9.218px;
  height: 16px;

  transform: ${({ open }) => (open ? "rotate(90deg)" : "rotate(0deg)")};

  @media (min-width: 744px) and (max-width: 1493px) {
    width: 13.826px;
    height: 24px;
  }

  @media (min-width: 1494px) {
    width: 13.826px;
    height: 24px;
  }
`

const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 74px;
  border: none;
  display: ${({ open }) => (open ? "inline" : "none")};

  @media (min-width: 744px) {
    width: 90px;
  }
`

const Option = styled.div`
  position: relative;
  cursor: pointer;
  background-color: white;
  font-family: "Montserrat", sans-serif;
  padding: 8px;

  &:hover {
    background-color: #f9f9f9;
  }
`