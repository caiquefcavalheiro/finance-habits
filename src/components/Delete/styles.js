import styled from "styled-components"
import ReactModal from "react-modal"

export const HabitDeleteModal = styled(ReactModal)`
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
    height: 250px;
    margin-left: -257.5px;
    margin-top: -160px;
    border-radius: 8px;
    left: 50%;
    top: 35%;
    }

    div {
    font-family: Roboto;
    font-size: 38px;
    font-style: normal;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 1rem;
    }
`
export const CloseModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2.5rem auto;
`