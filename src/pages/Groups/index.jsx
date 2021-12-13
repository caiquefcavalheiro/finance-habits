// import {useState, useEffect} from 'react';

// import Edit from "../../components/Edit";
import Header from '../../components/Header';
import {Header as SubHeader} from '../../components/BoardHabits/style';
import {Container} from '../../components/BoardHabits/style';
import {CardsBox, SecondaryContainer} from '../Habit/style';
import ListNavButtons from '../../components/ListNavButtons';
import { useParams } from 'react-router-dom';
import educacao from "../../assets/Educacao.svg"
import investimento from "../../assets/Investimento.svg";
import poupanca from "../../assets/Poupanca.svg";
import { CardInfo } from './style';
import { BoxImage, Image } from '../../components/CardGroup/styles';

function Groups() {
  const params = useParams();

  // const token = localStorage.getItem("@financeHabits:token");
  const userGroups = JSON.parse(localStorage.getItem("@financeHabits:userGroups"));

  const currentGroup = userGroups.find(elem => elem.id === Number(params.id));
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

  console.log(currentGroup)

  return (
    <>
      {/* <Edit /> */}
      <Header/>
      <Container>
        <SecondaryContainer>
          <ListNavButtons list={userGroups} index={currentGroupIndex} id={params.id} type='group'/>
          <div>
            <SubHeader>
              {currentGroup.name}
            </SubHeader>
            <CardsBox>
              <CardInfo>
                  <p>Categoria: {currentGroup.category}</p>
                  <p>Descrição: {currentGroup.description}</p>
                  <BoxImage className='desktop'>
                      <Image src={getTheme()} alt={currentGroup.title} />
                  </BoxImage>
              </CardInfo>
            </CardsBox>
          </div>
        </SecondaryContainer>
      </Container>
    </>
  );
}

export default Groups;
