import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import { Home } from './components/Home'

export const App = () => {
  return (
    <>
      <GeneralStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

const GeneralStyle = createGlobalStyle`
:root {
  --text-card-bg: #fff;
  --60: #fffff3;
  --60-dark: #d4ba9f;
  --text: #152019;
  --30: #465d4c;
  --hover-signup-book: #2b4033;
  --onclick-signup-book: #819588;
  --10: #d86e15;
  --hover-login-links: #ef9d53;
  --onclick-login: #f4b781;
  --media-md: 744px;
  --media-lg: 1440px;
}

body {
  margin: 0; /* Moved from :root */
  font-family: Optima; /* Moved from :root */
  background-color: var(--60);
}

@font-face {
  font-family: Montserrat;
  src: url(./assets/Montserrat-VariableFont_wght.ttf);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
#root,
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  gap: 56px;
  width: 100%;
}

h1 {
  color: var(--text, #152019);
  font-family: Optima;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 125% */
  letter-spacing: -0.32px;
}

h2 {
  color: var(--text, #152019);
  font-family: Optima;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 114.286% */
}

h3 {
  color: var(--text, #152019);
  font-family: Optima;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 116.667% */
}

p,
button {
  color: var(--text, #152019);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

@media (min-width: 1440px) {
  main {
    gap: 80px;
  }

  h1 {
    font-size: 36px;
    line-height: 44px; /* 122.222% */
    letter-spacing: -0.36px;
  }

  h2 {
    font-size: 32px;
    line-height: 40px; /* 125% */
  }

  p {
    font-size: 20px;
    line-height: 28px; /* 140% */
  }

  button {
    font-size: 25px;
    line-height: 32px; /* 128% */
  }
}

@media (min-width: 744px) and (max-width: 1440px) {
  main {
    gap: 80px;
  }

  button {
    font-size: 18px;
    line-height: 28px; /* 155.556% */
  }
}
`
