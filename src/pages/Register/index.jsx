import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import figure from "../../assets/figure-register.svg"
import {MainContainer, MainContainerMobile, Container} from "./style"
import Signup from "../../components/Signup";


function Register ({authenticated, setAuthenticated}) {

    return(
        <>
        <MainContainer>
            <Header authenticated={authenticated} setAuthenticated={setAuthenticated} />
            <Container>
                <Signup />
                <div className="group2">
                    <img src={figure} alt="figure-register"></img>
                </div>
            </Container>
            <Footer />
        </MainContainer>
        <MainContainerMobile>
            <h1>Finance Habits</h1>
            <div className="group3">
                <h2>Desenvolva <span>Novos Habitos</span> Financeiros</h2>
                <h3>Crie hábitos personalizados e se junte a grupos com pessoas com as mesmas metas que você</h3>
                <Button white>Login</Button>
                <Button white>Cadastro</Button>
            </div>
            <Footer />
        </MainContainerMobile>
        </>
    )
}

export default Register;