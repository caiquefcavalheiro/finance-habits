import {useState, useEffect} from 'react';
import Circle from "react-circle";

import Edit from "../../components/Edit";
import Header from "../../components/Header";
import SubHeader from '../../components/SubHeader';
import { DisplayContainer } from '../../components/DisplayContainer';
import { CardsBox, SecondaryContainer } from "../Habit/style";
import ListNavButtons from "../../components/ListNavButtons";
import { useParams } from "react-router-dom";
import educacao from "../../assets/Educacao.svg";
import investimento from "../../assets/Investimento.svg";
import poupanca from "../../assets/Poupanca.svg";
import { CardExtra, CardInfo, CollapsibleStyled, Icon, MiniCard, ScrollBox, SupportHeader } from "./style";
import { BoxImage, Image } from "../../components/CardGroup/styles";

function Groups() {
  const params = useParams();
  const [pageWidth, setPageWidth] = useState(window.innerWidth)

  // const token = localStorage.getItem("@financeHabits:token");
  const userGroups = JSON.parse(
    localStorage.getItem("@financeHabits:userGroups")
  );

  const currentGroup = userGroups.find((elem) => elem.id === Number(params.id));
  const currentGroupIndex = userGroups.indexOf(currentGroup);

  useEffect(() => {
    function handleResize() {
      setPageWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
  }, [])

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


  return (
    <>
      <Header />
      <DisplayContainer>
        <SecondaryContainer>
          <ListNavButtons
            list={userGroups}
            index={currentGroupIndex}
            id={params.id}
            type="group"
          />
          <div>
            <SubHeader tittle={currentGroup.name}/>
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
                <ScrollBox>
                  {currentGroup.activities.length > 0 &&
                    currentGroup.activities.map((elem) => {
                      return (
                        <MiniCard key={elem.id}>
                          <p>Título: {elem.title}</p>
                          <p>Criado: {elem.realization_time}</p>
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
                  <Icon>+</Icon>
                </SupportHeader>
                <ScrollBox>
                  {currentGroup.goals.map((elem) => {
                    return (
                      <CollapsibleStyled key={elem.id} trigger={<p>Título: {elem.title} <br/>Dificuldade: {elem.difficulty}</p>}>
                        <h2><Edit type='goals' data={elem}/></h2>
                        <Circle
                          animate={true}
                          animationDuration="1s"
                          responsive={true} // Boolean: Make SVG adapt to parent size
                          size={30} // Number: Defines the size of the circle.
                          lineWidth={20} // Number: Defines the thickness of the circle's stroke.
                          progress={elem.how_much_achieved} // Number: Update to change the progress and percentage.
                          progressColor="#0090AD" // String: Color of "progress" portion of circle.
                          bgColor={pageWidth >= 600 ? "#E2F2F9" :"#A5D9EC"} // String: Color of "empty" portion of circle.
                          textColor="#0090AD" // String: Color of percentage text color.
                          textStyle={{
                            font: "bold 5rem Helvetica, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
                          }}
                          percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                          roundedStroke={true} // Boolean: Rounded/Flat line ends
                          showPercentage={true} // Boolean: Show/hide percentage.
                          showPercentageSymbol={true}
                        />
                      </CollapsibleStyled>
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
    </>
  );
}

export default Groups;
