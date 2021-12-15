import { Container } from "./style";
import Bernardo from "../../assets/Bernardo.jpeg";
import Caique from "../../assets/Caique.jpeg";
import Doriavel from "../../assets/Doriaval.jpeg";
import Gabriel from "../../assets/Gabriel.jpeg";
import Murillo from "../../assets/Murillo.jpeg";

function Footer() {
  return (
    <>
      <Container>
        <link to="www.google.com.br">
          <img src={Bernardo} alt="Bernardo" />
        </link>
      </Container>
    </>
  );
}

export default Footer;
