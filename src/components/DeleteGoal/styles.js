import styled from "styled-components";
import ReactModal from "react-modal";

export const DeleteModal = styled(ReactModal)`
    position: fixed;
        bottom: 0px;
        height: 200px;
        width: 100%;
        height: 40%;
        margin: 0 auto;
        background: var(--color-light-blue);
        border-radius: 50px 50px 0px 0px;
        padding: 20px;
        transform: translate(-50, -50%);

    @media (min-width: 500px) {
        position: absolute;
        width: 530px;
        height: 210px;
        margin-left: -257.5px;
        margin-top: -160px;
        border-radius: 8px;
        left: 50%;
        top: 35%;
    }
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2.5rem auto;
    }
    button {
        margin: 1rem;
    }
`