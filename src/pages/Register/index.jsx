import Footer from "../../components/Footer";
import Header from "../../components/Header";
import figure from "../../assets/figure-register.svg"
import {MainContainer, MainContainerMobile, Container} from "./style"
import SignupMobile from "../../components/SignupMobile";

function Register ({authenticated, setAuthenticated}) {

    return(
        <>
        <MainContainer>
            <Header authenticated={authenticated} setAuthenticated={setAuthenticated} />
            <Container>
                <SignupMobile />
                <div className="group2">
                    <img src={figure} alt="figure-register"></img>
                </div>
            </Container>
            <Footer />
        </MainContainer>
        <MainContainerMobile>
            <h1>Finance Habits</h1>
            <div className="group3">
                <SignupMobile className="group4" />
            </div>
            <Footer />
        </MainContainerMobile>
        </>
    )
}

export default Register;