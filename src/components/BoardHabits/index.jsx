import CardHabitCard from "../../components/CardHabit";
import CreateHabit from "../../components/CreateHabit";
import { Container, PlusButton, BoxDashboard, ContainerColumn } from "./style";
import CardGroup from "../CardGroup";
import { useHabits } from "../../providers/Habit";
import SubHeader from "../SubHeader";
import { DisplayContainer } from "../DisplayContainer";

import Delete from "../DeleteHabit";

const BoardHabits = ({
  habitModal,
  setHabitModal,
  deleteModal,
  setDeleteModal,
}) => {
  const { userHabits } = useHabits();
  const userGroups = JSON.parse(
    localStorage.getItem("@financeHabits:userGroups")
  );

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
        <ContainerColumn>
          {userGroups.map((habit, index) => (
            <CardGroup
              key={index}
              name={habit.name}
              category={habit.category}
              description={habit.description}
              id={habit.id}
            />
          ))}
        </ContainerColumn>
      </DisplayContainer>
    </BoxDashboard>
  );
};
export default BoardHabits;
