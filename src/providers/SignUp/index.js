import { createContext } from "react"
import api from "../../services/api"
import { useHistory } from "react-router"

export const SignUpContext = createContext([])

export const SignUpProvider = ({ children }) => {
    
    const history = useHistory()

    const toSignUp = (data) => {
        api
        .post("/users/", data)
        .then( response => {
            console.log(data)
            history.push("/dashboard")
            })
            .catch((err) => {
                console.log(err)
                })
    }
    return (
        <SignUpContext.Provider value={{toSignUp}}>
            {children}
        </SignUpContext.Provider>
    )
}