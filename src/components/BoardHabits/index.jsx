import CardHabitCard from "../../components/CardHabit";
import CreateHabit from "../../components/CreateHabit";
import { Container, PlusButton, BoxDashboard } from "./style";
import CardGroup from "../CardGroup";
import { useHabits } from "../../providers/Habit";
import SubHeader from "../SubHeader";
import { DisplayContainer } from "../DisplayContainer";
import { useGroups } from "../../providers/Groups";


const BoardHabits = ({
  habitModal,
  setHabitModal,
}) => {
  const { userHabits } = useHabits();
  const {userGroups} = useGroups()

  return (
    <BoxDashboard>
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

      <DisplayContainer type="column">
        <SubHeader type="Group">
          <PlusButton />
        </SubHeader>
        {userGroups.map((group, index) => (
          <CardGroup
            key={index}
            group={group}
          />
        ))}
      </DisplayContainer>
    </BoxDashboard>
  );
};
export default BoardHabits;
