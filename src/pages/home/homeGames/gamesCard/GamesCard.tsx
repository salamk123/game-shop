import React, {FC} from "react";
import cl from './GamesCard.module.css';

const GamesCard: FC = () => {
    return(
        <section className={cl.games__card}>
            <img className={cl.games__card__img}/>

            <div className={cl.games__card__info}>
                <div className={cl.games__card__info__name}></div>
                
                <div className={cl.games__card__info__platform}></div>
            </div>

            <div className={cl.games__card__rating}></div>
        </section>
    )
}


export default GamesCard;