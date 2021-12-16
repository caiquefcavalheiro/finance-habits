import { CommonImg, Container, SpecialImg, TagP } from "./style";
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
          <CommonImg src={Bernardo} alt="Bernardo" />
          <TagP>Bernardo - </TagP>
          <p>Quality Assurance</p>
        </a>
        <a href="https://www.linkedin.com/in/caiquefcavalheiro/">
          <CommonImg src={Caique} alt="Caique" />
          <TagP>Caique - </TagP>
          <p>Tech Leader</p>
        </a>
        <a href="https://www.linkedin.com/in/dorivalmachado/">
          <CommonImg src={Dorival} alt="Dorival" />
          <TagP>Dorival - </TagP>
          <p>Product Owner</p>
        </a>
        <a href="https://www.linkedin.com/in/gabriel-amaral-59181b218/">
          <SpecialImg src={Gabriel} alt="Gabriel" />
          <TagP>Gabriel - </TagP>
          <p>Scrum Master</p>
        </a>
        <a href="https://www.linkedin.com/in/murillotlopes/">
          <CommonImg src={Murillo} alt="Murillo" />
          <TagP>Murillo - </TagP>
          <p>Quality Assurance</p>
        </a>
      </Container>
    </>
  );
}

export default Footer;
