import { MenuItem } from '@mui/material';
import { useState } from 'react';
import { FiMenu} from 'react-icons/fi'
import {ContainerIcon, ContainerButtons, Container, Icon, ContainerMenu } from './style';
import Button from '../Button'
import Signup from '../Signup'
import { useHistory } from 'react-router-dom';

function Header ({authenticated, setAuthenticated}) {
    const [menu, setMenu] = useState(false);
    const [anchor, setAnchor] = useState("");
    const [signin, setSignin] = useState(false);
    const [signup, setSignup] = useState(false);

    const history = useHistory();

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
                        <MenuItem onClick={() => history.push('/signin')}>Entrar</MenuItem>
                        <hr/>
                        <MenuItem onClick={openSignup}>Cadastrar</MenuItem>
                    </ContainerMenu>
                </ContainerIcon>
                <ContainerButtons>
                    <Button white onClick={() => history.push('/signin')}>Entrar</Button>
                    <Button white onClick={() => openSignup()}>Cadastrar</Button>
                </ContainerButtons>
            </div>
            <Signup signup={signup} setSignup={setSignup} authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Container>
    )
}

export default Header;