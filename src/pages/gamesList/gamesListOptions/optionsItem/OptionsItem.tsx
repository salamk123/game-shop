import React, { FC, useState } from "react";
import cl from './OptionsItem.module.css';
import { click } from "@testing-library/user-event/dist/click";

interface OptionsItemProps {
    name: string,
    currentOption: string,
    setCurrentOption: React.Dispatch<string>
}

const OptionsItem: FC<OptionsItemProps> = ({name, currentOption, setCurrentOption}) => {
    const clName: string[] = [cl.option__item];

    if (currentOption === name) {
        clName.push(cl.active)  
    }


    return(
        <div className={clName.join(' ')} onClick={() => setCurrentOption(name)}>{name}</div>
    )
}

export default OptionsItem;