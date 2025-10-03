import React, { FC } from "react";
import cl from './HomeGames.module.css';
import GamesCard from "./gamesCard/GamesCard";
import { IGame } from "../../../types/types";

interface HomeGamesProps {
    games: IGame[]
}

const HomeGames: FC<HomeGamesProps> = ({games}) => {

    return(
        <section className={cl.games}>
            <div className="container">
                <h1 className={cl.games__title}>Top Games</h1>

                <div className={cl.games__inner}>
                    <div className={cl.games__inner__list}>
                        
                        {games.map(game => 
                            <GamesCard rating={game.metacritic} name={game.name} img={game.background_image} key={game.background_image} platforms={game?.platforms}/>
                        )}
                        
                    </div>

                    <img src={games?.[0]?.['background_image']} className={cl.games__inner__img}/>
                </div>
            </div>
        </section>
    )
}


export default HomeGames;
