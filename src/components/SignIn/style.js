import styled from 'styled-components'

import ReactModal from 'react-modal'

export const Modal = styled(ReactModal)`
        width: 310px;
        height: 510px;
        position: absolute;
        left: 50%;
        margin-left: -160px;
        margin-top: -255px;
        top: 50%;
        background: #3d3d3d;
        border-radius: 8px;
        padding: 20px;

    @media (min-width: 800px) {
        width: 515px;
        height: 310px;

        margin-left: -257.5px;
        margin-top: -160px;
    }
`

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    form {
        display: flex;
        flex-direction: column;
        
        margin:  2.5rem 0rem;

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

export const Icon = styled.button`
    cursor: pointer;
    background: transparent;

    color: var(--color-font);

    margin-left: 90%;

    svg{
        font-size: 25px;
    }
`

