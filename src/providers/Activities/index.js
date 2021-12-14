import { createContext, useContext } from "react";
import api from "../../services/api";

const ActivitiesContext = createContext();

export const ActiviesProvider = ({ children }) => {
  const token = localStorage.getItem("@financeHabits:token");

  function toUpdateActivies(data) {
    const { nameActivity, id } = data;

    api.patch(
      `/activities/${id}/`,
      { title: nameActivity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  return (
    <ActivitiesContext.Provider value={{ toUpdateActivies }}>
      {children}
    </ActivitiesContext.Provider>
  );
};

export const useActivies = () => useContext(ActivitiesContext);
