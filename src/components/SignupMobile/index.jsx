import Button from "../Button";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SignUpContext } from "../../providers/SignUp";
import { Link } from "react-router-dom";
import { Container } from "./style";

function SignupMobile({ setAuthenticated }) {
  const { toSignUp } = useContext(SignUpContext);

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Mínimo de 8 dígitos"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas estão diferentes"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSignUp = (data) => {
    toSignUp(data);
    setAuthenticated(true);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSignUp)}>
        <h2>Faça Parte!</h2>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          {...register("username")}
          error={!!errors.username?.message}
          helperText={errors.username?.message}
        />
        <TextField
          label="Email"
          type="text"
          margin="normal"
          {...register("email")}
          error={!!errors.email?.message}
          helperText={errors.email?.message}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          {...register("password")}
          error={!!errors.password?.message}
          helperText={errors.password?.message}
        />
        <TextField
          label="ConfirmPassword"
          type="password"
          variant="outlined"
          margin="normal"
          {...register("confirmPassword")}
          error={!!errors.confirmPassword?.message}
          helperText={errors.confirmPassword?.message}
        />
        <Button biggerButton type="submit">
          Cadastrar
        </Button>
        <p>
          Já tem conta? <Link to="/signin">Faça Login</Link>
        </p>
      </form>
    </Container>
  );
}

export default SignupMobile;
