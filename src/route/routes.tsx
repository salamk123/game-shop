import React, { FC } from "react";
import Home from "../pages/home/Home";
import GamesList from "../pages/gamesList/GamesList";

interface IRoute {
    path: string,
    element: React.ReactNode,
}


export const routes: IRoute[] = [
    {path: '/', element: <Home/>},
    {path: '/gamesList', element: <GamesList/>}
]