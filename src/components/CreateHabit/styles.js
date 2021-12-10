import styled from "styled-components"
import ReactModal from "react-modal"

export const HabitModal = styled(ReactModal)`
    width: 310px;
        height: 510px;
        position: absolute;
        left: 50%;
        margin-left: -160px;
        margin-top: -255px;
        top: 50%;
        background: var(--cor-fundo-modal);
        border-radius: 8px;
        padding: 20px;

    @media (min-width: 800px) {
        width: 515px;
        height: 375px;

        margin-left: -257.5px;
        margin-top: -160px;
    }
`