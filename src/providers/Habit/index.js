import { createContext, useContext, useState } from "react";
import api from "../../services/api";

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const token = localStorage.getItem("@financeHabits:token");

  const [userHabits] = useState(
    JSON.parse(localStorage.getItem("@financeHabits:userHabits"))
  );

  const toCreateHabit = (data) => {
    api
      .post(
        "habits/",
        { ...data },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        localStorage.setItem(
          "@financeHabits:userHabits",
          JSON.stringify([...userHabits, response])
        );
        //criar toast de sucesso
      })
      .catch((err) => {
        console.log(err);
        //criar toast de falha
      });
  };

  const toDeleteHabit = (data) => {
    const habit_id = data.id;

    api
      .delete(`/habits/${habit_id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const newHabit = userHabits.filter((item) => item.id !== data.id);
        localStorage.setItem(
          "@financeHabits:userHabits",
          JSON.stringify(newHabit)
        );
        //criar toast de sucesso
      })
      .catch((err) => {
        console.log(err);
        //criar toast de falha
      });
  };

  const toUpdateHabit = (data) => {
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
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        const newHabit = userHabits.filter((item) => item.id !== data.id);
        localStorage.setItem(
          "@financeHabits:userHabits",
          JSON.stringify([...newHabit, data])
        );
        //criar toast de sucesso
      })
      .catch((err) => {
        console.log(err);
        //criar toast de falha
      });
  };

  return (
    <HabitContext.Provider
      value={{ toCreateHabit, toDeleteHabit, toUpdateHabit, userHabits }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabits = () => useContext(HabitContext);
