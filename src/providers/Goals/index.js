import { createContext, useContext } from "react";
import api from "../../services/api";

const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const token = localStorage.getItem("@financeHabits:token");

  function toUpdateGoals(data) {
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

  function toDeleteGoals() {}

  return (
    <GoalsContext.Provider value={{ toUpdateGoals, toDeleteGoals }}>
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoals = () => useContext(GoalsContext);
