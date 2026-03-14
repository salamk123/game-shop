import React, { FC } from "react";
import Home from "../pages/home/Home";
import GamesList from "../pages/gamesList/GamesList";
import Game from "../pages/game/Game";

interface IRoute {
    path: string,
    element: React.ReactNode,
}


export const routes: IRoute[] = [
    {path: '/', element: <Home/>},
    {path: '/gamesList', element: <GamesList/>},
    {path: '/game/:id', element: <Game/>}
]