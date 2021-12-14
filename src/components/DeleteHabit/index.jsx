import { useHabits } from "../../providers/Habit"
import { DeleteModal } from "./styles"
import Button from "../Button"
import { CloseModalButton } from "../CloseModalButton"
const DeleteHabit = ({deleteModal, setDeleteModal}) => {

    const { toDeleteHabit } = useHabits()

    const handleDelete = ({ title, category, difficulty, frequency }) => {
        const dados = {
            title,
            category,
            difficulty,
            frequency,
            how_much_achieved: 0,
            user: Number(localStorage.getItem("@financeHabits:user_id")),
          };
        toDeleteHabit(dados)
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
            <div>Deseja deletar o hábito?</div>
            <Button onClick={handleDelete} >Deletar</Button>
        </DeleteModal>
    )
}
export default DeleteHabit