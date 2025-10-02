import React, { FC } from "react";
import cl from './HomeGames.module.css';
import GamesCard from "./gamesCard/GamesCard";

const HomeGames: FC = () => {
    return(
        <section className={cl.games}>
            <div className="container">
                <h1 className={cl.games__title}>Top Games</h1>

                <div className={cl.games__inner}>
                    <div className={cl.games__inner__list}>
                        <GamesCard/>
                    </div>

                    <img className={cl.games__inner__img}/>
                </div>
            </div>
        </section>
    )
}


export default HomeGames;
