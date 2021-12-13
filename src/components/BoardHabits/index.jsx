import CardHabitCard from "../../components/CardHabit";
import CreateHabit from "../../components/CreateHabit";
import { Container, Header, PlusButton } from "./style";
import { useSignin } from "../../providers/SignIn";
import { useHistory } from "react-router-dom";
import { useHabitId } from "../../providers/HabitId";

const BoardHabits = ({ habitModal, setHabitModal }) => {
  const { userHabits } = useSignin();
  const history = useHistory();
  const {setCurrentId} = useHabitId();

  const selectHabit = (id) => {
    setCurrentId(id)
    history.push(`/habit`)
  }

  return (
    <Container>
      <Header>
        Meus Hábitos <PlusButton />
      </Header>
      <CreateHabit habitModal={habitModal} setHabitModal={setHabitModal} />
      {userHabits.map((habit, index) => (
        <CardHabitCard
          key={index}
          title={habit.title}
          category={habit.category}
          difficulty={habit.difficulty}
          frequency={habit.frequency}
          id={habit.id}
        />
      ))}
    </Container>
  );
};
export default BoardHabits;
