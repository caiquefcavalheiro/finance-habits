import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header";
import { useGroups } from "../../providers/Groups";
import Board from "../../components/Board";

function Dashboard({ authenticated, setAuthenticated }) {
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
      <Board />
    </>
  );
}

export default Dashboard;