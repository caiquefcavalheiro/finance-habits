import { Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import logo from '../../assets/logo.png'
import { FiMenu} from 'react-icons/fi'
import {ContainerIcon, ContainerButtons, Container, Icon } from './style';
import Button from '../Button';

function Header () {
    const [menu, setMenu] = useState(false);
    const [anchor, setAnchor] = useState("")

    return (
        <Container>
            <img src={logo} alt="logo"/>
            <h1>Finance Habits</h1>
            <div>
                <ContainerIcon>
                    <Icon onClick={(event) => {setMenu(true)
                setAnchor(event.currentTarget)}}><FiMenu/>
                    </Icon>
                    <Menu anchorEl={anchor} id="basic-menu" open={menu} onClose={() => setMenu(false)}>
                        <MenuItem>Entrar</MenuItem>
                        <MenuItem>Cadastrar</MenuItem>
                    </Menu>
                </ContainerIcon>
                <ContainerButtons>
                    <Button>Entrar</Button>
                    <Button>Cadastrar</Button>
                </ContainerButtons>
            </div>
        </Container>
    )
}

export default Header;