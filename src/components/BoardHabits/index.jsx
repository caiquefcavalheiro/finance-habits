import CardHabitCard from '../../components/CardHabit'
import CreateHabit from '../../components/CreateHabit'
import { useState, useEffect } from 'react'
import { Container, Header, PlusButton } from "./style"
import api from '../../services/api'
import { useSign } from '../../providers/SignIn'

const BoardHabits = ({habitModal, setHabitModal}) => {

    const { useToken } = useSign()

    const [habits, setHabits] = useState([])

    const loadHabits = () => {
        api
        .get("habits/personal/", {
            headers: {
                Authorization: `Bearer ${useToken} `
            },
        })
        .then((response) => {
            setHabits(response.data.map((habit) => ({
                ...habit,
            })))
        })
    }

    useEffect(() => {
        loadHabits()
    }, [])

    return (
        <Container>
        <Header> Meus Hábitos <PlusButton/> </Header>
            <CreateHabit habitModal={habitModal} setHabitModal={setHabitModal} />
        {
            habits.map((habit) => <CardHabitCard
                title={habit.title}
                category={habit.category}
                difficulty={habit.difficulty}
                frequency={habit.frequency}
            />)
        }
        </Container>
    )
}
export default BoardHabits