import Footer from "../../components/Footer";
import Header from "../../components/Header";
import figure from "../../assets/figure-register.svg";
import { MainContainer, MainContainerMobile, Container } from "./style";
import SignupMobile from "../../components/SignupMobile";
import { Redirect } from "react-router-dom";

function Register({ authenticated, setAuthenticated }) {
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <MainContainer>
        <Header />
        <Container>
          <SignupMobile setAuthenticated={setAuthenticated} />
          <div className="group2">
            <img src={figure} alt="figure-register"></img>
          </div>
        </Container>
        <Footer />
      </MainContainer>
      <MainContainerMobile>
        <h1>Finance Habits</h1>
        <div className="group3">
          <SignupMobile
            setAuthenticated={setAuthenticated}
            className="group4"
          />
        </div>
        <Footer />
      </MainContainerMobile>
    </>
  );
}

export default Register;
