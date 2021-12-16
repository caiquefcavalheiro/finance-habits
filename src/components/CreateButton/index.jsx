import { PlusButton } from "./style";
import CreateHabit from "../CreateHabit";
import { useState } from "react";
import CreateGroup from "../CreateGroup";

export const CreateButton = ({ type }) => {
  const [habitModal, setHabitModal] = useState(false);
  const [createGroupModal, setCreateGroupModal] = useState(false);

  const openHabitModal = () => {
    setHabitModal(true);
  };

  const openGroupModal = () => {
    setCreateGroupModal(true);
  };

  return (
    <>
      {type === "Habit" ? (
        <PlusButton onClick={openHabitModal} />
      ) : type === "Group" ? (
        <PlusButton onClick={openGroupModal} />
      ) : type === "Goals" ? (
        <PlusButton onClick={() => console.log("Goals")} />
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
    </>
  );
};
