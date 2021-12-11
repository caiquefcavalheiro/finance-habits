import styled from "styled-components"
import ReactModal from "react-modal"

export const HabitModal = styled(ReactModal)`
        position: fixed;
        bottom: 0px;
        height: 800px;
        width: 100%;
        height: 80%;
        margin: 0 auto;
        background: var(--color-light-blue);
        border-radius: 50px 50px 0px 0px;
        padding: 20px;
        transform: translate(-50, -50%);

    @media (min-width: 500px) {
        position: absolute;
        width: 530px;
        height: 420px;
        margin-left: -257.5px;
        margin-top: -160px;
        border-radius: 8px;
        left: 50%;
        top: 35%;
    }
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    Button {
        background: var(--color-dark-blue);
        height: 2.5rem;
        color: #FFFFFF;
        width: 190px;
        left: 91px;
        top: 576px;
        border-radius: 8px;
        margin: 1rem auto;
    }
`

export const Content = styled.div`
    display: flex;
    text-align: center;
    margin: 0.5rem auto;
    color: white;
`