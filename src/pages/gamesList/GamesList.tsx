import { FC, useEffect, useState } from "react";
import cl from './GamesList.module.css';
import GamesListIntro from "./gamesListIntro/GamesListIntro";
import { IGame } from "../../types/types";
import GamesListOptions from "./gamesListOptions/GamesListOptions";
import GameListCards from "./gamesListCards/GameListCards";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { popularGamesSelectors, recomGamesSelectors, specialGamesSelectors } from "../../store/selectors";
import { popularGames, recomGames, specialGames } from "../../store/slices";


const GamesList: FC = () => {
    const [games, SetGames] = useState<IGame[]>([]);

    const [gamesState, setGamesState] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const recom = useAppSelector(recomGamesSelectors.selectAll).slice(0, 7);
    const popular = useAppSelector(popularGamesSelectors.selectAll).slice(0, 7);
    const special = useAppSelector(specialGamesSelectors.selectAll).slice(0, 7);


    useEffect(() => {
        dispatch(recomGames.loadGames())
        dispatch(popularGames.loadGames())
        dispatch(specialGames.loadGames())
    }, [dispatch])

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

    const resetGames = (callback: () => void): void => {
        callback();
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
            <GamesListOptions setGamesState={setGamesState} changeGames={changeGames}/>
            <GameListCards gamesState={gamesState} resetGames={resetGames} games={games}/>
        </div>
    )
}

export default GamesList;