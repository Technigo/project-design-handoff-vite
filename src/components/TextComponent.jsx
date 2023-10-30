import styled from "styled-components";
import { Button } from "./Button";

const TextSection = styled.section`
    background: var(--brown);
        article {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 31px;
            padding: 31px 37px;
            text-align: center;
                .subheader-text {
                color: var(--primary-white);
                font-weight: 300;
                font-size: var(--subheader-font-size);
            }
        }
        
`

export const TextComponent = ({ text }) => {
    return (
        <TextSection>
            <article>
                <p className="subheader-text">{text}</p>
                <Button className={"grey"} text={"Learn more"} />
            </article>
        </TextSection>
    )
}
