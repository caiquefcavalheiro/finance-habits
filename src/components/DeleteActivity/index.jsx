import { useActivies } from "../../providers/Activities"
import Button from "../Button"
import { CloseModalButton } from "../CloseModalButton"
import { DeleteModal } from "./styles"

const DeleteActivity = ({ deleteActModal, setDeleteActModal, data }) => {
    
    const { toDeleteActivities } = useActivies()

    const handleDelete = (data) => {
        toDeleteActivities(data)
        closeModal()
    }

    const closeModal = () => {
        setDeleteActModal(false)
    }
    return (
        <DeleteModal
            isOpen={deleteActModal}
            ariaHideApp={false}
        >
            <CloseModalButton onClick={closeModal} >
                <section>
                    <div>Deseja deletar a atividade?</div>
                    <Button onClick={() => handleDelete(data)} >Deletar</Button>
                </section>
            </CloseModalButton>
        </DeleteModal>
    )
}
export default DeleteActivity