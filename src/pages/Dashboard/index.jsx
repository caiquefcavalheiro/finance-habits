import { Redirect } from 'react-router-dom'
import CreateHabit from '../../components/CreateHabit'

function Dashboard({ authenticated, setAuthenticated }) {
    if (!authenticated) {
        return <Redirect to="/"/>
    }

    const logout = () => {
        setAuthenticated(false)
        localStorage.clear()
    }
    return(
        <>
        <button onClick={logout} >Sair</button>
        <CreateHabit/>
        </>
    )
}

export default Dashboard;