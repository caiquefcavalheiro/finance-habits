import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;

    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 80%;
    background: var(--color-gradient-blue);
    }

    .group2{
        width: 400px;

        img{
            width: 100%;
            animation: 3s movement;
        }

        @keyframes movement {
        to{
            opacity:100%;
        }
        from{
            opacity: 0;
        }
    }


    @keyframes movement {
        to{
            opacity:100%;
        }
        from{
            opacity: 0;
        }
    }

    img{
        width: 100%;
    }

    @media screen and (max-width: 1000px) {
        div{
            h1{
                font-size: 40px;
            }
            font-size: 14px;
        }
        
        .group2{
            display: none;
        }
    }

    @media screen and (max-width: 1200px) {
        div h1{
            font-size: 50px;
        }
    }
`

export const MainContainerMobile = styled.div`
    width: 100vw;
    height: 100vh;
    background: var(--color-gradient-blue);

    h1{
            padding-top: 20px;
            font-family: 'Gugi',cursive;
            color: var(--color-white);
            text-align: center;
        }

    .group3{
            display:flex;
            justify-content: center;
        }

    @media screen and (min-width: 800px) {
        display: none;
    }

`