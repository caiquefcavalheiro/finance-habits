
import { TextField } from "@mui/material"
import { yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {FiXCircle} from 'react-icons/fi'
import { useContext } from "react"

import Button from '../Button'
import { Container, Icon, Modal } from "./style"

import { SigninContext } from '../../providers/SignIn'

const SignIn = ({openSignIn, setOpenSignIn}) => {

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
    }

    return(
        <Modal
            isOpen={openSignIn}
            ariaHideApp={false}
        >
            
            <Container>
                <Icon onClick={ () => setOpenSignIn(false)}><FiXCircle/></Icon>
                <form onSubmit={handleSubmit(onSignIn)}>
                    <TextField
                        label='Username'
                        variant="outlined" 
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
                        variant="outlined" 
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