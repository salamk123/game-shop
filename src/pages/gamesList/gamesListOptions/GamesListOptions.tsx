import React, { FC } from "react";
import cl from './GamesListOptions.module.css';
import OptionsItem from "./optionsItem/OptionsItem";


const GamesListOptions: FC = () => {
    return(
        <div className={cl.options}>
            <div className="container">
                <div className={cl.options__inner}>
                    <OptionsItem name='Рекомендуем'/>
                    <OptionsItem name='Лидеры продаж'/>
                    <OptionsItem name='Специальные предложения'/>
                </div>
            </div>
        </div>
    )
}


export default GamesListOptions;