import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: black;
    color: white;
    height: 10%;

    @media screen and (max-width: 800px) {
        height: 33%;
    }
`