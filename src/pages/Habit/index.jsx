import Header from '../../components/Header';
import { useHabitId } from '../../providers/HabitId';
import { useSign } from '../../providers/SignIn';
import {Header as SubHeader} from '../../components/BoardHabits/style';
import {Container} from '../../components/BoardHabits/style';
import ListNavButtons from '../../components/ListNavButtons';

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
            <ListNavButtons list={userHabits} index={currentHabitIndex}/>
            <SubHeader>
                {currentHabit.title}
            </SubHeader>
        </Container>
        </>
    )
}

export default Habit;