import CardHabitCard from "../../components/CardHabit";
import CreateHabit from "../../components/CreateHabit";
import { Container, PlusButton } from "./style";
import CardGroup from "../CardGroup"; // 8888888888888888888888
import { useHabits } from "../../providers/Habit";
import SubHeader from "../SubHeader";
import { DisplayContainer } from "../DisplayContainer";

const BoardHabits = ({ habitModal, setHabitModal }) => {
  const { userHabits } = useHabits();
  const userGroups = JSON.parse(
    localStorage.getItem("@financeHabits:userGroups")
  ); //***** */

  return (
    <>
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
            id={habit.id}
          />
        ))}
      </Container>
    </DisplayContainer>
      {/* início */}
    <DisplayContainer type='column'>
    <SubHeader type="Group">
         <PlusButton />
      </SubHeader>
      {userGroups.map((habit, index) => (
        <CardGroup
          key={index}
          name={habit.name}
          category={habit.category}
          description={habit.description}
          id={habit.id}
        />
      ))}
    </DisplayContainer>
      
      {/* final */}
    </>
  );
};
export default BoardHabits;
