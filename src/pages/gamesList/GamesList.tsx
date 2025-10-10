import React, { FC } from "react";
import cl from './GamesList.module.css';
import GamesListIntro from "./gamesListIntro/GamesListIntro";


const GamesList: FC = () => {
    return(
        <div className={cl.games__list}>
            <GamesListIntro/>
        </div>
    )
}

export default GamesList;