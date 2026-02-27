import React, { FC } from "react";
import cl from './CardsItem.module.css';
import { IGame } from "../../../../types/types";
import { platform } from "os";

interface CardsItemProps {
    game: IGame
}

const CardsItem: FC<CardsItemProps> = ({game}) => {

    return(
        <div className={cl.cards__item}>
            <img src={game.background_image} className={cl.cards__item__img}/>

            <div className={cl.cards__item__inner}>
                <div className={cl.cards__item__inner__name}>{game.name}</div>

                <div className={cl.cards__item__inner__info}>
                    <div className={cl.cards__item__inner__info__date}>Дата выхода - {game.released}</div>
                    
                    <div className={cl.cards__item__inner__info__review__count}>Количество обзоров - {game.reviews_text_count} reviews</div>
                </div>

                <div className={cl.cards__item__inner__platforms__intro}>Платформы на которых игра была выпущенна:</div>
                
                <div className={cl.cards__item__inner__platforms}>
                    {game.platforms.map(platform => 
                        <div key={platform.platform.name} className={cl.cards__item__inner__platforms__item}>{platform.platform.name}</div>
                    )}
                </div>

                <div className={cl.cards__item__inner__metacritic}>
                    <div className={cl.cards__item__inner__metacritic__name}>Metacritic - </div>
                    
                    <div className={cl.cards__item__inner__metacritic__mark}>{game.metacritic}</div>
                </div>
            </div>
        </div>
    )
}

export default CardsItem;