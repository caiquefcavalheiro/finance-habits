import { createContext } from "react";
import api from "../../services/api";
import { useHistory } from "react-router";

export const SignUpContext = createContext([]);

export const SignUpProvider = ({ children }) => {
  const history = useHistory();

  const toSignUp = (data) => {
    const { username, email, password } = data;
    console.log({ username: username, email: email, password: password });
    api
      .post("/users/", { username: username, email: email, password: password })
      .then((response) => {
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
