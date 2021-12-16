import { TextField } from "@mui/material";
import { ActivitiesModal } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import { CloseModalButton } from "../CloseModalButton";
import { useActivies } from "../../providers/Activities";
import { useParams } from "react-router";

export const CreateActivities = ({ activitiesModal, setActivitiesModal }) => {
  const { toCreateActivities } = useActivies();
  const params = useParams();

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
  });

  const date = new Date().toISOString();

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreateActivities = ({ title }) => {
    const dados = {
      title,
      realization_time: date,
      group: Number(params.id),
    };
    toCreateActivities(dados);
    closeModal();
    reset();
  };

  const closeModal = () => {
    setActivitiesModal(false);
  };
  return (
    <>
      <ActivitiesModal isOpen={activitiesModal} ariaHideApp={false}>
        <CloseModalButton onClick={closeModal} />
        <form onSubmit={handleSubmit(handleCreateActivities)}>
          <TextField
            {...register("title")}
            error={!!errors.title?.message}
            helperText={errors.title?.message}
            label="Título"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <Button type="submit">Criar meta</Button>
        </form>
      </ActivitiesModal>
    </>
  );
};
