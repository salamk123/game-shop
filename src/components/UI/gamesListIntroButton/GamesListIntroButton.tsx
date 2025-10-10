import React, { FC } from "react";
import cl from './GameListIntroButton.module.css';

interface GamesListIntroButtonProps {
    children: React.ReactNode,
    state: boolean
}

const GamesListIntroButton: FC<GamesListIntroButtonProps> = ({children, state}) => {
    const clName: string[] = [cl.button];
    if (state) {
        clName.push(cl.active)
    } 
    
    return(
        <button className={clName.join(' ')}>{children}</button>
    )
}


export default GamesListIntroButton;