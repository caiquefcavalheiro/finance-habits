import styled from "styled-components";

export const Container = styled.main`

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    margin: 70px 50px 50px;
    padding: 40px 20px;

    min-height: 350px;

    border-radius: var(--radius);

    background-color: var(--color-grey-0);
    backdrop-filter: blur(20px);
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.25);

    @media (min-width: 600px){
        margin: 35px 120px;
        padding: 54px 80px;

        min-height: 400px;
    }
`