import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../Button';
import { Container, NextArrowButton, PreviousArrowButton } from './style';

const ListNavButtons = ({list, index, id, type}) => {
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    });

    const [isPreviousDisabled, setIsPreviousDisabled] = useState(false);
    const [isNextDisabled, setIsNextDisabled] = useState(false);
    const history = useHistory();

    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
                
        }
    
        window.addEventListener('resize', handleResize)
    }, [])


    useEffect(() => {
        if(index > 0){
            setIsPreviousDisabled(false);
        }else{
            setIsPreviousDisabled(true);
        }

        if(index < list.length - 1){
            setIsNextDisabled(false);
        }else{
            setIsNextDisabled(true);
        }
    }, [id])

   
    const getPreviousElement = () => {
        if(index > 0){
            if(type === 'habit'){
                history.push(`/habit/${list[index - 1].id}`);
            }else if (type === 'group') {
                history.push(`/groups/${list[index - 1].id}`);
            }
        }
    }

    const getNextElement = () => {
        if(index < list.length - 1){
            if(type === 'habit'){
                history.push(`/habit/${list[index + 1].id}`);
            }else if (type === 'group') {
                history.push(`/groups/${list[index + 1].id}`);
            }
        }
    }
    
    return(
        <Container>
            <PreviousArrowButton position={dimensions} onClick={getPreviousElement} disabled={isPreviousDisabled}/>  
            <NextArrowButton position={dimensions} onClick={getNextElement} disabled={isNextDisabled}/>
            <Button onClick={getPreviousElement} disabled={isPreviousDisabled}>Anterior</Button>
            <Button onClick={getNextElement} disabled={isNextDisabled}>Próximo</Button>
        </Container>
    )
}

export default ListNavButtons
