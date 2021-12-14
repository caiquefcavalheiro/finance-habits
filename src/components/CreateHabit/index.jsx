import { TextField } from "@mui/material";
import RadioInput from "../RadioInput";
import { HabitModal, Container, Content } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import { CloseModalButton } from "../CloseModalButton";
import { useHabits } from "../../providers/Habit";

const CreateHabit = ({ habitModal, setHabitModal }) => {
  const { toCreateHabit } = useHabits();

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    frequency: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreateHabit = ({ title, category, difficulty, frequency }) => {
    const dados = {
      title,
      category,
      difficulty,
      frequency,
      how_much_achieved: 0,
      user: Number(localStorage.getItem("@financeHabits:user_id")),
    };
    toCreateHabit(dados);
    closeModal();
  };

  const closeModal = () => {
    setHabitModal(false);
  };
  return (
    <>
      <HabitModal isOpen={habitModal} ariaHideApp={false}>
        <CloseModalButton onClick={closeModal} />
        <form onSubmit={handleSubmit(handleCreateHabit)}>
          <TextField
            {...register("title")}
            error={!!errors.title?.message}
            helperText={errors.title?.message}
            label="Título"
            variant="filled"
            margin="normal"
            fullWidth
          />
          <Container>
            <p>Dificuldade</p>
            <Content>
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
            </Content>

            <p>Categoria</p>
            <Content>
              <RadioInput
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

            <p>Frequência</p>
            <Content>
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
                label="Semanal"
                type="radio"
                id="08"
              />
              <RadioInput
                register={register}
                name="frequency"
                value="Mensalmente"
                label="Mensal"
                type="radio"
                id="09"
              />
            </Content>
            <Button type="submit">Adicionar hábito</Button>
          </Container>
        </form>
      </HabitModal>
    </>
  );
};

export default CreateHabit;
