import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Habit from "../pages/Habit";
import Groups from "../pages/Groups";
import { useEffect, useContext } from "react";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import PageGroup from "../pages/PageGroup";
import { SigninContext } from "../providers/SignIn";
import SnowFall from "../components/SnowFall";

function Routes() {
  const { authenticated, setAuthenticated } = useContext(SigninContext);

  useEffect(() => {
    let isMounted = true;
    const token = localStorage.getItem("@financeHabits:token");
    if (token && isMounted) {
      setAuthenticated(true);
    }
    return () => {
      isMounted = false;
    };
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated} />
      </Route>
      <Route exact path="/signin">
        <SignIn
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route exact path="/signup">
        <Register
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route exact path="/habit/:id">
        <Habit
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route exact path="/groups/:id">
        <Groups
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/groups">
        <PageGroup
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route exact path="/snowfall">
        <div style={{ backgroundColor: "black" }}>
          <SnowFall />
        </div>
      </Route>
    </Switch>
  );
}

export default Routes;
