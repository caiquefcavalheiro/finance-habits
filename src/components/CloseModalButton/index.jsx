import { Container } from "./styles"
import {CgClose} from "react-icons/cg"
export const CloseModalButton = ({...rest}) => {
    
    return (
        <Container {...rest}><CgClose/></Container>
    )
}