import React, { FC, useEffect, useState } from "react";
import cl from './GamesList.module.css';
import GamesListIntro from "./gamesListIntro/GamesListIntro";
import { IGame } from "../../types/types";
import Games from "../../API/GamesService";
import GamesListOptions from "./gamesListOptions/GamesListOptions";
import GameListCards from "./gamesListCards/GameListCards";
import { useFetching } from "../../hooks/useFetching";


const GamesList: FC = () => {
    const [games, SetGames] = useState<IGame[]>([])
    const [fetchGames, isGamesLoading, gamesError] = useFetching( async () => {
        const response = await Games.getAll();
        SetGames(response.slice(0, 7));
    })  

    useEffect(() => {
        fetchGames();
    }, [])

    return(
        <div className={cl.games__list}>
            <GamesListIntro/>
            <GamesListOptions/>
            <GameListCards games={games}/>
        </div>
    )
}

export default GamesList;