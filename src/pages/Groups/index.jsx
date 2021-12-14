// import {useState, useEffect} from 'react';

import Edit from "../../components/Edit";
import Header from "../../components/Header";
import { Header as SubHeader } from "../../components/BoardHabits/style";
import { Container } from "../../components/BoardHabits/style";
import { CardsBox, SecondaryContainer } from "../Habit/style";
import ListNavButtons from "../../components/ListNavButtons";
import { useParams } from "react-router-dom";
import educacao from "../../assets/Educacao.svg";
import investimento from "../../assets/Investimento.svg";
import poupanca from "../../assets/Poupanca.svg";
import { CardExtra, CardInfo, Icon, MiniCard, SupportHeader } from "./style";
import { BoxImage, Image } from "../../components/CardGroup/styles";

function Groups() {
  const params = useParams();

  // const token = localStorage.getItem("@financeHabits:token");
  const userGroups = JSON.parse(
    localStorage.getItem("@financeHabits:userGroups")
  );

  const currentGroup = userGroups.find((elem) => elem.id === Number(params.id));
  const currentGroupIndex = userGroups.indexOf(currentGroup);

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

  console.log(currentGroup.activity, currentGroup);

  return (
    <>
      {/* <Edit type="habit" data={{ id: 10 }} /> */}
      <Header />
      <Container>
        <SecondaryContainer>
          <ListNavButtons
            list={userGroups}
            index={currentGroupIndex}
            id={params.id}
            type="group"
          />
          <div>
            <SubHeader>{currentGroup.name}</SubHeader>
            <CardsBox>
              <CardInfo>
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
                  <Icon>+</Icon>
                </SupportHeader>
                {currentGroup.activities.length > 0 &&
                  currentGroup.activities.map((elem) => {
                    return (
                      <MiniCard key={elem.id}>
                        <p>Título: {elem.title}</p>
                        <p>Criado: {elem.realization_time}</p>
                      </MiniCard>
                    );
                  })}
                <BoxImage className="desktop">
                  <Image src={getTheme()} alt={currentGroup.title} />
                </BoxImage>
              </CardExtra>
              <CardExtra>
                <SupportHeader>
                  Meta
                  <Icon>+</Icon>
                </SupportHeader>
                {currentGroup.goals.map((elem) => {
                  return (
                    <MiniCard key={elem.id}>
                      <p>Título: {elem.title}</p>
                      <p>Dificuldade: {elem.difficulty}</p>
                    </MiniCard>
                  );
                })}
                <BoxImage className="desktop">
                  <Image src={getTheme()} alt={currentGroup.title} />
                </BoxImage>
              </CardExtra>
            </CardsBox>
          </div>
        </SecondaryContainer>
      </Container>
    </>
  );
}

export default Groups;
