import Button from '../Button';
import { TextField } from '@mui/material';
import { ModalSignup, Content,Icon } from './styles';
import {FiXCircle} from 'react-icons/fi'
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from 'react';
import { SignUpContext } from '../../providers/SignUp';
import { Redirect } from 'react-router';

function SignupMobile ({signup, setSignup, authenticated, setAuthenticated}) {
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
        <div></div>
    )
}

export default SignupMobile;