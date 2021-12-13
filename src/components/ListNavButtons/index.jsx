import { useEffect, useState } from 'react';

import {useHabitId} from '../../providers/HabitId';
import Button from '../Button';
import { Container, NextArrowButton, PreviousArrowButton } from './style';

const ListNavButtons = ({list, index}) => {
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    });

    const [isPreviousDisabled, setIsPreviousDisabled] = useState(false);
    const [isNextDisabled, setIsNextDisabled] = useState(false);

    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
                
        }
    
        window.addEventListener('resize', handleResize)
    }, [])

    const {currentId, setCurrentId} = useHabitId();

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
    }, [currentId])

   
    const getPreviousElement = () => {
        if(index > 0){
            setCurrentId(list[index - 1].id);
        //     setIsNextDisabled(false);
        // }else{
        //     setIsPreviousDisabled(true);
        }
    }
    
    const getNextElement = () => {
        if(index < list.length - 1){
            setCurrentId(list[index + 1].id)
        //     setIsPreviousDisabled(false);
        // }else{
        //     setIsNextDisabled(true);
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