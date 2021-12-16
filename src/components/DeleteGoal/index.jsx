import { useGoals } from "../../providers/Goals"
import { DeleteModal } from "./styles"
import Button from "../Button"
import { CloseModalButton } from "../CloseModalButton"

const DeleteGoal = ({deleteGoalModal, setDeleteGoalModal, data}) => {
    
    const { toDeleteGoals } = useGoals()

    const handleDelete = (data) => {
        toDeleteGoals(data)
        closeModal()
    }

    const closeModal = () => {
        setDeleteGoalModal(false)
    }
    return (
        <DeleteModal
        isOpen={deleteGoalModal}
        ariaHideApp={false}>
        <CloseModalButton onClick={closeModal} />
            <section>
            <div>Deseja deletar o objetivo ?</div>
            <Button onClick={() => handleDelete(data)} >Deletar</Button>
            </section>
        </DeleteModal>
    )
}

export default DeleteGoal