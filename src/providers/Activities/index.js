import { createContext, useContext } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";
import { useSignin } from "../SignIn";
import { useGroups } from "../Groups";

const ActivitiesContext = createContext();

export const ActiviesProvider = ({ children }) => {
  const { token } = useSignin();

  const { allGroupsUser } = useGroups();

  function toUpdateActivies(data) {
    const { nameActivity, id } = data;

    api
      .patch(
        `/activities/${id}/`,
        { title: nameActivity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        allGroupsUser();
        toast.success("Suas alterações foram salvas com sucesso!");
      })
      .catch((err) => {
        toast.error("Ops. Algo deu errado. Tente novamente.");
      });
  }

  function toCreateActivities(data) {
    api
      .post(
        "/activities/",
        { data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        allGroupsUser();
        toast.success("Atividade criada com sucesso!");
      })
      .catch((error) => {
        toast.error("Ops. Algo deu errado. Tente novamente.");
      });
  }

  function toGetActivities(data) {
    const { id } = data;
    api
      .get(`/activities/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then()
      .catch((error) => {});
  }

  function toDeleteActivities(data) {
    const { id } = data;
    api
      .delete(`/activities/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        allGroupsUser();
        toast.success("Atividade excluída com sucesso!");
      })
      .catch((error) => {
        toast.error("Ops. Algo deu errado. Tente novamente.");
      });
  }

  return (
    <ActivitiesContext.Provider
      value={{
        toUpdateActivies,
        toCreateActivities,
        toGetActivities,
        toDeleteActivities,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export const useActivies = () => useContext(ActivitiesContext);
