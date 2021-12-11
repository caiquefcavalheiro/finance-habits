import { MenuItem } from '@mui/material';
import { useState } from 'react';
import { FiMenu} from 'react-icons/fi'
import {ContainerIcon, ContainerButtons, Container, Icon, ContainerMenu } from './style';
import Button from '../Button'
import Signup from '../Signup'
import { useHistory } from 'react-router-dom';

function Header () {
    const [anchor, setAnchor] = useState("");

    const [signup, setSignup] = useState(false);

    const history = useHistory();

    const [menu, setMenu] = useState(false);

    function ClickIcon (event){
        setMenu(true); 
        setAnchor(event.currentTarget)
    }

    return (
        <Container>
            <h1>Finance Habits</h1>
            <div>
                <ContainerIcon>
                    <Icon onClick={(event) => ClickIcon(event)}><FiMenu />
                    </Icon>
                    <ContainerMenu anchorEl={anchor} id="basic-menu" open={menu} onClose={() => setMenu(false)}>
                        <MenuItem onClick={() => history.push('/signin')}>Entrar</MenuItem>
                        <hr />
                        <MenuItem onClick={() => history.push("/signup")}>Cadastrar</MenuItem>
                </ContainerMenu>
            </ContainerIcon>
            <ContainerButtons>
                <Button white onClick={() => history.push('/signin')}>Entrar</Button>
                <Button white onClick={() => history.push("/signup")}>Cadastrar</Button>
            </ContainerButtons>
            </div>
            <Signup signup={signup} setSignup={setSignup}/>
        </Container>
    )
}

export default Header;