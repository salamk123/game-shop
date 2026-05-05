import React, { FC, useEffect, useState } from "react";
import cl from './Home.module.css';
import HomePlatform from "./homePlatform/HomePlatform";
import Games from "../../API/GamesService";
import { IGame } from "../../types/types";
import HomeGames from "./homeGames/HomeGames";


const Home: FC = () => {
    return(
        <div className={cl.home}>
            <HomePlatform/>
            <HomeGames/>
        </div>
    )
}

export default Home;