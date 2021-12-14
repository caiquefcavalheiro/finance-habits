import { useGroups } from "../../providers/Groups";
import { useGoals } from "../../providers/Goals";
import { useActivies } from "../../providers/Activities";
import { TextField } from "@mui/material";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import Button from "../Button";
import RadioInput from "../RadioInput";
import { useForm } from "react-hook-form";
import { useHabits } from "../../providers/Habit";
import {
  FormActivities,
  FormGoals,
  FormGroup,
  FormHabit,
  IconX,
  ReactModalStyled,
} from "./style";

function Edit({ type, data }) {
  const { updateGroup } = useGroups();
  const { toUpdateGoals } = useGoals();
  const { toUpdateActivies } = useActivies();
  const { toUpdateHabit } = useHabits();

  const { id } = data;

  const [openModal, setopenModal] = useState(false);

  const { register, handleSubmit } = useForm();

  function formHabit(data) {
    const { titleHabit } = data;
    if (titleHabit !== "") {
      toUpdateHabit(data);
    } else {
      //toast não pode ter o titulo o vazio
    }
  }

  function formGroup(data) {
    const { nameGroup, descriptionGroup } = data;
    if (nameGroup !== "" && descriptionGroup !== "") {
      updateGroup(data);
    }
  }

  function formGoal(data) {
    const { titleGoal } = data;
    if (titleGoal !== "") {
      toUpdateGoals(data);
    }
  }

  function formActivity(data) {
    const { nameActivity } = data;
    if (nameActivity !== "") {
      toUpdateActivies(data);
    }
  }

  const [habitTitle, setHabitTitle] = useState(data.title);
  const [groupName, setGroupName] = useState(data.name);
  const [groupDescription, setGroupDescription] = useState(data.description);
  const [goalTitle, setGoalTitle] = useState(data.title);
  const [activitiesName, setActivitiesName] = useState(data.name);

  return (
    <>
      <FiEdit onClick={() => setopenModal(true)} />
      <ReactModalStyled
        isOpen={openModal}
        onRequestClose={() => setopenModal(false)}
        ariaHideApp={false}
      >
        <FormHabit type={type} onSubmit={handleSubmit(formHabit)}>
          <IconX onClick={() => setopenModal(false)} />
          <input
            style={{ display: "none" }}
            value={id}
            {...register("id")}
          ></input>
          <TextField
            label="title"
            variant="outlined"
            margin="normal"
            {...register("titleHabit")}
            onChange={(event) => setHabitTitle(event.target.value)}
            value={habitTitle}
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
        </FormHabit>
        <FormGroup onSubmit={(event) => formGroup(event)}>
          <IconX onClick={() => setopenModal(false)} />
          <TextField
            name="nameGroup"
            value={groupName}
            onChange={(event) => setGroupName(event.target.value)}
            label="Nome"
            variant="outlined"
            margin="normal"
            {...register("nameGroup")}
          />
          <TextField
            name="descriptionGroup"
            value={groupDescription}
            onChange={(event) => setGroupDescription(event.target.value)}
            label="Descrição"
            variant="outlined"
            margin="normal"
            minRows={4}
            {...register("descriptionGroup")}
          />
          <Button type="submit">Editar</Button>
        </FormGroup>
        <FormGoals type={type} onSubmit={(event) => formGoal(event)}>
          <IconX onClick={() => setopenModal(false)} />
          <TextField
            name="titleGoal"
            onChange={(event) => setGoalTitle(event.target.value)}
            value={goalTitle}
            label="Nome"
            variant="outlined"
            margin="normal"
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
        </FormGoals>
        <FormActivities type={type} onSubmit={(event) => formActivity(event)}>
          <IconX onClick={() => setopenModal(false)} />
          <TextField
            name="nameActivity"
            onChange={(event) => setActivitiesName(event.target.value)}
            value={activitiesName}
            label="Nome"
            variant="outlined"
            margin="normal"
            {...register("nameActivity")}
          />
          <Button type="submit">Editar</Button>
        </FormActivities>
      </ReactModalStyled>
    </>
  );
}

export default Edit;
