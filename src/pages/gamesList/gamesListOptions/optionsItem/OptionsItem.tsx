import React, { FC, useState } from "react";
import cl from './OptionsItem.module.css';
import { click } from "@testing-library/user-event/dist/click";

interface OptionsItemProps {
    name: string,
    currentOption: string,
    setCurrentOption: React.Dispatch<string>
    setGamesState: React.Dispatch<boolean>
}

const OptionsItem: FC<OptionsItemProps> = ({name, currentOption, setCurrentOption, setGamesState}) => {
    const clName: string[] = [cl.option__item];
    const changeGamesList = (): void => {
        setCurrentOption(name);
        setGamesState(true);
        setTimeout((): void => {
            setGamesState(false);
        }, 300) 
    }

    if (currentOption === name) {
        clName.push(cl.active)  
    }


    return(
        <div className={clName.join(' ')} onClick={changeGamesList}>{name}</div>
    )
}

export default OptionsItem;