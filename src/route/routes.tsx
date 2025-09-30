import React, { FC } from "react";
import Home from "../pages/home/Home";

interface IRoute {
    path: string,
    element: React.ReactNode,
}


export const routes: IRoute[] = [
    {path: '/', element: <Home/>}
]