import React, { FC, useEffect, useState } from "react";
import cl from './HomeGames.module.css';
import HomeGamesCard from "./homeGamesCard/HomeGamesCard";
import { IGame } from "../../../types/types";
import Loader from "../../../components/UI/loader/Loader";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { allGames } from "../../../store/slices";
import { allGamesSelectors } from "../../../store/selectors";

const HomeGames: FC = () => {
    const dispatch = useAppDispatch();
    const games: IGame[] = useAppSelector(allGamesSelectors.selectAll);
    const isGamesLoading = useAppSelector(allGamesSelectors.selectIsLoading);
    const [img, setImg] = useState<string | null>(games?.[0]?.['background_image']);

    useEffect(() => {
        dispatch(allGames.loadGames());

        if (games && games.length > 0 && games[0]?.background_image) {
            setImg(games?.[0]?.['background_image'])
        } else {
            setImg(null)
        }
    }, [dispatch, games])

    const makeBackImg = (img: string) => {
        setImg(img)
    }


    return(
        <section className={cl.games}>
            <div className="container">
                <h1 className={cl.games__title}>Top Games</h1>

                <div className={cl.games__inner}>
                    <div className={cl.games__inner__list}>
                        
                        {games.map(game => 
                            <HomeGamesCard id={game.id} makeBackImg={makeBackImg} rating={game.metacritic} name={game.name} img={game.background_image} key={game.background_image} platforms={game?.platforms}/>
                        )}
                        
                    </div>

                    {img ? <img src={img} className={cl.games__inner__img}/> : <Loader/>}
                </div>
            </div>
        </section>
    )
}


export default HomeGames;
