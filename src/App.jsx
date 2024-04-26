import { createGlobalStyle } from 'styled-components'

/* import styled from "styled-components"; */
import { Body } from './components/Body'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { StickyButton } from './components/Button'
import { StickyDesktopButton } from './components/button'

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
`
