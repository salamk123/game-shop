import React, {FC} from "react";
import cl from './GamesCard.module.css';

interface GamesCardProps {
    name: string,
    img: string,
    rating: number,
    platforms: {
        platform: {name: string},
    }[]
}

const GamesCard: FC<GamesCardProps> = ({name, img, rating, platforms}) => {
    return(
        <section className={cl.games__card}>
            <img src={img} className={cl.games__card__img}/>

            <div className={cl.games__card__info}>
                <div className={cl.games__card__info__name}>{name}</div>
                
                <div className={cl.games__card__info__platfrom}>{platforms.slice(0,4).map((item, index) => 
                    <div key={index} className={cl.games__card__info__platform__txt}>{item.platform.name}</div>
                )}
                </div>
            </div>

            <div className={cl.games__card__rating}>{rating}</div>
        </section>
    )
}


export default GamesCard;