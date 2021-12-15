import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const token = localStorage.getItem("@financeHabits:token");

  const [userGroups, setUserGroups] = useState(JSON.parse(localStorage.getItem('@financeHabits:userGroups')) || [])

  const allGroupsUser = () => {
    api
    .get(`/groups/subscriptions/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      localStorage.setItem(
        "@financeHabits:userGroups",
        JSON.stringify(res.data)
      )
      setUserGroups(res.data)
    })
    .catch((err) => console.log(err))
  }

  const createGoals = ( data ) => {
    api.post('/goals', data, 
      { headers: { Authorization: `Bearer ${token}`} }
    ).then( resp => {
      allGroupsUser()
      toast.success('Meta criada com sucesso!')
    }).catch( err => {
      toast.error('Ops. Algo deu errado. Tente novamente')
    })
  }

  function toUpdateGoals(data) {// corrgir função
    const { id, difficultyGoal, titleGoal } = data;

    api.patch(
      `/goals/${id}/`,
      { title: titleGoal, difficulty: difficultyGoal },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then(res => {
      allGroupsUser()
      toast.success('As alterações em metas foram salvas!')
    }).catch( err => {
      toast.error('Ops. Algo deu errado. Tente novamente.')
    })
  }

  function toDeleteGoals() {}

  return (
    <GoalsContext.Provider value={{ toUpdateGoals, toDeleteGoals, createGoals }}>
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoals = () => useContext(GoalsContext);
