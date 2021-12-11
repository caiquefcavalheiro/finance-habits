import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import BoardHabits from '../../components/BoardHabits'
import Button from "../../components/Button"
import LogoutButton from '../../components/LogoutButton'

function Dashboard({ authenticated, setAuthenticated }) {

    const [habitModal, setHabitModal] = useState(false)
    
    if (!authenticated) {
        return <Redirect to="/"/>
    }

    const logout = () => {
        setAuthenticated(false)
        localStorage.clear()
    }
    
    const openHabitModal = () => {
        setHabitModal(true)
    }
    return(
        <>
        <LogoutButton onClick={logout} >Sair</LogoutButton>
        <Button onClick={openHabitModal} >Criar hábito</Button>
        <BoardHabits habitModal={habitModal} setHabitModal={setHabitModal} />
        </>
    )
}

export default Dashboard;