import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Button from '../../components/Button'
import figureHome from "../../assets/figure-home.svg"
import { MainContainerMobile, MainContainer, Container } from "./style"
import GoUpSignIn from "../../components/GoupSignIn"
import GoUpSignUp from '../../components/GoupSignUp'
import { useState } from "react"
import { Redirect } from "react-router-dom"

const Home = ({authenticated, setAuthenticated}) => {
    const [signin, setSignin] = useState(false);
    const [signup, setSignup] = useState(false);

    if(authenticated) {
        return <Redirect to="/dashboard" />
    }

    return(
        <>
        <MainContainer>
            <Header />
            <Container>

                
                <div className="group1">
                    <h1>Desenvolva <span>Novos Habitos</span> Financeiros</h1>
                    <h2>Crie hábitos personalizados e se junte a grupos com pessoas com as mesmas metas que você</h2>
                    <Button white onClick={() => console.log()}>Explore</Button>
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
                <Button white onClick={() => setSignup(true)}>Cadastro</Button>
            </div>
            <Footer />
            <GoUpSignIn openSignin={signin} setOpenSignin={setSignin} setAuthenticated={setAuthenticated} />
            <GoUpSignUp openSignup={signup} setOpenSignup={setSignup} setAuthenticated={setAuthenticated}/>
        </MainContainerMobile>
        </>
    )
}

export default Home
