import { useHabits } from "../../providers/Habit"
import { DeleteModal } from "./styles"
import Button from "../Button"
import { CloseModalButton } from "../CloseModalButton"

const DeleteHabit = ({deleteModal, setDeleteModal, data}) => {

    const { toDeleteHabit } = useHabits()

    const handleDelete = (data) => {
        toDeleteHabit(data)
        closeModal()
    }

    const closeModal = () => {
        setDeleteModal(false)
    }

    return (
        <DeleteModal
        isOpen={deleteModal}
        ariaHideApp={false}>
        <CloseModalButton onClick={closeModal} />
            <section>
            <div>Deseja deletar o hábito?</div>
            <Button onClick={() => handleDelete(data)} >Deletar</Button>
            </section>
        </DeleteModal>
    )
}
export default DeleteHabit