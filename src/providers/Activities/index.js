import { createContext, useContext } from "react";
import api from "../../services/api";

const ActivitiesContext = createContext();

export const ActiviesProvider = ({ children }) => {
  const token = localStorage.getItem("@financeHabits:token");

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
      .then
      //toast de sucesso ao atualizar
      ();
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
      .then(
        (response) => {}
        //toast de sucesso ao criar/ atualizar grupos
      )
      .catch(
        (error) => {}
        //erro ao criar
      );
  }

  function toGetActivities(data) {
    const { id } = data; // id do grupo não da atividade
    api
      .get(`/activities/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {}
        // atualizar algum local que tenha as atividades;
      )
      .catch(
        (error) => {}
        //atualização deu erro
      );
  }

  function toDeleteActivities(data) {
    const { id } = data;
    api
      .delete(`/activities/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then
      // toast confirmando delete;
      ()
      .catch(
        (error) => {}
        //toast reportando que o delete deu errado
      );
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
