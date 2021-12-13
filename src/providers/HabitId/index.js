import { createContext, useContext, useState } from "react";


const HabitIdContext = createContext();

export const HabitIdProvider = ({children}) => {

    const [currentId, setCurrentId] = useState(361);
    // const [currentId, setCurrentId] = useState(-1);

    return(
        <HabitIdContext.Provider value={{currentId, setCurrentId}}>
            {children}
        </HabitIdContext.Provider>
    )
}

export const useHabitId = () => useContext(HabitIdContext);