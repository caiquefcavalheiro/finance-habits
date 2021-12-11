import { MenuItem } from '@mui/material';
import { useState } from 'react';
import { FiMenu} from 'react-icons/fi'
import {ContainerIcon, ContainerButtons, Container, Icon, ContainerMenu } from './style';
import Button from '../Button'
import SignIn from '../../pages/SignIn'
import Signup from '../Signup'

function Header ({authenticated, setAuthenticated}) {
    const [menu, setMenu] = useState(false);
    const [anchor, setAnchor] = useState("");
    const [signin, setSignin] = useState(false);
    const [signup, setSignup] = useState(false);

    function openSignin() {
        setSignin(true);
        setMenu(false);
    }

    function openSignup() {
        setSignup(true);
        setMenu(false);
    }

    return (
        <Container>
            <h1>Finance Habits</h1>
            <div>
                <ContainerIcon>
                    <Icon onClick={(event) => {setMenu(true)
                setAnchor(event.currentTarget)}}><FiMenu/>
                    </Icon>
                    <ContainerMenu anchorEl={anchor} id="basic-menu" open={menu} onClose={() => setMenu(false)}>
                        <MenuItem onClick={openSignin}>Entrar</MenuItem>
                        <hr/>
                        <MenuItem onClick={openSignup}>Cadastrar</MenuItem>
                    </ContainerMenu>
                </ContainerIcon>
                <ContainerButtons>
                    <Button white onClick={() => openSignin()}>Entrar</Button>
                    <Button white onClick={() => openSignup()}>Cadastrar</Button>
                </ContainerButtons>
            </div>
            <SignIn openSignup={signin} setOpenSignup={setSignin} authenticated={authenticated} setAuthenticated={setAuthenticated} />
            <Signup signup={signup} setSignup={setSignup} authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Container>
    )
}

export default Header;