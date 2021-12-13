import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import jwtDecode from "jwt-decode";
import { useHistory } from "react-router-dom";

export const SigninContext = createContext([]);

export const SigninProvider = ({ children }) => {
  const history = useHistory();

  const [useToken] = useState(
    localStorage.getItem("@financeHabits:token") || []
  );

  const [userId] = useState(
    localStorage.getItem("@financeHabits:user_id") || ""
  );

  const [userHabits] = useState(
    JSON.parse(localStorage.getItem("@financeHabits:userHabits")) || []
  );

  function getHabits() {
    api
      .get("habits/personal/", {
        headers: {
          Authorization: `Bearer ${useToken}`,
        },
      })
      .then((response) =>
        localStorage.setItem(
          "@financeHabits:userHabits",
          JSON.stringify(response.data)
        )
      );
  }

  const toLogin = (data) => {
    api
      .post("/sessions/", data)
      .then((res) => {
        const { access } = res.data;
        const { user_id } = jwtDecode(access);

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

        //incluir tost
        history.push("/dashboard");
      })
      .catch((err) => {
        // incluir tost
      });
  };

  return (
    <SigninContext.Provider
      value={{ toLogin, useToken, userId, getHabits, userHabits }}
    >
      {children}
    </SigninContext.Provider>
  );
};

export const useSignin = () => useContext(SigninContext);
