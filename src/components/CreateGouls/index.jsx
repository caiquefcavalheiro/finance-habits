import { TextField } from "@mui/material";
import RadioInput from "../RadioInput";
import { GoulModal, Container, Content } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import { CloseModalButton } from "../CloseModalButton";
import { useGoals } from "../../providers/Goals";
import { useParams } from "react-router";

export const CreateGouls = ({ goalModal, setGoalModal }) => {
  const { createGoals } = useGoals();
  const params = useParams();

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
  });

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreateGoul = ({ title, difficulty }) => {
    const dados = {
      title,
      difficulty,
      how_much_achieved: 0,
      achieved: false,
      group: params.id,
    };
    createGoals(dados);
    closeModal();
    reset();
  };

  const closeModal = () => {
    setGoalModal(false);
  };
  return (
    <>
      <GoulModal isOpen={goalModal} ariaHideApp={false}>
        <CloseModalButton onClick={closeModal} />
        <form onSubmit={handleSubmit(handleCreateGoul)}>
          <TextField
            {...register("title")}
            error={!!errors.title?.message}
            helperText={errors.title?.message}
            label="Título"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <Container>
            <p>Dificuldade</p>
            <Content>
              <RadioInput
                defaultChecked
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
            <Button type="submit">Criar meta</Button>
          </Container>
        </form>
      </GoulModal>
    </>
  );
};
