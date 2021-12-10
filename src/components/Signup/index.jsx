import Button from '../Button';
import { TextField } from '@mui/material';
import { ModalSignup, Content } from './styles';
import {FiXCircle} from 'react-icons/fi'
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from 'react';
import { SignUpContext } from '../../providers/SignUp';
import { Icon } from "../SignIn/style"
import { Redirect } from 'react-router';


const Signup = ({signup, setSignup, authenticated, setAuthenticated}) => {


    const { toSignUp } = useContext(SignUpContext)

    const schema = yup.object().shape({
        username: yup.string().required("Campo obrigatório"),
        email: yup.string().required("Campo obrigatório").email("Email inválido"),
        password: yup.string().required("Campo obrigatório").min(8, "Mínimo de 8 dígitos"),
    })

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(schema),
    })

    const handleSignup = (data) => {
        toSignUp(data)
        setAuthenticated(true)
    }

    if (authenticated) {
        return <Redirect to="/dashboard" />
    }
    return (
        <ModalSignup
            isOpen={signup}
            ariaHideApp={false}
        >
<<<<<<< HEAD
        <Icon onClick={() => setSignup(false)}><FiXCircle/></Icon>
        <Content>
        <form onSubmit={handleSubmit(handleSignup)} >
            <TextField 
                {...register("username")}
                error={!!errors.username?.message}
                helperText={errors.username?.message}
                label="Username" 
                variant="filled" 
                margin="normal"
                fullWidth />
            <TextField 
                {...register("email")}
                error={!!errors.email?.message}
                helperText={errors.email?.message}
                label="E-mail" 
                variant="filled" 
                margin="normal"
                fullWidth />
            <TextField 
                {...register("password")}
                error={!!errors.password?.message}
                helperText={errors.password?.message}
                type="password"
                label="Senha" 
                variant="filled" 
                margin="normal"
                fullWidth />
            <Button biggerButton type="submit">Cadastrar</Button>
        </form>
        </Content>
=======
            <Icon onClick={() => setSignup(false)}><FiXCircle/></Icon>
            <Content>
                <form onSubmit={handleSubmit(handleSignup)} >
                    <TextField 
                        {...register("username")}
                        error={!!errors.username?.message}
                        helperText={errors.username?.message}
                        label="Username" 
                        variant="outlined" 
                        margin="normal"
                        fullWidth />
                    <TextField 
                        {...register("email")}
                        error={!!errors.email?.message}
                        helperText={errors.email?.message}
                        label="E-mail" 
                        variant="outlined" 
                        margin="normal"
                        fullWidth />
                    <TextField 
                        {...register("password")}
                        error={!!errors.password?.message}
                        helperText={errors.password?.message}
                        type="password"
                        label="Senha" 
                        variant="outlined" 
                        margin="normal"
                        fullWidth />
                    <Button biggerButton type="submit">Cadastrar</Button>
                </form>
            </Content>
>>>>>>> feature/snowfall
        </ModalSignup>
    )
}
export default Signup