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
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 80%;
    background: var(--color-gradient-blue);

    .group1{
        width: 60%;

        button{
            width: 230px;
        }
    }

    .group2{
        margin-left: 0;
        margin-right: 40px;
        width: 30%;
        animation: 3s movement;
    }

    div{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        margin-bottom: 40px;

        h1{
            font-family: 'Gugi',cursive;
            font-size: 70px;
            color: white;
            margin-bottom: 20px;
            width: 100%;
        }

        span{
            color: #6C6C6C;
        }
        h2{
            font-family: "Roboto" sans-serif;
            font-style: normal;
            font-weight: normal;
            margin-bottom: 20px;
            width: 80%;
            color: white;
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        height:60%;
        margin: 0 20px;

        h2{
            margin: 30px 0;
            font-family: 'Gugi',cursive;
            color: var(--color-white);
            span{
                color: #6C6C6C;
            }
        }

        h3{
            font-family: "Roboto";
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            color: var(--color-white);
            margin-bottom: 20px;
        }

        button{
            margin: 10px;
            width: 110px;
            height: 40px;
            font-size: 16px;
        }
    }

    @media screen and (min-width: 800px) {
        display: none;
    }


`