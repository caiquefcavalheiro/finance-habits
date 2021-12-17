import { TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { FiXCircle } from "react-icons/fi";
import { useContext } from "react";
import Button from "../Button";
import { Container, Icon, MainContainer, SignupButton } from "./style";
import { SignUpContext } from "../../providers/SignUp";

const GoUpSignUp = ({ openSignup, setOpenSignup, setAuthenticated }) => {
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

  const handleSignup = (data) => {
    toSignUp(data);
    setAuthenticated(true);
  };

  return (
    <MainContainer isOpen={openSignup} ariaHideApp={false} portalClassName="modal" >
      <Container>
        <Icon onClick={() => setOpenSignup(false)}>
          <FiXCircle />
        </Icon>
        <form onSubmit={handleSubmit(handleSignup)}>
          <TextField
            label="Username"
            variant="outlined"
            margin="normal"
            fullWidth
            {...register("username")}
            error={!!errors.username?.message}
            helperText={errors.username?.message}
          />
          <TextField
            label="Email"
            type="text"
            margin="normal"
            fullWidth
            {...register("email")}
            error={!!errors.email?.message}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
            {...register("email")}
            error={!!errors.email?.message}
            helperText={errors.email?.message}
          />
          <TextField
            label="ConfirmPassword"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
            {...register("confirmPassword")}
            error={!!errors.confirmPassword?.message}
            helperText={errors.confirmPassword?.message}
          />
          <SignupButton type="submit">
            Cadastrar
          </SignupButton>
        </form>
      </Container>
    </MainContainer>
  );
};

export default GoUpSignUp;
