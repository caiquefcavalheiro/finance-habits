import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

export const GroupsContext = createContext();

export const GroupProvider = ({ children }) => {
  const token = localStorage.getItem("@financeHabits:token");

  const [groupList, setGroupList] = useState(JSON.parse(localStorage.getItem('@financeHabits:groupList')) || [])

  const [userGroups, setUserGroups] = useState(JSON.parse(localStorage.getItem('@financeHabits:userGroups')) || [])

  const allGroups = () => {

    let temp = []

    api.get( '/groups/?category=Poupança',
      { headers: { Authorization: `Bearer ${token}`} }
    ).then(res => {
      temp.push(...res.data.results)
      
      api.get( '/groups/?category=Investimento',
        { headers: { Authorization: `Bearer ${token}`} }
      ).then(res => {
        temp.push(...res.data.results)
        
        api.get( '/groups/?category=Educação',
          { headers: { Authorization: `Bearer ${token}`} }
        ).then(res => {
          temp.push(...res.data.results)
          localStorage.setItem('@financeHabits:groupList', JSON.stringify(temp))
          setGroupList(temp)
        })
      })
    })
  }

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

  const createGroups = (data) => {
    api
    .post(`/groups/`, data, 
      { headers: { Authorization: `Bearer ${token}`} }
    ).then( res => {
      allGroupsUser()
      toast.success('Grupo criado com sucesso!')
    }).catch(err => {
      console.log(err)
      toast.error('Ops. Algo deu errado. Tente novamente')
    })
  }

  const updateGroup = (data) => {

    api
    .post(`/groups/${data.id}`, data,
      { headers: { Authorization: `Bearer ${token}`} }
    ).then( res => {
      //allGroupsUser()
      toast.success('Suas mudanças foram salvas')
    }).catch( err => {
      console.log(err)
      toast.error('Ops. Algo deu errado. Tente novamente')
    })
  }

  const subscribeGroup = (data) => {
    const {id} = data

    api
    .post(`groups/${id}/subscribe/`, data, 
      { headers: { Authorization: `Bearer ${token}`} }
    ).then(res => {
      allGroupsUser()
      toast.success('Parabéns. Você entrou no grupo')
    }).catch(err => {
      console.log(err)
      toast.error('Ops. Algo deu errado. Tente novamente')
    })
  }

  const unsubscribeGroup = (data) => {
    const { id } = data;

    api.delete(`/groups/${id}/unsubscribe/`,
      { headers: { Authorization: `Bearer ${token}`} }
    ).then( res => {
      allGroupsUser()
      toast.success('Você saiu do grupo')
    }).catch( err => {
      console.log(err)
      toast.error('Ops. Algo deu errado. Tente novamente')
    })
  }


  return (
    <GroupsContext.Provider value={{ groupList, userGroups, createGroups, updateGroup, subscribeGroup, unsubscribeGroup, allGroups, allGroupsUser }}>
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
