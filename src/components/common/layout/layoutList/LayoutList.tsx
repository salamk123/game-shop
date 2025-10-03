import React, { FC } from "react";
import cl from './LayoutList.module.css';
import { IGame } from "../../../../types/types";

interface LayoutListProps {
    title: string,
    games: IGame[]
}

const LayoutList: FC<LayoutListProps> = ({title, games}) => {
    return(
        <section className={cl.layout__list}>
            <div className={cl.layout__list__title}>{title}</div>

            {games.map(game => 
                <div key={game.id} className={cl.layout__list__item}>{game.name}</div>
            )}
        </section>
    )
}


export default LayoutList;