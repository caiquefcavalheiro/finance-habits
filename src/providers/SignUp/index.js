import { createContext, useContext } from "react";
import api from "../../services/api";
import { useHistory } from "react-router";
import { useSignin } from "../SignIn";

export const SignUpContext = createContext([]);

export const SignUpProvider = ({ children }) => {
  const history = useHistory();

  const { toLogin } = useSignin();

  const toSignUp = (data) => {
    const { username, email, password } = data;
    api
      .post("/users/", { username: username, email: email, password: password })
      .then((response) => {
        toLogin({ username: username, password: password });
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SignUpContext.Provider value={{ toSignUp }}>
      {children}
    </SignUpContext.Provider>
  );
};

export const useSignup = () => useContext(SignUpContext);
