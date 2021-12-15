import { createContext, useContext } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

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
      .then(res => {
        toast.success('Suas alterações foram salvas com sucesso!')
      }).catch( err => {
        toast.error('Ops. Algo deu errado. Tente novamente.')
      })
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
        (response) => {
          toast.success('Atividade criada com sucesso!')
        }

      )
      .catch(
        (error) => {
          toast.error('Ops. Algo deu errado. Tente novamente.')
        }
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
        (response) => {

        }
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
      .then(res => {
        toast.success('Atividade excluída com sucesso!')
      })
      // toast confirmando delete;
      ()
      .catch(
        (error) => {
          toast.error('Ops. Algo deu errado. Tente novamente.')
        }
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
