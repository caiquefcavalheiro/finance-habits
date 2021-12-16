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
  Edit,
  Check,
  Wedit,
} from "./styles";
import educacao from "../../assets/Educacao.svg";
import investimento from "../../assets/Investimento.svg";
import poupanca from "../../assets/Poupanca.svg";
import { useHistory } from "react-router-dom";
import { useGroups } from "../../providers/Groups";


const CardGroup = ({ group }) => {
  const {category, description, name, id } = group
  const [pop, setPop] = useState(false);
  const [anchor, setAnchor] = useState("");
  const history = useHistory();
  const {unsubscribeGroup} = useGroups()

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

  const goToGroup = () => {
    history.push(`/groups/${id}`);
  };

  const remove = (e) => {
    unsubscribeGroup(group)
    e.stopPropagation()
  }

  return (
    <>
      <BoxMobile onClick={goToGroup}>
        <CardH
          onClick={(evt) => {
            setPop(true);
            setAnchor(evt.currentTarget);
          }}
        >
          {/* <div>category</div> */}
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
              <ButtonPop onClick={remove}>Sair</ButtonPop>
              <div>
                <Edit />
                <Check />
              </div>
            </BoxButton>
          </PopBox>
        </PopOVER>
      </BoxMobile>

      <BoxDesktop onClick={goToGroup}>
        <DivCattegory>
          <div>{category}</div>
          <BoxButton>
            <ButtonDesc onClick={remove}>Sair</ButtonDesc>
            <Wedit />
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

export default CardGroup;
