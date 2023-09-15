import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,*::after, &::before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Poppins;
    }
`
export default GlobalStyle

export const Container = styled.div`
    background: #3A72F8;
    max-width: 35.4rem;
    height: 60rem;
    border-radius: 1.25rem;
    margin: 2rem auto;
`