import Circle from 'react-circle';

import Header from '../../components/Header';
import { useHabitId } from '../../providers/HabitId';
import { useSignin } from '../../providers/SignIn';
import {Header as SubHeader} from '../../components/BoardHabits/style';
import {Container} from '../../components/BoardHabits/style';
import ListNavButtons from '../../components/ListNavButtons';
import { CardAchieved, CardInfo, CardsBox, SecondaryContainer } from './style';
import educacao from "../../assets/Educacao.svg"
import investimento from "../../assets/Investimento.svg";
import poupanca from "../../assets/Poupanca.svg";
import { BoxImage, Image } from '../../components/CardGroup/styles';
import { useParams } from 'react-router-dom';

function Habit () {

    // const {currentId} = useHabitId();
    const {getHabits} = useSignin();
    const params = useParams();
    
    getHabits();
    const userHabits = JSON.parse(localStorage.getItem("@financeHabits:userHabits"));
    const currentHabit = userHabits.find(elem => elem.id === Number(params.id));
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

    return (
        <>
        <Header/>
        <Container>
            <SecondaryContainer>
                <ListNavButtons list={userHabits} index={currentHabitIndex} id={params.id}/>
                <div>
                    <SubHeader>
                        {currentHabit.title}
                    </SubHeader>
                    <CardsBox>
                        <CardAchieved>
                            <h2>Ícones</h2>
                            <Circle
                                animate={true}
                                animationDuration="1s"
                                responsive={true} // Boolean: Make SVG adapt to parent size
                                size={30} // Number: Defines the size of the circle.
                                lineWidth={20} // Number: Defines the thickness of the circle's stroke.
                                progress={currentHabit.how_much_achieved} // Number: Update to change the progress and percentage.
                                progressColor="#0090AD"  // String: Color of "progress" portion of circle.
                                bgColor="#A5D9EC" // String: Color of "empty" portion of circle.
                                textColor="#0090AD" // String: Color of percentage text color.
                                textStyle={{
                                    font: 'bold 5rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                                }}
                                percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                                roundedStroke={true} // Boolean: Rounded/Flat line ends
                                showPercentage={true} // Boolean: Show/hide percentage.
                                showPercentageSymbol={true}
                            />
                            <BoxImage className='desktop'>
                                <Image src={getTheme()} alt={currentHabit.title} />
                            </BoxImage>
                        </CardAchieved>
                        <CardInfo>
                            <p>Categoria: {currentHabit.category}</p>
                            <p>Dificuldade: {currentHabit.difficulty}</p>
                            <p>Frequência: {currentHabit.frequency}</p>
                            <BoxImage className='desktop'>
                                <Image src={getTheme()} alt={currentHabit.title} />
                            </BoxImage>
                        </CardInfo>
                    </CardsBox>
                </div>
            </SecondaryContainer>
        </Container>
        </>
    )
}

export default Habit;