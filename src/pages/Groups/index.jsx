import { useState, useEffect } from "react";
import Circle from "react-circle";
import Collapsible from "react-collapsible";
import Edit from "../../components/Edit";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import { DisplayContainer } from "../../components/DisplayContainer";
import { SecondaryContainer } from "../Habit/style";
import ListNavButtons from "../../components/ListNavButtons";
import { Redirect, useParams } from "react-router-dom";
import educacao from "../../assets/Educacao.svg";
import investimento from "../../assets/Investimento.svg";
import poupanca from "../../assets/Poupanca.svg";
import {CgClose} from "react-icons/cg"
import {
  CardsBox,
  CardExtra,
  CardInfo,
  Icon,
  MiniCard,
  ScrollBox,
  SupportHeader,
} from "./style";
import { BoxImage, Image } from "../../components/CardGroup/styles";
import CheckButton from "../../components/CheckButton";
import { BoxDashboard } from "../../components/Board/style";
import { useGroups } from "../../providers/Groups";
import RefreshButton from "../../components/RefreshButton";
import { CreateButton } from "../../components/CreateButton";
import DeleteGoal from "../../components/DeleteGoal";
import Remove from '../../components/Remove'

function Groups({ authenticated, setAuthenticated }) {
  const params = useParams();
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const { userGroups } = useGroups();

  const currentGroup = userGroups.find((elem) => elem.id === Number(params.id));
  const currentGroupIndex = userGroups.indexOf(currentGroup);

  const [deleteGoalModal, setDeleteGoalModal] = useState(false)
  const [deleteActvModal, setDeleteActvModal] = useState(false)

  const openDeleteGoal = () => {
    setDeleteGoalModal(true)
  }

  useEffect(() => {
    function handleResize() {
      setPageWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  const getTheme = () => {
    if (currentGroup.category === "Poupança") {
      return poupanca;
    }
    if (currentGroup.category === "Investimento") {
      return investimento;
    }
    if (currentGroup.category === "Educação") {
      return educacao;
    }
  };

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  console.log(currentGroup.goals)
  return (
    <>
      <Header setAuthenticated={setAuthenticated} />
      <BoxDashboard>
        <DisplayContainer>
          <SecondaryContainer>
            <ListNavButtons
              list={userGroups}
              index={currentGroupIndex}
              id={params.id}
              type="group"
            />
            <div>
              <SubHeader tittle={currentGroup.name} />
              <CardsBox>
                <CardInfo>
                  <div style={{display: 'flex', justifyContent: 'end'}}>
                    <Edit type="groups" data={currentGroup}/>
                  </div>
                  <p>Categoria: {currentGroup.category}</p>
                  <p>Descrição: {currentGroup.description}</p>
                  <p className="title">Título: {currentGroup.name}</p>
                  <BoxImage className="desktop">
                    <Image src={getTheme()} alt={currentGroup.title} />
                  </BoxImage>
                </CardInfo>
                <CardExtra>
                  <SupportHeader>
                    Atividade
                    <CreateButton type="Activities" />
                  </SupportHeader>
                  <ScrollBox>
                    {currentGroup.activities.length > 0 &&
                      currentGroup.activities.map((elem) => {
                        return (
                          <MiniCard key={elem.id}>
                            <Remove type='activitie' data={elem} />
                            <p>{elem.title}</p>
                            <p>
                              Criado:{" "}
                              {`${new Date(elem.realization_time).getDate()}/${
                                new Date(elem.realization_time).getMonth() + 1
                              }/${new Date(
                                elem.realization_time
                              ).getFullYear()}`}
                            </p>
                          </MiniCard>
                        );
                      })}
                  </ScrollBox>

                  <BoxImage className="desktop">
                    <Image src={getTheme()} alt={currentGroup.title} />
                  </BoxImage>
                </CardExtra>
                <CardExtra>
                  <SupportHeader>
                    Meta
                    <CreateButton type="Goals" />
                  </SupportHeader>
                  <ScrollBox>
                    {currentGroup.goals.map((elem) => {
                      return (
                        <Collapsible
                          key={elem.id}
                          trigger={
                            <p>
                              {elem.title} <br />
                              Dificuldade: {elem.difficulty}
                            </p>
                          }
                        >
                          <h2>
                            <Edit type="goals" data={elem} />
                            {elem.achieved ? (
                              <RefreshButton type="goals" data={elem} />
                            ) : (
                              <CheckButton type="goals" data={elem} />
                            )}
                            <CgClose onClick={openDeleteGoal}/>
                          </h2>
                          <DeleteGoal
                            deleteGoalModal={deleteGoalModal}
                            setDeleteGoalModal={setDeleteGoalModal}
                            data={elem}/>
                          <Circle
                            animate={true}
                            animationDuration="1s"
                            responsive={true} // Boolean: Make SVG adapt to parent size
                            size={30} // Number: Defines the size of the circle.
                            lineWidth={20} // Number: Defines the thickness of the circle's stroke.
                            progress={elem.how_much_achieved} // Number: Update to change the progress and percentage.
                            progressColor="#0090AD" // String: Color of "progress" portion of circle.
                            bgColor={pageWidth >= 600 ? "#E2F2F9" : "#A5D9EC"} // String: Color of "empty" portion of circle.
                            textColor="#0090AD" // String: Color of percentage text color.
                            textStyle={{
                              font: "bold 5rem Helvetica, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
                            }}
                            percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                            roundedStroke={true} // Boolean: Rounded/Flat line ends
                            showPercentage={true} // Boolean: Show/hide percentage.
                            showPercentageSymbol={true}
                          />
                        </Collapsible>
                      );
                    })}
                  </ScrollBox>

                  <BoxImage className="desktop">
                    <Image src={getTheme()} alt={currentGroup.title} />
                  </BoxImage>
                </CardExtra>
              </CardsBox>
            </div>
          </SecondaryContainer>
        </DisplayContainer>
      </BoxDashboard>
      </>
  );
}

export default Groups;
