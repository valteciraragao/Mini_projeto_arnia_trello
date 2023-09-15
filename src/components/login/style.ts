import styled from 'styled-components'

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const H1 = styled.div`
    margin-top: 5rem;
    h1{
        text-align: center;
        font-weight: 700;
        color: #FFFFFF;
        font-size: 3rem;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    label{
        font-weight: 400;
        font-size: 1.5rem;
        color: #FFFFFF;
    }
    input{
        width: 27.4rem;
        height: 3.7rem;
        border-radius: 1.6rem;
    }
`

export const Button = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    button{
        width: 13.1rem;
        height: 3.7rem;
        border-radius: 1.6rem;
        background-color: #0A2668;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 1.5rem;
    }
    a{
        margin-top: 1rem;
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
        color: #FFFFFF;
    }
`