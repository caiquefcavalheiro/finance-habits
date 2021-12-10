import {Route, Switch} from "react-router";
import Home from '../pages/Home'
import Dashboard from "../pages/Dashboard";
import Habit from "../pages/Habit";
import Groups from "../pages/Groups";
import { useState, useEffect } from "react";


function Routes() {

    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        let isMounted = true
        const token = localStorage.getItem("@financeHabits:token")
        if (token && isMounted) {
            setAuthenticated(true)
        }
        return () => {
            isMounted = false
        }
    }, [authenticated])

    return(
        <Switch>
            <Route exact path="/">
                <Home authenticated={authenticated} setAuthenticated={setAuthenticated} />
            </Route>
            <Route exact path="/dashboard">
                <Dashboard authenticated={authenticated} setAuthenticated={setAuthenticated} />
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