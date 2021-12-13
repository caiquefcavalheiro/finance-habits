import CardHabitCard from "../../components/CardHabit";
import CreateHabit from "../../components/CreateHabit";
import { Container, Header, PlusButton } from "./style";
import { useSignin } from "../../providers/SignIn";
import { useHistory } from "react-router-dom";
import { useHabitId } from "../../providers/HabitId";
import CardGroup from "../CardGroup";

const BoardHabits = ({ habitModal, setHabitModal }) => {
  const { userHabits } = useSignin();
  const userGroups = JSON.parse(localStorage.getItem("@financeHabits:userGroups")); //***** */
  return (
    <Container>
      <Header>
        Meus Hábitos <PlusButton />
      </Header>
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
