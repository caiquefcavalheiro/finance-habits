import Header from "../../components/Header"
import { Container } from "./style"

const BasePage = ({children}) => {
    return(
        <>
            <Header/>

            <Container>
                {children}
            </Container>
        </>
    )
}

export default BasePage