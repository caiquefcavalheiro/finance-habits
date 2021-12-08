import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000000;
    padding: 10px 0;
    border-radius: var(--radius);

    h1{
        color: var(--color-font);
    }

    img{
        margin: 0 20px;
        width: 50px;
        background: var(--color-font);
        border-radius: 50%;

    }

    @media screen and (min-width:1000px) {
        margin: 17px 120px;
    }
`

export const Icon = styled.button`
    color: white;
    background: #000000;
    padding: 5px;
    margin: 0 20px;

    svg{
        font-size: 25px;
    }
`
export const ContainerButtons = styled.div`
    display: none;
    @media screen and (min-width: 1000px) {
        display: block;
    }

    button{
        font-size: 14px;
        margin: 0 10px;
    }
`
export const ContainerIcon = styled.div`
    display:none;
    
    @media screen and (max-width: 1000px) {
        display: block;
    }
`