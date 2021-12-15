import { Redirect } from 'react-router-dom'
import Board from '../../components/Board'
import LogoutButton from '../../components/LogoutButton'

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
        <LogoutButton onClick={logout} >Sair</LogoutButton>
        <Board/>
        </>
    )
}

export default Dashboard;