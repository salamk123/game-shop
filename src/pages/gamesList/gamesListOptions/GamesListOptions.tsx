import React, { FC, useState } from "react";
import cl from './GamesListOptions.module.css';
import OptionsItem from "./optionsItem/OptionsItem";
import { IGame } from "../../../types/types";


interface IGameListOprion {
    changeGames: (option: string) => void; 
}

const GamesListOptions: FC<IGameListOprion> = ({changeGames}) => {
    const [currentOptions, setCurrentOption] = useState<string>('Рекомендуем');
    changeGames(currentOptions);

    return(
        <div className={cl.options}>
            <div className="container">
                <div className={cl.options__inner}>
                    <OptionsItem currentOption={currentOptions} setCurrentOption={setCurrentOption} name='Рекомендуем'/>
                    <OptionsItem currentOption={currentOptions} setCurrentOption={setCurrentOption} name='Лидеры продаж'/>
                    <OptionsItem currentOption={currentOptions} setCurrentOption={setCurrentOption} name='Специальные предложения'/>
                </div>
            </div>
        </div>
    )
}


export default GamesListOptions;