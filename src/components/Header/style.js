import styled from 'styled-components'
import { Menu } from '@mui/material'

export const ContainerMenu = styled(Menu)`

    .MuiMenuItem-root{
        justify-content: center;
    }
    .MuiPaper-root{
        background-color: #0090AD;
    }

    hr{
        margin:0 10px;
    }

    @media screen and (min-width:1000px) {
        display: none;
    }
`

export const Container = styled.div`
    color: #FFFFFF;
    display:flex;
    align-items: center;
    justify-content: space-between;
    background-color: #00B4D8;
    padding: 10px 0;
    border-radius: var(--radius);

    h1{
        font-family: 'Gugi', cursive;
        color: var(--color-font);
        margin: 0 20px;
    }

    @media screen and (min-width:1000px) {
        margin: 17px 120px;
    }
`

export const Icon = styled.button`
    color: #FFFFFF;
    padding: 5px;
    background-color: #00B4D8;
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