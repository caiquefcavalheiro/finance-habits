
import { TextField } from "@mui/material";
import { yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import { useContext } from "react";
import { Redirect } from "react-router";
import {Link} from 'react-router-dom';

import Button from '../../components/Button';
import figureLogin from "../../assets/figure-login.svg"
import { SigninContext } from '../../providers/SignIn';
import Footer from "../../components/Footer";
import { MainContainer, Container, Form } from "./style";
import Header from "../../components/Header";

const SignIn = ({authenticated, setAuthenticated}) => {

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

        <MainContainer>
            <Header authenticated={authenticated} setAuthenticated={setAuthenticated} />
            <Container>
                <div className="group2">
                    <img src={figureLogin} alt="figure"></img>
                </div>
                <div className="group1">
                    <Form onSubmit={handleSubmit(onSignIn)}>
                        <h2>Entre</h2>
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
                        <p>Não tem conta ? <Link to='/'>Cadastre-se</Link></p>
                    </Form>
                </div>
            </Container>
            <Footer />
        </MainContainer>
    )
}

export default SignIn