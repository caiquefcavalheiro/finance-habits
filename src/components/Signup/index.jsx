import Button from '../Button';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { CloseButton, Content } from './styles';
import ReactModal from 'react-modal';
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from 'axios';

const Signup = () => {

    const [openSignup, setOpenSignup] = useState(true)

    const closeSignup = () => {
        setOpenSignup(false)
    }

    const api = axios.create({
        baseURL: "https://kenzie-habits.herokuapp.com"
    })

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
        api
        .post("/users/", data)
        .then((_) => {
            console.log(data)
            })
            .catch((err) => {
                console.log(err)
                })
    }

    const CustomStyles = {
        content: {
            width: "310px",
            height: "510px",
            margin: "0 auto",
            background: "#3d3d3d",
        }
    }
    
    return (
        <>
        <ReactModal
            isOpen={openSignup}
            style={CustomStyles}
        >
        <CloseButton onClick={closeSignup} >X</CloseButton>
        <Content>
        <form onSubmit={handleSubmit(handleSignup)} >
            <TextField 
                {...register("username")}
                error={!!errors.username?.message}
                helperText={errors.username?.message}
                label="Username" 
                variant="outlined" 
                margin="normal" />
            <TextField 
                {...register("email")}
                error={!!errors.email?.message}
                helperText={errors.email?.message}
                label="E-mail" 
                variant="outlined" 
                margin="normal" />
            <TextField 
                {...register("password")}
                error={!!errors.password?.message}
                helperText={errors.password?.message}
                type="password"
                label="Senha" 
                variant="outlined" 
                margin="normal" />
            <Button type="submit">Cadastrar</Button>
        </form>
        </Content>
        </ReactModal>
        </>
    )
}
export default Signup