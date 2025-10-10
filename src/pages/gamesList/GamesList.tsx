import React, { FC, useEffect, useState } from "react";
import cl from './GamesList.module.css';
import GamesListIntro from "./gamesListIntro/GamesListIntro";
import { IGame } from "../../types/types";
import Games from "../../API/GamesService";
import GamesListOptions from "./gamesListOptions/GamesListOptions";


const GamesList: FC = () => {
    const [games, SetGames] = useState<IGame[]>([])

    const fetching = async () => {
        const response = await Games.getAll();
        SetGames(response.slice(0, 7));
    }

    useEffect(() => {
        fetching();
    }, [])

    return(
        <div className={cl.games__list}>
            <GamesListIntro/>
            <GamesListOptions/>
        </div>
    )
}

export default GamesList;