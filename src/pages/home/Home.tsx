import React, { FC, useEffect, useState } from "react";
import cl from './Home.module.css';
import HomePlatform from "./homePlatform/HomePlatform";
import Games from "../../API/GamesService";
import { IGame } from "../../types/types";
import HomeGames from "./homeGames/HomeGames";


const Home: FC = () => {
    const [games, setGames] = useState<IGame[]>([])

    const fetchGames = async () => {
        const result = await Games.getAll();
        setGames(result.slice(0, 7))
        console.log(result[0]['background_image']);
    }

    useEffect(() => {
        fetchGames()
    }, [])


    return(
        <div className={cl.Home}>
            <HomePlatform/>
            <HomeGames games={games}/>
        </div>
    )
}

export default Home;