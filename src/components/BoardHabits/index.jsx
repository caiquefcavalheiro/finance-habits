import CardHabitCard from "../../components/CardHabit";
import CreateHabit from "../../components/CreateHabit";
import { PlusButton, Container } from "./style";
import { useSignin } from "../../providers/SignIn";
import SubHeader from "../SubHeader";
import { DisplayContainer } from "../DisplayContainer";

const BoardHabits = ({ habitModal, setHabitModal }) => {
  const { userHabits } = useSignin();

  return (
    <DisplayContainer type="row">
      <SubHeader type="Habit">
        Meus Hábitos <PlusButton />
      </SubHeader>
      <CreateHabit habitModal={habitModal} setHabitModal={setHabitModal} />
      <Container>
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
    </DisplayContainer>
  );
};
export default BoardHabits;
