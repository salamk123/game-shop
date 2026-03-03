import React, { FC, useEffect, useState } from "react";
import cl from './GamesList.module.css';
import GamesListIntro from "./gamesListIntro/GamesListIntro";
import { IGame } from "../../types/types";
import Games from "../../API/GamesService";
import GamesListOptions from "./gamesListOptions/GamesListOptions";
import GameListCards from "./gamesListCards/GameListCards";
import { useFetching } from "../../hooks/useFetching";


const GamesList: FC = () => {
    const [games, SetGames] = useState<IGame[]>([]);
    const [recom, setRecom] = useState<IGame[]>([]);
    const [popular, setPopular] = useState<IGame[]>([]);
    const [special, setSpecial] = useState<IGame[]>([]);

    const [fetchRecom, isRecomLoading, recomError] = useFetching( async () => {
        const response = await Games.getRecom();
        setRecom(response.slice(0, 7));
    })

    const [fetchPopular, isPopularLoading, popularError] = useFetching( async () => {
        const response = await Games.getPopular();
        setPopular(response.slice(0, 7));
    })

    const [fetchSpecial, isSpecialLoading, specialError] = useFetching( async () => {
        const response = await Games.getSpecial();
        setSpecial(response.slice(0, 7));
    })

    useEffect(() => {
        fetchPopular();
        fetchRecom();
        fetchSpecial();
    }, [])

    interface IGameList {
        "Рекомендуем": IGame[],
        "Лидеры продаж": IGame[],
        "Специальные предложения": IGame[]
    }

    const gamesList: IGameList = {
        "Рекомендуем": recom,
        "Лидеры продаж": popular,
        "Специальные предложения": special

    }
    const changeGames = (option: string) => {
        if (option === 'Рекомендуем') {
            SetGames(gamesList?.[option]);
        } else if (option === 'Лидеры продаж'){
            SetGames(gamesList?.[option]);
        } else if (option === 'Специальные предложения'){
            SetGames(gamesList?.[option]);
        }
    }



    return(
        <div className={cl.games__list}>
            <GamesListIntro/>
            <GamesListOptions changeGames={changeGames}/>
            <GameListCards games={games}/>
        </div>
    )
}

export default GamesList;