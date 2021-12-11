import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Button from '../../components/Button'
import figureHome from "../../assets/figure-home.svg"
import { MainContainerMobile, MainContainer, Container } from "./style"
import GoUpSignIn from "../../components/GoupSignIn"
import { useState } from "react"

const Home = ({authenticated, setAuthenticated}) => {
    const [signin, setSignin] = useState(false);

    return(
        <>
        <MainContainer>
            <Header authenticated={authenticated} setAuthenticated={setAuthenticated} />
            <Container>
                <div className="group1">
                    <h1>Desenvolva <span>Novos Habitos</span> Financeiros</h1>
                    <h2>Crie hábitos personalizados e se junte a grupos com pessoas com as mesmas metas que você</h2>
                    <Button white onClick="">Explore</Button>
                </div>
                <div className="group2">
                    <img src={figureHome} alt="figure"></img>
                </div>
            </Container>
            <Footer />
        </MainContainer>
        <MainContainerMobile>
            <h1>Finance Habits</h1>
            <div className="group3">
                <h2>Desenvolva <span>Novos Habitos</span> Financeiros</h2>
                <h3>Crie hábitos personalizados e se junte a grupos com pessoas com as mesmas metas que você</h3>
                <Button white onClick={() => setSignin(true)}>Login</Button>
                <Button white>Cadastro</Button>
            </div>
            <Footer />
            <GoUpSignIn openSignup={signin} setOpenSignup={setSignin} authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </MainContainerMobile>
        </>
    )
}

export default Home
