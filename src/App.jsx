import { createGlobalStyle } from 'styled-components'

/* import styled from "styled-components"; */
import { Body } from './components/Body'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { StickyButton } from './components/Button'
import { StickyDesktopButton } from './components/Button'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Body />
      <Footer />
      <StickyButton />
      <StickyDesktopButton />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
}


body {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  transition: all 0.4s;
  }

h1, h2, h3, h4, p, button, li {
  letter-spacing: 0.11em;
}
::-webkit-scrollbar {
  display: none;
}

li{
  padding-left: 0;
  list-style-type: none; 
}
li:hover{
  background-color: rgba(153, 149, 149, 0.25);
  border-radius: 100px;
  cursor: pointer;
}

`
