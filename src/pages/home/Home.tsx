import React, { FC } from "react";
import cl from './Home.module.css';
import HomePlatform from "./homePlatform/HomePlatform";


const Home: FC = () => {
    return(
        <div className={cl.Home}>
            <HomePlatform/>
        </div>
    )
}

export default Home;