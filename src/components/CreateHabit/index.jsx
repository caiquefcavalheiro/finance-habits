import { useContext } from "react"
import { CreateHabitContext } from "../../providers/CreateHabit"
import { TextField } from "@mui/material"
import RadioInput from "../RadioInput"
import { HabitModal } from "./styles"
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import Button from "../Button"

const CreateHabit = () => {

    const { toCreateHabit } = useContext(CreateHabitContext)

    const schema = yup.object().shape({
        title: yup.string().required("Campo obrigatório"),
        category: yup.string().required("Campo obrigatório"),
        difficulty: yup.string().required("Campo obrigatório"),
        frequency: yup.string().required("Campo obrigatório"),
    })

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(schema),
    })

    const handleCreateHabit = ({ title, category, difficulty, frequency }) => {
        const dados = {
            title,
            category,
            difficulty,
            frequency,
            how_much_achieved: 0, 
            user: Number(localStorage.getItem('@financeHabits:user_id'))
        } 
        toCreateHabit(dados)
        console.log(dados)
    }
    return (
        <>
            <HabitModal
                isOpen={true}
                ariaHideApp={false}
            >
            <form onSubmit={handleSubmit(handleCreateHabit)} >
                <TextField
                    {...register("title")}
                    error={!!errors.title?.message}
                    helperText={errors.title?.message}
                    label="Título" 
                    variant="filled" 
                    margin="normal"
                    fullWidth
                />
                <p>Dificuldade</p>
                <RadioInput
                    register={register}
                    name="difficulty"
                    label="Fácil"
                    value="Fácil"
                    type="radio"
                    id="01"
                />
                <RadioInput
                    register={register}
                    name="difficulty"
                    value="Normal"
                    label="Normal"
                    type="radio"
                    id="02"
                />
                <RadioInput
                    register={register}
                    name="difficulty"
                    value="Difícil"
                    label="Difícil"
                    type="radio"
                    id="03"
                />
                
                <p>Categoria</p>
                <RadioInput
                    register={register}
                    name="category"
                    value="Poupança"
                    label="Poupança"
                    type="radio"
                    id="04"
                />
                <RadioInput
                    register={register}
                    name="category"
                    value="Investimento"
                    label="Investimento"
                    type="radio"
                    id="05"
                />
                <RadioInput
                    register={register}
                    name="category"
                    value="Educação"
                    label="Educação"
                    type="radio"
                    id="06"
                />

                <p>Frequência</p>
                <RadioInput
                    register={register}
                    name="frequency"
                    value="Diária"
                    label="Diária"
                    type="radio"
                    id="07"
                />
                <RadioInput
                    register={register}
                    name="frequency"
                    value="Semanalmente"
                    label="Semanalmente"
                    type="radio"
                    id="08"
                />
                <RadioInput
                    register={register}
                    name="frequency"
                    value="Mensalmente"
                    label="Mensalmente"
                    type="radio"
                    id="09"
                />
                <Button type="submit" />
            </form>
            </HabitModal>
        </>
    )
}

export default CreateHabit