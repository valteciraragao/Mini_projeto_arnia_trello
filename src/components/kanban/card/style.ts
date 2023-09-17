import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 16rem;
    height: 14.4rem;
    border-radius: 1.6rem;
    background: #F8F8F8;
    padding: 1rem;
    box-shadow: 0.125rem 0.25rem 0.1875rem 0rem #00000047;
`
export const Input = styled.input`
    width: 14.3rem;
    height: 2.2rem;
    margin-top: 0.82rem;
    border-radius: 1.6rem;
    border: 0.0625rem solid #575757;
    #inpContent::placeholder{
        font-weight: 700;
        font-size: 1.25rem;
        font-family: Poppins;
        color: #575757;
        padding: 1rem;
    }
`


export const Area = styled.textarea`
    width: 14.3rem;
    height: 7.58rem;
    margin-top: 1rem;
    border-radius: 1.6rem;
    border: 0.0625rem solid #575757;
    #content::placeholder{
        font-weight: 700;
        font-size: 1.25rem;
        font-family: Poppins;
        color: #575757;
        padding: 1rem;
    }
`
export const Img = styled.img`
    width: 1.19rem;
    height: 1.19rem;
    margin: 0.5rem;
`
export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`