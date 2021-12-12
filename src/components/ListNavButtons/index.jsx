import { useEffect, useState } from 'react';

import {useHabitId} from '../../providers/HabitId';
import Button from '../Button';
import { Container, NextArrowButton, PreviousArrowButton } from './style';

const ListNavButtons = ({list, index}) => {
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    });

    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
                
        }
    
        window.addEventListener('resize', handleResize)
    }, [])

    const {setCurrentId} = useHabitId();
   
    const getPreviousElement = () => {
        if(index > 0){
            setCurrentId(list[index - 1].id);
        }
    }
    
    const getNextElement = () => {
        if(index < list.length - 1){
            setCurrentId(list[index + 1].id)
        }
    }
    
    return(
        <Container>
            <PreviousArrowButton position={dimensions} onClick={getPreviousElement} />  
            <NextArrowButton position={dimensions} onClick={getNextElement}/>
            <Button onClick={getPreviousElement}>Anterior</Button>
            <Button onClick={getNextElement}>Próximo</Button>
        </Container>
    )
}

export default ListNavButtons