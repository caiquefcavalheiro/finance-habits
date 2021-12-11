import styled from "styled-components"

export const RadioStyle = styled.input`
    visibility: hidden;

    :checked + label {
        background: var(--color-primary-blue);
    }
     
     + label {
        background: var(--color-dark-blue);
        padding: 0.5rem;
        width: 5rem;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        border-radius: 8px;
        cursor: pointer;
    }

`