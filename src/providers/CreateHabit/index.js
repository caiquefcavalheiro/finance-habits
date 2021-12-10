import { createContext } from "react"
import api from "../../services/api"

export const CreateHabitContext = createContext([])

export const CreateHabitProvider = ({children}) => {
    
    const token = localStorage.getItem("@financeHabits:token") 
    console.log(token)

    const toCreateHabit = (data) => {
        api
        .post("habits/", {
            ...data
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        },)
        .then(response => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <CreateHabitContext.Provider value={{toCreateHabit}}>
            { children }
        </CreateHabitContext.Provider>
    )
}