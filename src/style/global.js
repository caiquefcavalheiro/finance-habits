import { createGlobalStyle } from "styled-components";

import Halter from "../fonts/HALTER.ttf";

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

    #root {
      .MuiFormControl-root{
        background-color: transparent;
      }

      .MuiOutlinedInput-root{
        background-color: #FFFFFF;
      }
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
        --color-white: #FFFFFF;
        --color-gradient-blue: linear-gradient(89.51deg, #0090AD 0.32%, #00D1FB 107.08%);
    }

    button{
        cursor: pointer;
        border: none;
    }

}
::-webkit-scrollbar {
  width: 11px;
}
body {
  scrollbar-width: thin;
  scrollbar-color: #0090Ad #F6F6F6;
}
::-webkit-scrollbar-track {
  background: #F6F6F6;
}
::-webkit-scrollbar-thumb {
  background-color: #0090Ad ;
  border-radius: 6px;
  border: 3px solid #F6F6F6;
}
`;
