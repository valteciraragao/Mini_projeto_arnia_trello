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

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5rem;
`