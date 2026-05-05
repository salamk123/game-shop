import React, { FC, useEffect } from "react";
import cl from './LayoutList.module.css';
import { useAppDispatch, useAppSelector } from "../..//../../hooks/redux";
import { allGamesSelectors } from "../..//../../store/selectors";
import { allGames } from "../..//../../store/slices";
import { IGame } from "../../../../types/types";

interface LayoutListProps {
    title: string,
}

const dispatch = useAppDispatch();
const games: IGame[] = useAppSelector(allGamesSelectors.selectAll);
const gamesList: IGame[] = games.slice(0, 7);
const gamesLoading: boolean = useAppSelector(allGamesSelectors.selectIsLoading);

useEffect(() => {
    dispatch(allGames.loadGames());
}, [dispatch])

const LayoutList: FC<LayoutListProps> = ({title}) => {
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