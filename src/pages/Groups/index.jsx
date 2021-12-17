import { useState, useEffect } from "react";
import Circle from "react-circle";
import Collapsible from "react-collapsible";
import Edit from "../../components/Edit";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import { DisplayContainer } from "../../components/DisplayContainer";
import { IconsBox, SecondaryContainer } from "../Habit/style";
import ListNavButtons from "../../components/ListNavButtons";
import { Redirect, useParams } from "react-router-dom";
import educacao from "../../assets/Educacao.svg";
import investimento from "../../assets/Investimento.svg";
import poupanca from "../../assets/Poupanca.svg";
import { CgClose } from "react-icons/cg";
import {
  CardsBox,
  CardExtra,
  CardInfo,
  MiniCard,
  ScrollBox,
  SupportHeader,
  EditIcon,
  Description,
  ContainerButtonsActivities,
} from "./style";
import { BoxImage, Image } from "../../components/CardGroup/styles";
import CheckButton from "../../components/CheckButton";
import { BoxDashboard } from "../../components/Board/style";
import { useGroups } from "../../providers/Groups";
import RefreshButton from "../../components/RefreshButton";
import { CreateButton } from "../../components/CreateButton";
import DeleteGoal from "../../components/DeleteGoal";
import Remove from "../../components/Remove";

function Groups({ authenticated, setAuthenticated }) {
  const params = useParams();
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const { userGroups, allGroupsUser } = useGroups();

  useEffect(() => {
    allGroupsUser();
  }, []);

  const currentGroup = userGroups.find((elem) => elem.id === Number(params.id));
  const currentGroupIndex = userGroups.indexOf(currentGroup);

  const [deleteGoalModal, setDeleteGoalModal] = useState(false);

  const openDeleteGoal = () => {
    setDeleteGoalModal(true);
  };

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
                  <EditIcon>
                    <Edit type="groups" data={currentGroup} />
                  </EditIcon>
                  <p>
                    <span className="mobile">Categoria: </span>
                    {currentGroup.category}
                  </p>
                  <Description>
                    <span className="mobile">Descrição: </span>
                    {currentGroup.description}
                  </Description>
                  <p className="title">{currentGroup.name}</p>
                  <BoxImage className="desktop image">
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
                            <ContainerButtonsActivities>
                              <Edit type="activities" data={elem} />
                              <Remove type="activitie" data={elem} />
                            </ContainerButtonsActivities>
                            <p>
                              Criado:
                              {` ${new Date(elem.realization_time).getDate()}/${
                                new Date(elem.realization_time).getMonth() + 1
                              }/${new Date(
                                elem.realization_time
                              ).getFullYear()}`}
                            </p>
                            <p>{elem.title}</p>
                          </MiniCard>
                        );
                      })}
                  </ScrollBox>

                  <BoxImage className="desktop image">
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
                          <IconsBox>
                            <Edit type="goals" data={elem} />
                            {elem.achieved ? (
                              <RefreshButton type="goals" data={elem} />
                            ) : (
                              <CheckButton type="goals" data={elem} />
                            )}
                            <CgClose
                              color="#0090Ad"
                              style={{ cursor: "pointer" }}
                              onClick={openDeleteGoal}
                            />
                          </IconsBox>
                          <DeleteGoal
                            deleteGoalModal={deleteGoalModal}
                            setDeleteGoalModal={setDeleteGoalModal}
                            data={elem}
                          />
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

                  <BoxImage className="desktop image">
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
