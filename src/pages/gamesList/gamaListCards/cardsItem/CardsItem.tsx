import React, { FC } from "react";
import cl from './CardsItem.module.css';


const CardsItem: FC = () => {
    return(
        <div className={cl.cards__item}>
            <img className={cl.cards__item__img}/>

            <div className={cl.cards__item__inner}>
                
            </div>
        </div>
    )
}

export default CardsItem;