import { createContext, useContext } from "react";
import api from "../../services/api";
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";

export const SigninContext = createContext();

export const SigninProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("@financeHabits:token") || '');
  const history = useHistory();

  const toLogin = (data) => {
    api
      .post("/sessions/", data)
      .then((res) => {
        const { access } = res.data;
        const { user_id } = jwtDecode(access);

        setToken(access)
        localStorage.clear();
        localStorage.setItem("@financeHabits:token", access);
        localStorage.setItem("@financeHabits:user_id", JSON.stringify(user_id));

        api
          .get(`/users/${user_id}/`)
          .then((res) => {
            localStorage.setItem(
              "@financeHabits:user",
              JSON.stringify(res.data)
            );
          })
          .catch((err) => console.log(err));

        api
          .get(`/habits/personal/`, {
            headers: { Authorization: `Bearer ${access}` },
          })
          .then((res) => {
            localStorage.setItem(
              "@financeHabits:userHabits",
              JSON.stringify(res.data)
            );
          })
          .catch((err) => console.log(err));

        api
          .get(`/groups/subscriptions/`, {
            headers: { Authorization: `Bearer ${access}` },
          })
          .then((res) => {
            localStorage.setItem(
              "@financeHabits:userGroups",
              JSON.stringify(res.data)
            );
          })
          .catch((err) => console.log(err));

        toast.success('Bem-vindo ao FinanceHabits')
        setAuthenticated(true)
        history.push("/dashboard");
      })
      .catch((err) => {
        toast.error('Ops, algo deu errado. Tente novamente')
      });
  };

  return (
    <SigninContext.Provider value={{ toLogin, authenticated, setAuthenticated, token, setToken }}>
      {children}
    </SigninContext.Provider>
  );
};

export const useSignin = () => useContext(SigninContext);