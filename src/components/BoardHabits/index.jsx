import CardHabitCard from "../../components/CardHabit";
import CreateHabit from "../../components/CreateHabit";
import Delete from "../Delete";
import { Container, Header, PlusButton } from "./style";
import { useSignin } from "../../providers/SignIn";

const BoardHabits = ({ habitModal, setHabitModal, deleteHabitModal, SetDeleteHabitModal }) => {
  
  const { userHabits } = useSignin()

  return (
    <Container>
      <Header>
        Meus Hábitos <PlusButton />
      </Header>
      <CreateHabit habitModal={habitModal} setHabitModal={setHabitModal} />
      {userHabits.map((habit, index) => (
        <>
          <CardHabitCard
          key={index}
          title={habit.title}
          category={habit.category}
          difficulty={habit.difficulty}
          frequency={habit.frequency} />
          <Delete habit={habit} deleteHabitModal={deleteHabitModal} SetDeleteHabitModal={SetDeleteHabitModal} />
          </>
      ))}
    </Container>
  );
};
export default BoardHabits;
