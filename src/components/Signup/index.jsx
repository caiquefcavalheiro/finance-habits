import { Popover, TextField } from '@mui/material';
import { useState } from 'react';
import { CenterButton, Content, Container } from './styles';

const Signup = () => {
    
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    return (
        <>
        <CenterButton variant="contained" onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}>cadastrar</CenterButton>
        <Container>
        <Popover
            id={open ? "simple-popover" : undefined}
            open={open}
            anchorEl={anchorEl}
            onClose={() => {setAnchorEl(null)}}
            anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }}
        >
        <Content>
        <form>
            <TextField id="outlined-basic" label="Username" variant="outlined" margin="normal" />
            <TextField id="outlined-basic" label="E-mail" variant="outlined" margin="normal" />
            <TextField id="outlined-basic" label="Senha" variant="outlined" margin="normal" />
            <button type="submit">Cadastrar</button>
        </form>
        </Content>
        </Popover>
        </Container>
        </>
    )
}
export default Signup