import React, { FC } from "react";
import cl from './GameListCards.module.css';
import CardsItem from "./cardsItem/CardsItem";
import { IGame } from "../../../types/types";

interface GameListCardsProps {
    games: IGame[],
    resetGames: (callback: () => void) => void,
    gamesState: boolean
}

const GameListCards: FC<GameListCardsProps> = ({games, resetGames, gamesState}) => {
    const rootCl: string[] = [ cl.cards, cl.active];
    
    const resetCL = (): void => {
        rootCl.pop();
        setTimeout((): void => {
            rootCl.push(cl.active);
        }, 100)
    }
    gamesState && resetGames(resetCL);

    return(
        <section className={rootCl.join(' ')}>
            <div className="container">
                {games.map(game =>
                    <CardsItem game={game}/>
                )}
            </div>
        </section>
    )
}

export default GameListCards;