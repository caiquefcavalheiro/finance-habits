import styled from 'styled-components'

export const Container = styled.button`
    font-size: 20px;
    font-weight: 400;
    font-family: "Roboto";
    font-style: normal;
    color: ${props => props.white ? '#0090Ad' : '#FFFFFF'};
    border: 1px solid;

    width: ${props => props.biggerButton ? '300px' : '150px'};
    height: ${props => props.biggerButton ? '50px' : '50px'};

    border-radius: var(--radius); 
    background-color: ${props => props.white ? '#FFFFFF' : '#0090Ad' };

    box-shadow: 1px 3px 4px var(--cor-botao);
    box-sizing: border-box;

    :hover{
        opacity: 85%;
    } 
`