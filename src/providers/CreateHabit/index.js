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

  function editHabit(data) {
    const { id, titleHabit, difficultyHabit, frequencyHabit } = data;
    api
      .patch(
        `/habits/${id}`,
        {
          title: titleHabit,
          difficulty: difficultyHabit,
          frequency: frequencyHabit,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then
      // atualizar local storage
      ()
      .catch((error) => console.log(error));
  }

  return (
    <CreateHabitContext.Provider value={{ toCreateHabit, editHabit }}>
      {children}
    </CreateHabitContext.Provider>
  );
};
