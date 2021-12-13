import CardHabitCard from "../../components/CardHabit";
import CreateHabit from "../../components/CreateHabit";
import Delete from "../Delete";
import { Container, PlusButton } from "./style";
import { useHabits } from "../../providers/Habit";
import SubHeader from "../SubHeader";

const BoardHabits = ({ habitModal, setHabitModal, deleteHabitModal, SetDeleteHabitModal }) => {
  
  const { userHabits } = useHabits();

  return (
    <Container>
      <SubHeader type="Group">
        Meus Hábitos <PlusButton />
      </SubHeader>
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
