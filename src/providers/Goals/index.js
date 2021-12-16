import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import { useGroups } from "../Groups";
import { useSignin } from "../SignIn";

const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const { token } = useSignin();

  const { allGroupsUser } = useGroups();

  const createGoals = (data) => {
    api
      .post("/goals/", data, { headers: { Authorization: `Bearer ${token}` } })
      .then((resp) => {
        allGroupsUser();
        toast.success("Meta criada com sucesso!");
      })
      .catch((err) => {
        toast.error("Ops. Algo deu errado. Tente novamente");
      });
  };

  function toUpdateGoals(data) {
    const { id, difficultyGoal, titleGoal } = data;

    api
      .patch(
        `/goals/${id}/`,
        { title: titleGoal, difficulty: difficultyGoal },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        allGroupsUser();
        toast.success("As alterações em metas foram salvas!");
      })
      .catch((err) => {
        toast.error("Ops. Algo deu errado. Tente novamente.");
      });
  }

  function toDeleteGoals() {}

  return (
    <GoalsContext.Provider
      value={{ toUpdateGoals, toDeleteGoals, createGoals }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoals = () => useContext(GoalsContext);
