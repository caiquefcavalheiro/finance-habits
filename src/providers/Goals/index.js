import { createContext, useContext } from "react";
import api from "../../services/api";

const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const token = localStorage.getItem("@financeHabits:token");

  function editGoals(data) {
    const { id, difficultyGoal, titleGoal } = data;

    api.patch(
      `/goals/${id}`,
      { title: titleGoal, difficulty: difficultyGoal },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  return (
    <GoalsContext.Provider value={{ editGoals }}>
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoals = () => useContext(GoalsContext);
