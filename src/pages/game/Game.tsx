import React, { FC, useEffect, useState } from "react";
import cl from './Game.module.css';
import { useFetching } from "../../hooks/useFetching";
import Games from "../../API/GamesService";
import { IGame, IGameImg, IGameItem } from "../../types/types";
import { useParams } from "react-router-dom";
import GameIntro from "./gameIntro/GameIntro";
import GameInfo from "./gameInfo/GameInfo";


const Game: FC = () => {
    const params = useParams();
    const [game, setGame] = useState<IGameItem>()
    const [imgs, setImgs] = useState<string[]>()
    const [fetchGame, isGameLoading, gameError] = useFetching(async () => {
        const response: IGameItem = await Games.getGameInfo(params?.id);
        console.log(response)
        
        setGame(response);    
    })
    const [fetchImgs, isImgsLoading, imgsError] = useFetching( async () => {
        const data = await Games.getGameImgs(params?.id);
        const imgsList: string[] = [];
        for(let i = 0; i < data.length; i++) {
            imgsList.push(data[i].image);
        }
        setImgs(imgsList);
    })


    useEffect(() => {
        fetchGame();
        fetchImgs();
    }, [])
    
    console.log(imgs);
    return(
        <section>
            <div className="container">
                <GameIntro imgs={imgs}/>
                <GameInfo game={game}/>
            </div>
        </section>
    )
}


export default Game;