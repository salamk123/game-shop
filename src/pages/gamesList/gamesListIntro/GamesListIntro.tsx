import React, { FC, useState } from "react";
import cl from './GamesListIntro.module.css';
import GamesListIntroButton from "../../../components/UI/gamesListIntroButton/GamesListIntroButton";
import background from "./gamesListIntroImg/intro_background.jpg"

const GamesListIntro: FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false);


    return(
        <div onMouseOver={() => setIsActive(true)} onMouseOut={() => setIsActive(false)} className={cl.intro}>
            <div className="container">
                <GamesListIntroButton state={isActive}>Открыть</GamesListIntroButton>
            </div>
        </div>
    )
}


export default GamesListIntro;