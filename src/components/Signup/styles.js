import styled from "styled-components"
import ReactModal from "react-modal"

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin:  3rem auto;

        .MuiOutlinedInput-root{
            background-color: white;
        }

        button{
            margin: 4rem auto;
        }

        @media (min-width: 800px){
            margin: 0;

            button{
                margin: 1rem auto;
            }
        }
    }

`
export const ModalSignup = styled(ReactModal)`
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
export const CloseButton = styled.button`
    cursor: pointer;
    background: transparent;
    color: var(--color-font);
    float: right;
    svg{
        font-size: 25px;
    }
`
export const ButtonDiv = styled.button`
    display: flex;
    justify-content: flex-end;
`

export const Icon = styled.button`
    cursor: pointer;
    background: transparent;

    color: var(--color-font);

    margin-left: 90%;

    svg{
        font-size: 25px;
    }
`

