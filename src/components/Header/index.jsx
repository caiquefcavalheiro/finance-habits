import { MenuItem } from '@mui/material';
import { useState } from 'react';
import { FiMenu} from 'react-icons/fi'
import {ContainerIcon, ContainerButtons, Container, Icon, ContainerMenu } from './style';
import Button from '../Button'
import SignIn from '../SignIn'
import Signup from '../Signup'

function Header () {
    const [menu, setMenu] = useState(false);
    const [anchor, setAnchor] = useState("");
    const [signin, setSignin] = useState(false);
    const [signup, setSignup] = useState(false);

    return (
        <Container>
            <h1>Finance Habits</h1>
            <div>
                <ContainerIcon>
                    <Icon onClick={(event) => {setMenu(true)
                setAnchor(event.currentTarget)}}><FiMenu/>
                    </Icon>
                    <ContainerMenu anchorEl={anchor} id="basic-menu" open={menu} onClose={() => setMenu(false)}>
                        <MenuItem onClick={() => setSignin(true)}>Entrar</MenuItem>
                        <hr/>
                        <MenuItem onClick={() => setSignup(true)}>Cadastrar</MenuItem>
                    </ContainerMenu>
                </ContainerIcon>
                <ContainerButtons>
                    <Button onClick={() => setSignin(true)}>Entrar</Button>
                    <Button onClick={() => setSignup(true)}>Cadastrar</Button>
                </ContainerButtons>
            </div>
            <SignIn openSignup={signin} setOpenSignup={setSignin}/>
            <Signup signup={signup} setSignup={setSignup}/>
        </Container>
    )
}

export default Header;