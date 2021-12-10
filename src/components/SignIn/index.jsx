
import { TextField } from "@mui/material"
import { yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {FiXCircle} from 'react-icons/fi'
import { useContext } from "react"

import Button from '../Button'
import { Container, Icon, Modal } from "./style"

import { SigninContext } from '../../providers/SignIn'
import { Redirect } from "react-router"

const SignIn = ({openSignup, setOpenSignup, authenticated, setAuthenticated}) => {

    const { toLogin } = useContext(SigninContext)

    const schema = yup.object().shape({
        username: yup.string().required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório')
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver:yupResolver(schema)
    })

    const onSignIn = (data) => {
        toLogin(data)
        setAuthenticated(true)
    }
    if (authenticated) {
        return <Redirect to="/dashboard"/>
    }
    return(
        <Modal
            isOpen={openSignup}
            ariaHideApp={false}
        >
            
            <Container>
                <Icon onClick={ () => setOpenSignup(false)}><FiXCircle/></Icon>
                <form onSubmit={handleSubmit(onSignIn)}>
                    <TextField
                        label='Username'
                        variant="filled" 
                        margin="normal"
                        fullWidth
                        {...register('username')}
                        error={!!errors.username?.message}
                        helperText={errors.username?.message}
                    />

                    <TextField
                        label='Senha'
                        type='password'
                        fullWidth
                        variant="filled" 
                        margin="normal"
                        {...register('password')}
                        error={!!errors.password?.message}
                        helperText={errors.password?.message}
                    />

                    <Button biggerButton type='submit'>Login</Button>
                </form>
            </Container>

        </Modal>
    )
}

export default SignIn