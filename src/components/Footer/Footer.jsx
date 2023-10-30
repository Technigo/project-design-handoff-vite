import { Logo } from "../Logo";
import styled from "styled-components";

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: #fff;
`

export const Footer = () => {
    return (
        <FooterContainer>
            <Logo text={"Align Yoga Studio"} />
        </FooterContainer>
    )
}
