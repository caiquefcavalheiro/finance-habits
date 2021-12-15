import { Redirect } from "react-router-dom";
import Board from "../../components/Board";
import LogoutButton from "../../components/LogoutButton";
import { useGroups } from "../../providers/Groups";
import { useEffect } from "react";

function Dashboard({ authenticated, setAuthenticated }) {
  const { groupList, allGroups } = useGroups();

  useEffect(() => {
    allGroups();
  }, []);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  const logout = () => {
    setAuthenticated(false);
    localStorage.clear();
  };

  return (
    <>
      <LogoutButton onClick={logout}>Sair</LogoutButton>
      <Board />
    </>
  );
}

export default Dashboard;
