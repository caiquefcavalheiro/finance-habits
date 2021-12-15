import { useState } from "react";
import { Redirect } from "react-router-dom";
import BoardHabits from "../../components/BoardHabits";
import Button from "../../components/Button";
import CreateGroup from "../../components/CreateGroup";
import Header from "../../components/Header";
import LogoutButton from "../../components/LogoutButton";

function Dashboard({ authenticated, setAuthenticated }) {
  const [habitModal, setHabitModal] = useState(false);
  const [createGroupModal, setCreateGroupModal] = useState(false);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  const logout = () => {
    setAuthenticated(false);
    localStorage.clear();
  };

  const openHabitModal = () => {
    setHabitModal(true);
  };

  const openGroupModal = () => {
    setCreateGroupModal(true);
  };
  return (
    <>
      <Header setAuthenticated={setAuthenticated} />
      <LogoutButton onClick={logout}>Sair</LogoutButton>
      <Button onClick={openHabitModal}>Criar hábito</Button>
      <Button onClick={openGroupModal}>Criar grupo</Button>
      <BoardHabits habitModal={habitModal} setHabitModal={setHabitModal} />
      <CreateGroup
        createGroupModal={createGroupModal}
        setCreateGroupModal={setCreateGroupModal}
      />
    </>
  );
}

export default Dashboard;
