import styled from "styled-components"

export const RadioStyle = styled.input`
    visibility: hidden;
    
    :checked + label {
        background: blue;
    }
    + label {
        color: blue;
        cursor: pointer;
        display: inline-block;
    }
`