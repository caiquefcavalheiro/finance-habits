import Circle from "react-circle";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import { DisplayContainer } from "../../components/DisplayContainer";
import ListNavButtons from "../../components/ListNavButtons";
import {
  CardAchieved,
  CardInfo,
  CardsBox,
  CardsConatiner,
  SecondaryContainer,
} from "./style";
import educacao from "../../assets/Educacao.svg";
import investimento from "../../assets/Investimento.svg";
import poupanca from "../../assets/Poupanca.svg";
import { BoxImage, Image } from "../../components/CardGroup/styles";
import { Redirect, useParams } from "react-router-dom";
import { useHabits } from "../../providers/Habit";
import CheckButton from "../../components/CheckButton";
import RefreshButton from "../../components/RefreshButton";
import { BoxDashboard } from "../../components/Board/style";
import { useEffect } from "react";
import Edit from "../../components/Edit";

function Habit({ authenticated, setAuthenticated }) {
  const { userHabits, toGetHabits } = useHabits();
  const params = useParams();

  useEffect(() => {
    toGetHabits();
  }, []);

  const currentHabit = userHabits.find((elem) => elem.id === Number(params.id));
  const currentHabitIndex = userHabits.indexOf(currentHabit);

  const getTheme = () => {
    if (currentHabit.category === "Poupança") {
      return poupanca;
    }
    if (currentHabit.category === "Investimento") {
      return investimento;
    }
    if (currentHabit.category === "Educação") {
      return educacao;
    }
  };

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header setAuthenticated={setAuthenticated} />
      <BoxDashboard>
        <DisplayContainer type="grid">
          <SecondaryContainer>
            <ListNavButtons
              list={userHabits}
              index={currentHabitIndex}
              id={params.id}
              type="habit"
            />
            <CardsConatiner>
              <SubHeader tittle={currentHabit.title} />
              <CardsBox>
                <CardAchieved>
                  <h2>
                    <Edit type="habit" data={currentHabit} />
                    {currentHabit.achieved ? (
                      <RefreshButton type="habits" data={currentHabit} />
                    ) : (
                      <CheckButton type="habits" data={currentHabit} />
                    )}
                  </h2>
                  <Circle
                    animate={true}
                    animationDuration="1s"
                    responsive={true}
                    size={30}
                    lineWidth={20}
                    progress={currentHabit.how_much_achieved}
                    progressColor="#0090AD"
                    bgColor="#A5D9EC"
                    textColor="#0090AD"
                    textStyle={{
                      font: "bold 5rem Helvetica, Arial, sans-serif",
                    }}
                    percentSpacing={10}
                    roundedStroke={true}
                    showPercentage={true}
                    showPercentageSymbol={true}
                  />
                  <BoxImage className="desktop">
                    <Image src={getTheme()} alt={currentHabit.title} />
                  </BoxImage>
                </CardAchieved>
                <CardInfo>
                  <p>Categoria: {currentHabit.category}</p>
                  <p>Dificuldade: {currentHabit.difficulty}</p>
                  <p>Frequência: {currentHabit.frequency}</p>
                  <BoxImage className="desktop">
                    <Image src={getTheme()} alt={currentHabit.title} />
                  </BoxImage>
                </CardInfo>
              </CardsBox>
            </CardsConatiner>
          </SecondaryContainer>
        </DisplayContainer>
      </BoxDashboard>
    </>
  );
}

export default Habit;
