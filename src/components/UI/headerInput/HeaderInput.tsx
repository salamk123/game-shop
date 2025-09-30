import React, { FC } from "react";
import cl from "./HeaderInput.module.css";

interface HeaderInputProps {
    placeholder: string,
}

const HeaderInput: FC<HeaderInputProps> = ({placeholder}) => {
    return(
        <input className={cl.input} placeholder={placeholder}/>
    )
}


export default HeaderInput;