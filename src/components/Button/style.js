import styled from 'styled-components'

export const Container = styled.button`
    font-size: 18px;
    font-weight: normal;
    font-family: "Roboto";
    font-style: normal;
    width: ${props => props.biggerButton ? '224px' : '110px'};
    height: ${props => props.biggerButton ? '47px' : '34px'};
    border-radius: var(--radius);
    background-color: var(--cor-fundo-botao);
    color: var(--cor-botao);
    box-shadow: 1px 3px 4px var(--cor-botao);
    box-sizing: border-box;

    :hover{
        opacity: 85%;
    }
`