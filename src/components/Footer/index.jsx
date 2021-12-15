import { Container } from "./style";
import Bernardo from "../../assets/Bernardo.jpeg";
import Caique from "../../assets/Caique.jpeg";
import Dorival from "../../assets/Dorival.jpeg";
import Gabriel from "../../assets/Gabriel.jpeg";
import Murillo from "../../assets/Murillo.jpeg";

function Footer() {
  return (
    <>
      <Container>
        <a href="https://www.linkedin.com/in/bernardo-c-costa/">
          <img src={Bernardo} alt="Bernardo" />
          <p>Quality Assurance</p>
        </a>
        <a href="https://www.linkedin.com/in/caiquefcavalheiro/">
          <img src={Caique} alt="Bernardo" />
          <p>Tech Leader</p>
        </a>
        <a href="https://www.linkedin.com/in/dorivalmachado/">
          <img src={Dorival} alt="Bernardo" />
          <p>Product Owner</p>
        </a>
        <a href="https://www.linkedin.com/in/gabriel-amaral-59181b218/">
          <img src={Gabriel} alt="Bernardo" />
          <p>Scrum Master</p>
        </a>
        <a href="https://www.linkedin.com/in/murillotlopes/">
          <img src={Murillo} alt="Bernardo" />
          <p>Quality Assurance</p>
        </a>
      </Container>
    </>
  );
}

export default Footer;
