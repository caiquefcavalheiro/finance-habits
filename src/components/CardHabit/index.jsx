import { useState } from "react";
import DeleteHabit from "../DeleteHabit";
import {
  CardH,
  TittlePop,
  DescPop,
  BoxButton,
  BoxMobile,
  BoxDesktop,
  PopOVER,
  PopBox,
  Image,
  BoxName,
  DivCattegory,
  BoxImage,
  Name,
  // Edit,
  Close,
  // Wedit,
  Wclose,
} from "../CardGroup/styles";
import educacao from "../../assets/Educacao.svg";
import investimento from "../../assets/Investimento.svg";
import poupanca from "../../assets/Poupanca.svg";
import { FrequencyAndDifficult, Check } from "./styles";
import { useHistory } from "react-router-dom";
import Edit from "../Edit";

const CardHabitCard = (data) => {
  const { title, category, difficulty, frequency, id } = data;

  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [pop, setPop] = useState(false);
  const [anchor, setAnchor] = useState("");
  const history = useHistory();

  const openModal = (e) => {
    setDeleteModal(true);
    e.stopPropagation();
  };

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

  const goToHabit = () => {
    history.push(`/habit/${id}`);
  };

  return (
    <>
      <BoxMobile onClick={goToHabit}>
        <CardH
          onClick={(evt) => {
            setPop(true);
            setAnchor(evt.currentTarget);
          }}
        >
          {/* <div>{category}</div> */}
          <TittlePop>{title}</TittlePop>
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
            <DescPop>Dificuldade: {difficulty}</DescPop>
            <DescPop>Frequência: {frequency}</DescPop>
            <BoxButton>
              <div>
                <Edit setEditModal={setEditModal} type="habit" data={data} />
                <Check />
                <Close onClick={openModal} />
              </div>
            </BoxButton>
          </PopBox>
        </PopOVER>
      </BoxMobile>

      <BoxDesktop onClick={goToHabit}>
        <DivCattegory>
          <div>{category}</div>
          <BoxButton>
            <Edit type="habit" data={data} />
            <Check />
            <Wclose onClick={openModal} />
          </BoxButton>
        </DivCattegory>
        <FrequencyAndDifficult>
          <p>Dificuldade: {difficulty}</p>
          <p>Frequência: {frequency}</p>
        </FrequencyAndDifficult>
        <BoxName>
          <Name>{title}</Name>
          <BoxImage>
            <Image src={getTheme()} alt={title} />
          </BoxImage>
        </BoxName>
      </BoxDesktop>
      <DeleteHabit
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
        data={data}
      />
    </>
  );
};
export default CardHabitCard;
