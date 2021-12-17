import { useActivies } from "../../providers/Activities"
import { DeleteModal } from "./styles"
import Button from "../Button"
import { CloseModalButton } from "../CloseModalButton"

const DeleteActivity = ({deleteActivityModal, setDeleteActivityModal, data}) => {
    const { toDeleteActivities } = useActivies()

    const handleDelete = (data) => {
        toDeleteActivities(data)
        closeModal()
    }

    const closeModal = () => {
        setDeleteActivityModal(false)
    }
    
    return (
        <DeleteModal
        isOpen={deleteActivityModal}
        ariaHideApp={false}
        >
            <CloseModalButton onClick={closeModal}/>
            <section>
            <div>Deseja deletar a atividade?</div>
            <Button onClick={() => handleDelete(data)} >Deletar</Button>
            </section>
        </DeleteModal>
    )
}

export default DeleteActivity