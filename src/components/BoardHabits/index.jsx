import CardHabitCard from "../../components/CardHabit";
import CreateHabit from "../../components/CreateHabit";
import { Container, Header, PlusButton } from "./style";
import CardGroup from "../CardGroup"; // 8888888888888888888888
import { useHabits } from "../../providers/Habit";
import SubHeader from "../SubHeader";


const BoardHabits = ({ habitModal, setHabitModal }) => {
  const { userHabits } = useHabits();
  const userGroups = JSON.parse(localStorage.getItem("@financeHabits:userGroups")); //***** */

  return (
    <Container>
      <SubHeader type="Group">
        Meus Hábitos <PlusButton />
      </SubHeader>
      <CreateHabit habitModal={habitModal} setHabitModal={setHabitModal} />
      {/* {userHabits.map((habit, index) => (
        <CardHabitCard
          key={index}
          title={habit.title}
          category={habit.category}
          difficulty={habit.difficulty}
          frequency={habit.frequency}
          id={habit.id}
        />
      ))} */}


      {/* início */}
      {userGroups.map((habit, index) => (
        <CardGroup
          key={index}
          name={habit.name}
          category={habit.category}
          description={habit.description}
          id={habit.id}
        />
      ))}                   
      {/* final */}

      
    </Container>
  );
};
export default BoardHabits;
