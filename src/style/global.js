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
        font-size: 16px;
        font-family: 'Halter';
        color: black;
    }

    :root {
        --cor-nubanck: linear-gradient(145deg, rgba(131,11,209,1) 0%, rgba(70,9,110,1) 89%);
        --cor-inter: linear-gradient(145deg, rgba(244,123,49,1) 0%, rgba(221,91,12,1) 89%);
        --cor-santander: linear-gradient(145deg, rgba(237,39,15,1) 0%, rgba(180,31,13,1) 89%);
        --cor-font: #f4f4f4;
    }
`