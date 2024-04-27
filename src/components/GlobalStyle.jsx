import { createGlobalStyle } from "styled-components";
import { breakpoints } from "../utility/breakpoints";

const GlobalStyle = createGlobalStyle`
:root {
  --padding-desktop: 96px 128px;
  --padding-tablet: 64px;
  --padding-mobile: 64px 32px;

     /* custom colors*/
  --yellow-light: #faf3da;
  --yellow-medium: #e9cd69;
  --yellow: #e4c144;
  --blue-light: #f3f6f7;
  --blue: #083d56;
  --blue-deep: #063145;

  /*   custom typography   */
   --header: "Fira Sans", sans-serif;
   --paragraph: "Montserrat", sans-serif;


  --spacing-5: 40px;
  --spacing-16: 128px
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Fira Sans', 'Montserrat', sans-serif;
    box-sizing: border-box;
}

h1 {
    font-family: "Fira Sans", sans-serif;
    font-weight: 500;
    letter-spacing: 0;
    font-size: 32px;
    line-height: 40px;

    @media (min-width: ${breakpoints.tablet}) {
    font-size: 40px;
    line-height: 48px 
    }

    @media (min-width: ${breakpoints.desktop}) {
    font-size: 56px;
    line-height: 56px 
    }
}

h2 {
    font-family: "Fira Sans", sans-serif;
    font-weight: 500;
    letter-spacing: 0;
    font-size: 24px;
    line-height: 32px;
		
    @media (min-width: ${breakpoints.tablet}) {
			font-size: 28px;
    }
		
    @media (min-width: ${breakpoints.desktop}) {
			font-size: 36px;
			line-height: 40px 
    }
	}

	h3 {
    font-family: "Fira Sans", sans-serif;
    font-weight: 600;
    letter-spacing: 0;
    font-size: 20px;
    line-height: 32px;
		color: var(--blue);
		
    @media (min-width: ${breakpoints.tablet}) {
			font-size: 26px;
			line-height: 40px;
    }
		
    @media (min-width: ${breakpoints.desktop}) {
			font-size: 28px;
			line-height: 48px 
    }
	}

	h4 {
    font-family: "Fira Sans", sans-serif;
    font-weight: 400;
    letter-spacing: 0;
    font-size: 14px;
    line-height: 20px;
		
    @media (min-width: ${breakpoints.tablet}) {
			font-size: 18px;
			line-height: 24px;
			font-weight: 500;
    }
		
    @media (min-width: ${breakpoints.desktop}) {
			font-size: 24px;
			line-height: 32px 
    }
	}

	.main-paragraph {
		font-family: "Montserrat", sans-serif;
		font-size: 18px;
		line-height: 24px;
		font-style: normal;
		font-weight: 500;
		letter-spacing: -0.72px;
		margin: 0;
		color: var(--blue);

		@media (min-width: ${breakpoints.tablet}) {
			font-size: 24px;
			line-height: 32px;
			letter-spacing: -0.96px;
    }
		
    @media (min-width: ${breakpoints.desktop}) {
			font-size: 26px;
			line-height: 32px;
			letter-spacing: -1.04px;
    }
	}

	.secondary-paragraph {
		font-family: "Montserrat", sans-serif;
		font-size: 14px;
		line-height: 24px;
		font-weight: 500;
		letter-spacing: -0.56px;
		margin: 0;
		color: var(--blue-deep);

		@media (min-width: ${breakpoints.tablet}) {
			font-size: 18px;
			line-height: 40px;
			letter-spacing: -0.72px;
    }
		
    @media (min-width: ${breakpoints.desktop}) {
			font-size: 20px;
			line-height: 40px;
			letter-spacing: -0.8px;
    }
	}
`;

export default GlobalStyle;
