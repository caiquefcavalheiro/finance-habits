import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api";

export const GroupsContext = createContext();

export const GroupProvider = ({ children }) => {
  const token = localStorage.getItem("@financeHabits:token");

  const [groups] = useState(
    JSON.parse(localStorage.getItem("@financeHabits:groupList")) || []
  );

  const [userGroups] = useState(() => {
    api
      .get("/groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        return [res];
      })
      .catch((err) => {
        return [];
      });
  });

  const [page, setPage] = useState(1);

  useEffect(() => {
    api.get(`groups/?page=${page}`).then((res) => {
      const { next, results } = res.data;

      const filteredGroup = results.filter(
        (item) =>
          item.category === "Educação" ||
          item.category === "Investimento" ||
          item.category === "Poupança"
      );

      if (next !== null) {
        localStorage.setItem(
          "@financeHabits:groupList",
          JSON.stringify([...groups, filteredGroup])
        );
        setPage((state) => state + 1);
      } else {
        localStorage.setItem(
          "@financeHabits:groupList",
          JSON.stringify([...groups, filteredGroup])
        );
      }
    });
  }, [page]);

  const createGroups = (data) => {
    api
      .post(`/groups/`, data, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        localStorage.setItem(
          "@financeHabits:userGroups",
          JSON.stringify([...userGroups, res])
        );
        // toste de sucesso
      })
      .catch((err) => {
        console.log(err);
        //toste de erro
      });
  };

  const updateGroup = (data) => {
    const { nameGroup, descriptionGroup, id } = data;
    api
      .post(
        `/groups/${id}`,
        {
          name: nameGroup,
          description: descriptionGroup,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        const newGroup = userGroups.filter((item) => item.id !== data.id);
        localStorage.setItem(
          "@financeHabits:userHabits",
          JSON.stringify([...newGroup, data])
        );
        //toste de sucesso
      })
      .catch((err) => {
        console.log(err);
        //toste de falha
      });
  };

  const subscribeGroup = (data) => {
    const { group_id } = data;

    api
      .post(`groups/${group_id}/subscribe`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        //toste de sucesso
      })
      .catch((err) => {
        console.log(err);
        // toste de falha
      });
  };

  const unsubscribeGroup = (data) => {
    const { id } = data;

    api
      .delete(`/groups/${id}/unsubscribe`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const newGroups = userGroups.filter((item) => item.id !== data.id);
        localStorage.setItem(
          "@financeHabits:userHabits",
          JSON.stringify(newGroups)
        );
        //criar toast de sucesso
      })
      .catch((err) => {
        console.log(err);
        //toste de falha
      });
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        userGroups,
        createGroups,
        updateGroup,
        subscribeGroup,
        unsubscribeGroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
