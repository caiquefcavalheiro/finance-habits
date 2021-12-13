import CardHabitCard from "../../components/CardHabit";
import CreateHabit from "../../components/CreateHabit";
import { Container, Header, PlusButton } from "./style";
import { useHabits } from "../../providers/Habit";

const BoardHabits = ({ habitModal, setHabitModal }) => {
  const { userHabits } = useHabits();

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
        />
      ))}
    </Container>
  );
};
export default BoardHabits;
