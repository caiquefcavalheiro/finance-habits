import { TextField } from "@mui/material"
import { CloseModalButton } from "../CloseModalButton"
import { GroupModal } from "./styles"
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGroups } from "../../providers/Groups";
import RadioInput from "../RadioInput";
import { Container, Content } from "../CreateHabit/styles";
import Button from "../Button"

const CreateGroup = ({createGroupModal, setCreateGroupModal}) => {

    const { createGroups } = useGroups()

    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        description: yup.string().required("Campo obrigatório"),
        category: yup.string().required("Campo obrigatório"),
    })

    const {
        reset,
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(schema),
    })

    const handleCreateGroup = ({ name, description, category }) => {
        const dados = {
            name,
            description,
            category,
        }
        createGroups(dados)
        closeModal()
        reset()
    }
    
    const closeModal = () => {
        setCreateGroupModal(false)
    }
    
    return (
        <GroupModal isOpen={createGroupModal} ariaHideApp={false} >
            <CloseModalButton onClick={closeModal} />
            <form onSubmit={handleSubmit(handleCreateGroup)} >
            <TextField
                {...register("name")}
                error={!!errors.name?.message}
                helperText={errors.name?.message}
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                {...register("description")}
                error={!!errors.description?.message}
                helperText={errors.description?.message}
                label="Descrição"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <Container>
            <p>Categoria</p>
            <Content>
              <RadioInput
                defaultChecked
                register={register}
                name="category"
                value="Poupança"
                label="Poupe"
                type="radio"
                id="04"
              />
              <RadioInput
                register={register}
                name="category"
                value="Investimento"
                label="Invista"
                type="radio"
                id="05"
              />
              <RadioInput
                register={register}
                name="category"
                value="Educação"
                label="Estude"
                type="radio"
                id="06"
              />
            </Content>
            <Button type="submit">Adicionar grupo</Button>
            </Container>
            </form>
        </GroupModal>
    )
}
export default CreateGroup