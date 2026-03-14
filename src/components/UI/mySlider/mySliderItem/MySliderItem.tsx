import React, { FC } from "react";
import cl from './MySliderItem.module.css';

interface MySliderItemProps {
    img: string,
    id: number,
    currentSlideId: number,
    listLength: number
}

const MySliderItem: FC<MySliderItemProps> = ({img, id, currentSlideId, listLength}) => {
    const getPrevId = (currentId: number, length: number): number => 
        currentId === 0 ? length - 1 : currentId - 1;

    const getNextId = (currentId: number, length: number): number => 
        currentId === length - 1 ? 0 : currentId + 1;

    const getClassName = (): string => {
        const baseClass = cl.slider__item;
        
        if (id === currentSlideId) {
            return `${baseClass} ${cl.middle}`;
        }
        if (id === getPrevId(currentSlideId, listLength)) {
            return `${baseClass} ${cl.left}`;
        }
        if (id === getNextId(currentSlideId, listLength)) {
            return `${baseClass} ${cl.right}`;
        }
        if (id < currentSlideId) {
            return `${baseClass} ${cl.offside__left}`
        } 
       
        return `${baseClass} ${cl.offside__rigth}`
        
    };
    
    return(
        <img className={getClassName()} src={img}/>
    )
}


export default MySliderItem;