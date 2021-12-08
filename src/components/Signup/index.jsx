import { Button, TextField } from '@mui/material';
import { Content } from './styles';
import ReactModal from 'react-modal';

const Signup = () => {

    const CustomStyles = {
        content: {
            width: "310px",
            height: "510px",
            margin: "0 auto",
        }
    }
    
    return (
        <>
        <ReactModal
            isOpen={true}
            style={CustomStyles}
        >
        <Content>
        <form>
            <TextField id="outlined-basic" label="Username" variant="outlined" margin="normal" />
            <TextField id="outlined-basic" label="E-mail" variant="outlined" margin="normal" />
            <TextField id="outlined-basic" label="Senha" variant="outlined" margin="normal" />
            <Button type="submit">Cadastrar</Button>
        </form>
        </Content>
        </ReactModal>
        </>
    )
}
export default Signup