import {Route, Switch} from "react-router";
import Home from '../pages/Home'
import Dashboard from "../pages/Dashboard";
import Habit from "../pages/Habit";
import Groups from "../pages/Groups";


function Routes() {
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/habit">
                <Habit />
            </Route>
            <Route exact path="/groups">
                <Groups />
            </Route>
        </Switch>

    )

}

export default Routes;