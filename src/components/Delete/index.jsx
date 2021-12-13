import { useContext, useState } from "react"
import { HabitsContext } from "../../providers/Habits"
import { CloseModalButton } from "../CloseModalButton"
import Button from "../Button"
import { HabitDeleteModal, CloseModalContent } from "./styles"
import api from "../../services/api"

const Delete = ({deleteHabitModal, SetDeleteHabitModal, habit }) => {

    console.log(habit)

    const [useToken] = useState(
        localStorage.getItem("@financeHabits:token") || []
      );
    
      const [userHabits, setUserHabits] = useState(
        JSON.parse(localStorage.getItem("@financeHabits:userHabits")) || []
      );

    const {toDeleteHabit} = useContext(HabitsContext)


    const handleDeleteHabit = (data) => {
        let id = 450
        
        const newHabits = userHabits.find((habit) => habit.id === id);
    
        // console.log(newHabits);
        console.log(data)
    
        api
          .put(
            `/habits/${id}`,
            { completed: true },
            {
              headers: {
                Authorization: `Bearer ${useToken}`,
              },
            }
          )
          .then((response) => setUserHabits(newHabits));
      }

      console.log(habit)
      
    return (
        <>
            <HabitDeleteModal isOpen={deleteHabitModal} ariaHideApp={false}>
                <CloseModalButton onClick={() => SetDeleteHabitModal(false)} />
                <CloseModalContent>
                <div>Deseja excluir o hábito?</div>
                <Button onClick={() => handleDeleteHabit({...habit})} >{"Excluir hábito"}</Button>
                </CloseModalContent>
            </HabitDeleteModal>
        </>
    )
}
export default Delete