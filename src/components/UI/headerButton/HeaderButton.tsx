import React, { FC } from "react";
import cl from './HeaderButton.module.css';

interface HeaderButtonProps {
    children: React.ReactNode;
}


const HeaderButton: FC<HeaderButtonProps> = ({children}) => {
    return(
        <button className={cl.button}>{children}</button>
    )
}


export default HeaderButton;
