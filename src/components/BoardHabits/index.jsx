import CardHabitCard from "../../components/CardHabit";
import CreateHabit from "../../components/CreateHabit";
<<<<<<< HEAD
import { Container, PlusButton, BoxDashboard } from "./style";
import CardGroup from "../CardGroup";
=======
import { Container, PlusButton, DashboardBox } from "./style";
>>>>>>> 00b1a360e1143414e5aefcb3a8f33c5c0ea2855d
import { useHabits } from "../../providers/Habit";
import SubHeader from "../SubHeader";
import {DisplayContainer} from "../DisplayContainer"
import CardGroup from "../CardGroup";
import Delete from "../DeleteHabit"

const BoardHabits = ({ habitModal, setHabitModal, deleteModal, setDeleteModal }) => {
  
  const { userHabits } = useHabits();
  const userGroups = JSON.parse(
    localStorage.getItem("@financeHabits:userGroups")
  )

  return (
<<<<<<< HEAD
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
        {userGroups.map((habit, index) => (
          <CardGroup
=======
    <>
    <DisplayContainer type="row">
      <SubHeader type="Habit">
        Meus Hábitos <PlusButton />
      </SubHeader>
      <CreateHabit habitModal={habitModal} setHabitModal={setHabitModal} />
      <Container>
        {userHabits.map((habit, index) => (
          <>
          <CardHabitCard
>>>>>>> 00b1a360e1143414e5aefcb3a8f33c5c0ea2855d
            key={index}
            name={habit.name}
            category={habit.category}
<<<<<<< HEAD
            description={habit.description}
            id={habit.id}
          />
=======
            difficulty={habit.difficulty}
            frequency={habit.frequency}
            id={habit.id} 
            />
            <Delete deleteModal={deleteModal} setDeleteModal={setDeleteModal} data={habit} />
            </>
>>>>>>> 00b1a360e1143414e5aefcb3a8f33c5c0ea2855d
        ))}
      </DisplayContainer>
    </BoxDashboard>
  );
};
export default BoardHabits;
