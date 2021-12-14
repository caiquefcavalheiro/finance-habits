import CardHabitCard from "../../components/CardHabit";
import CreateHabit from "../../components/CreateHabit";
import { Container, PlusButton } from "./style";
import { useHabits } from "../../providers/Habit";
import SubHeader from "../SubHeader";
import DeleteHabit from "../DeleteHabit";

const BoardHabits = ({ habitModal, setHabitModal, deleteModal, setDeleteModal }) => {
  
  const { userHabits } = useHabits();

  return (
    <Container>
      <SubHeader type="Habit">
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
        
        <DeleteHabit deleteModal={deleteModal} setDeleteModal={setDeleteModal} />
        </>
      ))}
    </Container>
  );
};
export default BoardHabits;
