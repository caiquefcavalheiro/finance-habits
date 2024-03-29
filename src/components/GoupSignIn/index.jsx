import { TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { FiXCircle } from "react-icons/fi";
import { useContext } from "react";
import { Container, Icon, MainContainer, SigninButton } from "./style";
import { SigninContext } from "../../providers/SignIn";

const GoUpSignIn = ({ openSignin, setOpenSignin }) => {
  const { toLogin } = useContext(SigninContext);

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSignIn = (data) => {
    toLogin(data);
  };

  return (
    <MainContainer isOpen={openSignin} ariaHideApp={false}>
      <Container>
        <Icon onClick={() => setOpenSignin(false)}>
          <FiXCircle />
        </Icon>
        <form onSubmit={handleSubmit(onSignIn)}>
          <TextField
            label="Usuário"
            variant="outlined"
            margin="normal"
            fullWidth
            {...register("username")}
            error={!!errors.username?.message}
            helperText={errors.username?.message}
          />

          <TextField
            label="Senha"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
            {...register("password")}
            error={!!errors.password?.message}
            helperText={errors.password?.message}
          />

          <SigninButton biggerButton white type="submit">
            Login
          </SigninButton>
        </form>
      </Container>
    </MainContainer>
  );
};

export default GoUpSignIn;