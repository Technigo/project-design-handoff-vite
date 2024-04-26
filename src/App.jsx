import { createGlobalStyle } from 'styled-components'

/* import styled from "styled-components"; */
import { Body } from './components/Body'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { StickyButton } from './components/Button'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Body />
      <Footer />
      <StickyButton />
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

h1, h2, h3, h4, p, button {
  letter-spacing: 0.11em;
}
::-webkit-scrollbar {
  display: none;
}
`
