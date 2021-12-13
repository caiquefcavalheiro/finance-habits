import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api";
import { useSignin } from "../SignIn";

export const GroupsContext = createContext([]);

export const GroupProvider = ({ children }) => {
  const { useToken } = useSignin();

  const [groups, setGroups] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api.get(`groups/?page=${page}`).then((res) => {
      const { next, results } = res.data;
      if (next !== null) {
        setGroups((state) => [...state, ...results]);
        setPage(page + 1);
      } else {
        setGroups((state) => [...state, ...results]);
      }
    });
  }, [page]);

  function editGroup(data) {
    const { nameGroup, descriptionGroup, id } = data;
    api
      .patch(
        `groups/${id}`,
        {
          name: nameGroup,
          description: descriptionGroup,
        },
        {
          headers: { Authorization: `Bearer ${useToken}` },
        }
      )
      .then((response) =>
        console.log("chamar função para ajustar o local storage")
      )
      .catch((error) => console.log(error));
  }

  const groupList = groups.filter(
    (item) =>
      item.category === "Educação" ||
      item.category === "Investimento" ||
      item.category === "Poupança"
  );

  localStorage.setItem("@financeHabits:groupList", JSON.stringify(groupList));

  return (
    <GroupsContext.Provider value={{ groupList, editGroup }}>
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
