import React, { FC, useState } from "react";
import cl from './GamesListOptions.module.css';
import OptionsItem from "./optionsItem/OptionsItem";
import { IGame } from "../../../types/types";


interface GameListOprion {
    changeGames: (option: string) => void;
    setGamesState: React.Dispatch<boolean>; 
}

const GamesListOptions: FC<GameListOprion> = ({changeGames, setGamesState}) => {
    const [currentOptions, setCurrentOption] = useState<string>('Рекомендуем');
    changeGames(currentOptions);

    return(
        <div className={cl.options}>
            <div className="container">
                <div className={cl.options__inner}>
                    <OptionsItem currentOption={currentOptions} setCurrentOption={setCurrentOption} setGamesState={setGamesState} name='Рекомендуем'/>
                    <OptionsItem currentOption={currentOptions} setCurrentOption={setCurrentOption} setGamesState={setGamesState} name='Лидеры продаж'/>
                    <OptionsItem currentOption={currentOptions} setCurrentOption={setCurrentOption} setGamesState={setGamesState} name='Специальные предложения'/>
                </div>
            </div>
        </div>
    )
}


export default GamesListOptions;