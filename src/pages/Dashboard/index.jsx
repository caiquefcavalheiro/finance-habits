import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import BoardHabits from "../../components/Board";
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

  return (
    <>
      <Header setAuthenticated={setAuthenticated} />
      <BoardHabits habitModal={habitModal} setHabitModal={setHabitModal} />
      <CreateGroup
        createGroupModal={createGroupModal}
        setCreateGroupModal={setCreateGroupModal}
      />
    </>
  );
}

export default Dashboard;
