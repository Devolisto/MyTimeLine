import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        color : ${(props) => props.theme.fontColorMain};
        background-color : ${(props) => props.theme.backgroundMain}
    }
`;

export const Title = styled.h1`
    text-align: center;
    color: #304C89;
    text-transform: capitalize;
`;
