import React, { FC, useEffect, useState } from "react";
import cl from './Game.module.css';
import { useFetching } from "../../hooks/useFetching";
import Games from "../../API/GamesService";
import { IGame, IGameImg, IGameItem } from "../../types/types";
import { useParams } from "react-router-dom";
import GameIntro from "./gameIntro/GameIntro";
import GameInfo from "./gameInfo/GameInfo";


const Game: FC = () => {
    const { id } = useParams();
    
    return(
        <section>
            <div className="container">
                <GameIntro id={id}/>
                <GameInfo id={id}/>
            </div>
        </section>
    )
}


export default Game;