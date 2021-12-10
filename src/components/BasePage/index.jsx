import Header from "../../components/Header"
import { Container } from "./style"

const BasePage = ({children, authenticated, setAuthenticated}) => {
    return(
        <>
            <Header authenticated={authenticated} setAuthenticated={setAuthenticated} />

            <Container>
                {children}
            </Container>
        </>
    )
}

export default BasePage