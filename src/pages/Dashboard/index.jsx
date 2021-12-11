import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Button from "../../components/Button"
import CardHabitCard from '../../components/CardHabit'
import CreateHabit from '../../components/CreateHabit'
import LogoutButton from '../../components/LogoutButton'
import api from '../../services/api'

function Dashboard({ authenticated, setAuthenticated }) {
    
    const [habitModal, setHabitModal] = useState(false)

    const token = localStorage.getItem("@financeHabits:token") 
    console.log(token)

    const [habits, setHabits] = useState([])

    const loadHabits = () => {
        api
        .get("habits/personal/", {
            headers: {
                Authorization: `Bearer ${token} `
            },
        })
        .then((response) => {
            const apiHabits = response.data.map((habit) => ({
                ...habit,
            }))
            setHabits(apiHabits)
        })
    }

    useEffect(() => {
        loadHabits()
    }, [])

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
        <CreateHabit habitModal={habitModal} setHabitModal={setHabitModal} />
        {
            habits.map((habit) => <CardHabitCard
                title={habit.title}
                category={habit.category}
                difficulty={habit.difficulty}
                frequency={habit.frequency}
            />)
        }
        </>
    )
}

export default Dashboard;