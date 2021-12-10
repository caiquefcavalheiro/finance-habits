import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api";

export const GroupsContext = createContext([])

export const GroupProvider = ({children}) => {
    const [groups, setGroups] = useState([])
    const [page, setPage] = useState(1)

    useEffect(()=>{

        api.get(`groups/?page=${page}`).then( res => {
            const {next, results} = res.data

            if(next !== null){
                setGroups([...groups, ...results])
                setPage(page + 1)
            }else{
                setGroups([...groups, ...results])
            }
        })

    },[page])

    return(
        <GroupsContext.Provider value={{groups}}>
            {children}
        </GroupsContext.Provider>
    )
}

export const useGroups = () => (useContext(GroupsContext))
