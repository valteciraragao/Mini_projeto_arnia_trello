import styled from 'styled-components'

export const HearderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #3A72F8;
    color: #FFFFFF;
    height: 4.75rem;
    padding: 1.8125rem;
        h2{
            font-size: 2rem;
            font-weight: 700;
        }
        p{
            font-size: 1.5rem;
            font-weight: 400;
        }
        a{
            font-size: 1.25rem;
            font-weight: 400;
            color: #FFFFFF;
        }
        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
        }
`