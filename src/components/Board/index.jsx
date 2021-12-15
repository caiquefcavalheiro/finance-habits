import CardHabitCard from "../CardHabit";
import CreateHabit from "../CreateHabit";
import { Container, BoxDashboard, ContainerColumn } from "./style";
import CardGroup from "../CardGroup";
import { useHabits } from "../../providers/Habit";
import SubHeader from "../SubHeader";
import { DisplayContainer } from "../DisplayContainer";
import { useGroups } from "../../providers/Groups";
import { useState, useEffect } from "react";
import CreateGroup from "../CreateGroup";

const Board = () => {

  const { allGroups } = useGroups();
  //const {toGetHabits} = useHabits()
  //const {toGetGroups} = useGroups()

  useEffect(() => {
    allGroups();
  //  toGetHabits()
  //  toGetGroups()
  }, []);




  const { userHabits } = useHabits();
  const { userGroups } = useGroups();

  const [habitModal, setHabitModal] = useState(false)
  const [createGroupModal, setCreateGroupModal] = useState(false)

  const openHabitModal = () => {
    setHabitModal(true)
}

const openGroupModal = () => {
    setCreateGroupModal(true)
}

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
        <CreateGroup createGroupModal={createGroupModal} setCreateGroupModal={setCreateGroupModal} />
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
