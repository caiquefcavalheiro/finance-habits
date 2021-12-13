import CardHabitCard from "../../components/CardHabit";
import CreateHabit from "../../components/CreateHabit";
import { Container, Header, PlusButton } from "./style";
import { useSignin } from "../../providers/SignIn";
import SubHeader from "../SubHeader";

const BoardHabits = ({ habitModal, setHabitModal }) => {
  const { userHabits } = useSignin();

  return (
    <Container>
      <SubHeader type="Group">
        Meus Hábitos <PlusButton />
      </SubHeader>
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
