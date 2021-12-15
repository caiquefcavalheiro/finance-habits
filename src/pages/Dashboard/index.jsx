import { useState } from "react";
import { useEffect } from "react-router-dom";
import { Redirect } from "react-router-dom";
import BoardHabits from "../../components/Board";
import CreateGroup from "../../components/CreateGroup";
import Header from "../../components/Header";
import { useGroups } from "../../providers/Groups";

function Dashboard({ authenticated, setAuthenticated }) {
  const [habitModal, setHabitModal] = useState(false);
  const [createGroupModal, setCreateGroupModal] = useState(false);

  const { allGroups } = useGroups();

  useEffect(() => {
    allGroups();
  }, []);

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
