import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    height: 80%;
    background: var(--color-gradient-blue);

    .group1{
        width: 40%;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        
    }

    .group2{
        margin: 0;
        padding-left: 20px;
        /* margin-right: 40px; */
        width: 40%;
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

    img{
        width: 100%;
        max-width: 430px
    }

    @media screen and (max-width: 1000px) {
        justify-content: center;
        
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

export const Form = styled.form`
    width: 370px;
    height: 420px;
    background-color: rgba(255, 255, 255, .5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 30px 20px;
    border-radius: 8px;

    h2{
        color: #fff;
        font-size: 30px
    }

    p{
        color: #000;
        
        a{
            color: var(--color-dark-blue);
        }
    }
    
`

