import styled from 'styled-components'

export const Container = styled.button`
    width: ${props => props.biggerButton ? '224px' : '110px'};
    height: ${props => props.biggerButton ? '47px' : '34px'};
    border-radius: var(--radius);
    background-color: var(--color-primary-blue);
`