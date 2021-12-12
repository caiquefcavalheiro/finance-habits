import { createContext } from "react";
import api from "../../services/api";

export const CreateHabitContext = createContext([]);

export const CreateHabitProvider = ({ children }) => {
  const token = localStorage.getItem("@financeHabits:token");

  const toCreateHabit = (data) => {
    api
      .post(
        "habits/",
        {
          ...data,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        //criar toast de sucesso
      })
      .catch((err) => {
        console.log(err);
        // criar toast de erro
      });
  };
  return (
    <CreateHabitContext.Provider value={{ toCreateHabit }}>
      {children}
    </CreateHabitContext.Provider>
  );
};
