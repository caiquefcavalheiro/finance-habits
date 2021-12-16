import { PlusButton } from "./style";
import { useState } from "react";
import CreateHabit from "../CreateHabit";
import CreateGroup from "../CreateGroup";
import { CreateGouls } from "../CreateGouls";

export const CreateButton = ({ type }) => {
  const [habitModal, setHabitModal] = useState(false);
  const [createGroupModal, setCreateGroupModal] = useState(false);
  const [goalModal, setGoalModal] = useState(false);

  const openHabitModal = () => {
    setHabitModal(true);
  };

  const openGroupModal = () => {
    setCreateGroupModal(true);
  };

  const openGoalModal = () => {
    setGoalModal(true);
  };

  return (
    <>
      {type === "Habit" ? (
        <PlusButton onClick={openHabitModal} />
      ) : type === "Group" ? (
        <PlusButton onClick={openGroupModal} />
      ) : type === "Goals" ? (
        <PlusButton onClick={openGoalModal} />
      ) : type === "Activities" ? (
        <PlusButton onClick={() => console.log("Activities")} />
      ) : (
        <></>
      )}
      <CreateHabit habitModal={habitModal} setHabitModal={setHabitModal} />
      <CreateGroup
        createGroupModal={createGroupModal}
        setCreateGroupModal={setCreateGroupModal}
      />
      <CreateGouls goalModal={goalModal} setGoalModal={setGoalModal} />
    </>
  );
};
