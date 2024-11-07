/* eslint-disable react/prop-types */
import styled from "styled-components";
import { H2 } from "./Typography";

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.backgrounds.secondary};
  padding-top: ${({ theme }) => theme.spacing.small};
  padding-left: ${({ theme }) => theme.spacing.xsmall};
  padding-right: ${({ theme }) => theme.spacing.xsmall};
  padding-bottom: ${({ theme }) => theme.spacing.xxsmall};
  color: ${({ theme }) => theme.text.secondary}; 
`;

export const SectionTitle = ({ title, text }) => {
    return (
        <CardContainer>
            <H2>{title}</H2>
        </CardContainer>
    );
};
