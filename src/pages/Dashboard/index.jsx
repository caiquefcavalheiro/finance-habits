import { Redirect } from 'react-router-dom'

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
        </>
    )
}

export default Dashboard;