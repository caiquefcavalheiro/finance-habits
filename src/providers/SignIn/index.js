import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router-dom";

export const SigninContext = createContext([]);

export const SigninProvider = ({ children }) => {
  const [useToken, setUseToken] = useState("");

  const history = useHistory();

  const toLogin = (data) => {
    api
      .post("/sessions/", data)
      .then((res) => {
        const { access } = res.data;
        const { user_id } = jwtDecode(access);

        localStorage.clear();
        localStorage.setItem("@financeHabits:token", access);
        localStorage.setItem("@financeHabits:user_id", JSON.stringify(user_id));

        setUseToken(access);

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

        //incluir tost
        history.push("/dashboard");
      })
      .catch((err) => {
        // incluir tost
      });
  };

  return (
    <SigninContext.Provider value={{ toLogin, useToken }}>
      {children}
    </SigninContext.Provider>
  );
};

export const useSign = () => useContext(SigninContext);
