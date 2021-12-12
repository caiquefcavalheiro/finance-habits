import Header from '../../components/Header';
import { useHabitId } from '../../providers/HabitId';
import { useSign } from '../../providers/SignIn';
import {Header as SubHeader} from '../../components/BoardHabits/style';
import {Container} from '../../components/BoardHabits/style';

function Habit () {

    const {currentId} = useHabitId();
    const {getHabits} = useSign();
    
    getHabits();
    const userHabits = JSON.parse(localStorage.getItem("@financeHabits:userHabits"));
    const currentHabit = userHabits.find(elem => elem.id === currentId);
    const currentHabitIndex = userHabits.indexOf(currentHabit);

    return (
        <>
        <Header/>
        <Container>
            <SubHeader>
                <span className='mobile'>Hábito: </span>{currentHabit.title}
            </SubHeader>
        </Container>
        </>
    )
}

export default Habit;