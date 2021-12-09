
import { TextField } from "@mui/material"
import { yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {FiXCircle} from 'react-icons/fi'
import { useState } from "react"

import Button from '../Button'
import { Container, Icon, Modal } from "./style"

const SignIn = () => {

    const [openSignup, setOpenSignup] = useState(true)

    const schema = yup.object().shape({
        username: yup.string().required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório')
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver:yupResolver(schema)
    })

    const onSignIn = (data) => {
        console.log(data)
    }

    return(
        <Modal
            isOpen={openSignup}
        >
            
            <Container>
                <Icon onClick={ () => setOpenSignup(false)}><FiXCircle/></Icon>
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