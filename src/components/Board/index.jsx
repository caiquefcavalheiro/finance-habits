import CardHabitCard from "../CardHabit";
import CreateHabit from "../CreateHabit";
import { Container, BoxDashboard, ContainerColumn } from "./style";
import CardGroup from "../CardGroup";
import { useHabits } from "../../providers/Habit";
import SubHeader from "../SubHeader";
import { DisplayContainer } from "../DisplayContainer";
import { useGroups } from "../../providers/Groups";
import { useEffect, useState } from "react";
import CreateGroup from "../CreateGroup";

const Board = () => {
  const { userHabits, toGetHabits } = useHabits();
  const { userGroups, allGroupsUser } = useGroups();

  const [habitModal, setHabitModal] = useState(false);
  const [createGroupModal, setCreateGroupModal] = useState(false);

  const openHabitModal = () => {
    setHabitModal(true);
  };

  const openGroupModal = () => {
    setCreateGroupModal(true);
  };

  useEffect(() => {
    allGroupsUser();
    toGetHabits();
  }, []);

  return (
    <BoxDashboard>
      <DisplayContainer type="row">
        <SubHeader type="Habit" onClick={openHabitModal} />
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
        <SubHeader type="Group" onClick={openGroupModal} />
        <CreateGroup
          createGroupModal={createGroupModal}
          setCreateGroupModal={setCreateGroupModal}
        />
        <ContainerColumn>
          {userGroups.map((group, index) => (
            <CardGroup key={index} group={group} />
          ))}
        </ContainerColumn>
      </DisplayContainer>
    </BoxDashboard>
  );
};
export default Board;
