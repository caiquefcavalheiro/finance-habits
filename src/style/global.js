import { createGlobalStyle } from 'styled-components'

import Halter from '../fonts/HALTER.ttf'

export default createGlobalStyle`

    @font-face{
        font-family: 'Halter';
        src: url(${Halter});
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 16px;
        font-family: 'Open Sans', sans-serif;
        color: var(--color-grey-text);
    }

    a{
        text-decoration: none;
    }

    :root {
        --radius: 8px;
        --color-primary-blue: #00B4D8;
        --color-dark-blue: #0090Ad;
        --color-card-blue: #E2F2F9;
        --color-light-blue: #A5D9Ec;
        --color-grey-text: #6C6C6C;
    }

    button{
        cursor: pointer;
        border: none;
    }
`