import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 100%;
    height: 510px;
    position: fixed;
    background: var(--color-light-blue);
    border-radius: 8px;
    padding: 20px;
    display: flex;
    justify-content: center;
    border-radius: 50px 50px 0 0;

    bottom: ${props => props.isOpen ? '0' : '-1000px'};
`

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;

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

