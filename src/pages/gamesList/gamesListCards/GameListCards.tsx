import React, { FC } from "react";
import cl from './GameListCards.module.css';
import CardsItem from "./cardsItem/CardsItem";
import { IGame } from "../../../types/types";

interface GameListCardsProps {
    games: IGame[]
}

const GameListCards: FC<GameListCardsProps> = ({games}) => {
    return(
        <section className={cl.cards}>
            <div className="container">
                {games.map(game =>
                    <CardsItem game={game}/>
                )}
            </div>
        </section>
    )
}

export default GameListCards;