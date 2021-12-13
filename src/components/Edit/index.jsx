import { useGroups } from "../../providers/Groups";
import { useGoals } from "../../providers/Goals";
import { useActivies } from "../../providers/Activities";
import { TextField } from "@mui/material";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import ReactModal from "react-modal";
import Button from "../Button";
import RadioInput from "../RadioInput";
import { useForm } from "react-hook-form";
import "./style";

function Edit({ type, data }) {
  const { editGroup } = useGroups();
  const { editGoals } = useGoals();
  const { editActivities } = useActivies();
  // const { editHabit } = useHabits();

  const { id } = data;

  const [openModal, setopenModal] = useState(false);

  const { register, handleSubmit } = useForm();

  function formHabit(data) {
    //não poder passar valores vazios
    const { titleHabit } = data;
    if (titleHabit !== "") {
      editHabit(data);
    }
    console.log(data);
  }

  function formGroup(data) {
    const { nameGroup, descriptionGroup } = data;
    //não poder passar valores vazios
    if (nameGroup !== "" && descriptionGroup !== "") {
      editGroup(data);
    }
  }

  function formGoal(data) {
    //não poder passar valores vazios
    console.log(data);
  }

  function formActivity(data) {
    //não poder passar valores vazios
    console.log(data);
  }

  return (
    <>
      <FiEdit onClick={() => setopenModal(true)} />
      <ReactModal
        isOpen={openModal}
        onRequestClose={() => setopenModal(false)}
        ariaHideApp={false}
      >
        <form type={type} onSubmit={handleSubmit(formHabit)}>
          <input
            style={{ display: "none" }}
            value={id}
            {...register("id")}
          ></input>
          <TextField
            label="title"
            variant="outlined"
            margin="normal"
            fullWidth
            {...register("titleHabit")}
            //value={data.title}
            value="data"
          />
          <h3>Dificuldade</h3>
          <div>
            <RadioInput
              defaultChecked
              name="difficultyHabit"
              label="Fácil"
              value="Fácil"
              type="radio"
              id="01"
              register={register}
            />

            <RadioInput
              name="difficultyHabit"
              value="Normal"
              label="Normal"
              type="radio"
              id="02"
              register={register}
            />
            <RadioInput
              name="difficultyHabit"
              value="Difícil"
              label="Difícil"
              type="radio"
              id="03"
              register={register}
            />
          </div>
          <h3>Frequência</h3>
          <div>
            <RadioInput
              defaultChecked
              name="frequencyHabit"
              label="Diária"
              value="Diária"
              type="radio"
              id="04"
              register={register}
            />
            <RadioInput
              name="frequencyHabit"
              value="Semanal"
              label="Semanal"
              type="radio"
              id="05"
              register={register}
            />
            <RadioInput
              name="frequencyHabit"
              value="Mensal"
              label="Mensal"
              type="radio"
              id="06"
              register={register}
            />
          </div>
          <Button type="submit">Editar</Button>
        </form>
        <form onSubmit={(event) => formGroup(event)}>
          <TextField
            name="nameGroup"
            value="Nome"
            label="Nome"
            variant="outlined"
            margin="normal"
            fullWidth
            {...register("nameGroup")}
          />
          <TextField
            name="descriptionGroup"
            value="Descrição"
            label="Descrição"
            variant="outlined"
            margin="normal"
            fullWidth
            minRows={4}
            {...register("descriptionGroup")}
          />
          <Button type="submit">Editar</Button>
        </form>
        <form onSubmit={(event) => formGoal(event)}>
          <TextField
            name="titleGoal"
            value="Nome"
            label="Nome"
            variant="outlined"
            margin="normal"
            fullWidth
            {...register("titleGoal")}
          />
          <h3>Dificuldade</h3>
          <div>
            <RadioInput
              defaultChecked
              name="difficultyGoal"
              label="Fácil"
              value="Fácil"
              type="radio"
              id="07"
              register={register}
            />
            <RadioInput
              name="difficultyGoal"
              value="Normal"
              label="Normal"
              type="radio"
              id="08"
              register={register}
            />
            <RadioInput
              name="difficultyGoal"
              value="Difícil"
              label="Difícil"
              type="radio"
              id="09"
              register={register}
            />
          </div>
          <Button type="submit">Editar</Button>
        </form>
        <form onSubmit={(event) => formActivity(event)}>
          <TextField
            name="nameActivity"
            value="Nome"
            label="Nome"
            variant="outlined"
            margin="normal"
            fullWidth
            {...register("nameActivity")}
          />
          <Button type="submit">Editar</Button>
        </form>
      </ReactModal>
    </>
  );
}

export default Edit;
