import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const token = localStorage.getItem("@financeHabits:token");

  const [userHabits, setUserHabits] = useState(
    JSON.parse(localStorage.getItem("@financeHabits:userHabits")) || []
  );

  const toGetHabits = () => {
    api
      .get("habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        localStorage.setItem("@financeHabits:userHabits", JSON.stringify(response.data))
        setUserHabits(response.data)
      })

  }
  
  const toCreateHabit = (data) => {
    api
      .post(
        "habits/",
        { ...data },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        toGetHabits()
        toast.success('Seu hábito foi criado!')
      })
      .catch((err) => {
        console.log(err);
        toast.error('Ops. Algo deu errado. Tente novamente.')
      });
  };

  const toDeleteHabit = (data) => {
    
    const { id } = data
    api
      .delete(`/habits/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toGetHabits()
        toast.success('Hábito apagado!')
      })
      .catch((err) => {
        console.log(err);
        toast.error('Ops. Algo deu errado. Tente novamente.')
      });
  };

  const toUpdateHabit = (data) => {
    const { id, titleHabit, difficultyHabit, frequencyHabit } = data;
    api
      .patch(
        `/habits/${id}/`,
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
        //toGetHabits()
        toast.success('Suas alterações foram salvas!')
      })
      .catch((err) => {
        console.log(err);
        toast.error('Ops. Algo deu errado. Tente novamente.')
      });
  };

  return (
    <HabitContext.Provider
      value={{
        toCreateHabit,
        toDeleteHabit,
        toUpdateHabit,
        userHabits,
        toGetHabits,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabits = () => useContext(HabitContext);
