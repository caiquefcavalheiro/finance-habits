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
  Name,
} from "./styles";
import educacao from "../../assets/Educacao.svg";
import investimento from "../../assets/Investimento.svg";
import poupanca from "../../assets/Poupanca.svg";
import { useGroups } from "../../providers/Groups";

const CardSearch = ({ item, check, itemChecked }) => {
  const [pop, setPop] = useState(false);
  const [anchor, setAnchor] = useState("");
  const { subscribeGroup } = useGroups()

  const { category, name, description } = item

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

  const handleSubscribe = () => {
    subscribeGroup(item);
    check(!itemChecked)
  }

  return (
    <>
      <BoxMobile>
        <CardH
          onClick={(evt) => {
            setPop(true);
            setAnchor(evt.currentTarget);
          }}
        >
          <div className="category">Categoria: {category}</div>
          <TittlePop><h3>{name}</h3></TittlePop>
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
              <ButtonPop onClick={handleSubscribe}>inscreva-se</ButtonPop>
            </BoxButton>
          </PopBox>
        </PopOVER>
      </BoxMobile>

      <BoxDesktop>
        <DivCattegory>
          <div>{category}</div>
          <BoxButton>
            <ButtonDesc onClick={handleSubscribe}>inscreva-se</ButtonDesc>
          </BoxButton>
        </DivCattegory>

        <Description>{description}</Description>
        <BoxName>
          <Name>{name}</Name>
          <BoxImage>
            <Image src={getTheme()} alt={name} />
          </BoxImage>
        </BoxName>
      </BoxDesktop>
    </>
  );
};

export default CardSearch;
