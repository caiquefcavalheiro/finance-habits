import { PlusButton } from "./style";
import CreateHabit from "../CreateHabit";
import { useState } from "react";
import CreateGroup from "../CreateGroup";

export const EditButton = ({ type }) => {
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
      ) : (
        <PlusButton onClick={openGroupModal} />
      )}
      <CreateHabit habitModal={habitModal} setHabitModal={setHabitModal} />
      <CreateGroup
        createGroupModal={createGroupModal}
        setCreateGroupModal={setCreateGroupModal}
      />
    </>
  );
};
