import React, { FC } from "react";
import cl from './PlatformButton.module.css';


interface PlatformButtonProps {
    children: React.ReactNode
}

const PlatformButton: FC<PlatformButtonProps> = ({children}) => {
    return(
        <button className={cl.button}>{children}</button>
    )
}


export default PlatformButton;