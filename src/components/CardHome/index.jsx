import * as React from "react";
import { useState } from "react";
import {
  CardH,
  ButtonPop,
  TittlePop,
  DescPop,
  BoxButton,
  BoxMobile,
  BoxDesktop,
  PopOVER,
  PopBox,
  Image,
  BoxName,
  ButtonDesc,
  DivCattegory,
  Description,
  BoxImage,
} from "./styles";
import educacao from "../../assets/Educacao.svg";
import investimento from "../../assets/Investimento.svg";
import poupanca from "../../assets/Poupanca.svg";

const CardHome = ({ category, description, name }) => {
  const [pop, setPop] = useState(false);
  const [anchor, setAnchor] = useState("");

  const getTheme = () => {
    if (category === "Poupança") {
      return poupanca;
    }
    if (category === "Investimento") {
      return investimento;
    }
    if (category === "Educação") {
      return educacao;
    }
  };

  return (
    <>
      <BoxMobile>
        <CardH
          onClick={(evt) => {
            setPop(true);
            setAnchor(evt.currentTarget);
          }}
        >
          <div>category</div>
          <TittlePop>{name}</TittlePop>
        </CardH>
        <PopOVER
          id={"basic-popover"}
          open={pop}
          anchorEl={anchor}
          onClose={() => setPop(false)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <PopBox
            sx={{
              p: 2,
            }}
          >
            <DescPop>{description}</DescPop>
            <BoxButton>
              <ButtonPop>inscreva-se</ButtonPop>
            </BoxButton>
          </PopBox>
        </PopOVER>
      </BoxMobile>

      <BoxDesktop>
        <DivCattegory>
          <div>{category}</div>
          <BoxButton>
            <ButtonDesc>inscreva-se</ButtonDesc>
          </BoxButton>
        </DivCattegory>

        <Description>{description}</Description>
        <BoxName>
          <div>{name}</div>
          <BoxImage>
            <Image src={getTheme()} alt={name} />
          </BoxImage>
        </BoxName>
      </BoxDesktop>
    </>
  );
};

export default CardHome;
