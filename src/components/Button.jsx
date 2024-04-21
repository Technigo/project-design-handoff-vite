/* eslint-disable react/prop-types */
import styled, { css } from 'styled-components'
import { useState } from 'react'
const StyledButton = styled.button`
  border-radius: 10px;
  width: 70px;
  height: 44px;
  border: none;
  color: var(--text);
  padding: 10px;
  @media (min-width: 744px) and (max-width: 1440px) {
    width: 112px;
    height: 48px;
    padding: 10px 30px;
  }
  @media (min-width: 1440px) {
    width: 78px;
    height: 32px;
    padding: 10px 30px;
    &:hover {
      background: var(--hover-login-links);
    }
  }
  white-space: nowrap;
  background: ${(props) =>
    props.active ? props.theme.activeColor : props.theme.defaultBackground};

  ${(props) =>
    props.type === 'green' &&
    css`
      padding: 10px;
      background: ${(props) =>
        props.active ? props.theme.activeGreenColor : '#465d4c'};
      color: white;
      width: 118px;
      height: 44px;
      @media (min-width: 744px) and (max-width: 1440px) {
        width: 211px;
        height: 48px;
      }
      @media (min-width: 1440px) {
        width: 240px;
        height: 52px;
        padding: 10px 30px;
        &:hover {
          background: #2b4033;
        }
      }
    `}
  ${(props) =>
    props.type === 'white' &&
    css`
      background: white;
      border: 1px solid
        ${(props) => (props.active ? props.theme.activeBorderColor : '#465d4c')};
      color: ${(props) =>
        props.active ? props.theme.activeTextColor : '#465d4c'};
      width: 118px;
      height: 44px;
      padding: 10px;
      @media (min-width: 744px) and (max-width: 1440px) {
        width: 211px;
        height: 48px;
      }
      @media (min-width: 1440px) {
        width: 240px;
        height: 52px;
        padding: 10px 30px;
        &:hover {
          color: #2b4033;
          border: 1px solid #2b4033;
          background: white;
        }
      }
    `}
`

export const Button = ({ type }) => {
  const [active, setActive] = useState(false)

  const toggleActive = () => {
    setActive(!active) // Toggle the active state on click
  }
  let buttonText = ''
  switch (type) {
    case 'green':
      buttonText = 'Sign Up'
      break
    case 'white':
      buttonText = 'Book Meeting'
      break
    default:
      buttonText = 'Login'
  }
  return (
    <>
      <StyledButton
        type={type}
        active={active}
        onClick={toggleActive}
        theme={{
          defaultBackground: 'var(--10)',
          activeColor: 'var(--onclick-login)',
          activeGreenColor: 'var(--onclick-signup-book)',
          activeBorderColor: 'var(--onclick-signup-book)',
          activeTextColor: 'var(--onclick-signup-book)',
        }}
      >
        {buttonText}
      </StyledButton>
    </>
  )
}
