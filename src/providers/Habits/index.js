import { createContext } from "react";
import api from "../../services/api";

export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
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

  const toDeleteHabit = (data) => {

    api
      .put(
        `habits/${[...data]}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response)
        //criar toast de sucesso
      })
      .catch((err) => {
        console.log(err);
        // criar toast de erro
      });
  };


  return (
    <HabitsContext.Provider value={{ toCreateHabit, toDeleteHabit }}>
      {children}
    </HabitsContext.Provider>
  );
};
