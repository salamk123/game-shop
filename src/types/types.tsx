import React from "react";

interface IPlatforms {
    platform: IPlatform,
    released_at: string,
    requirements_ru?: IRequire
}

interface IPlatform {
    id: number,
    slug: string,
    name: string
}

interface IRequire{
    minimum: string,
    recommended: string
}

export interface IGame {
    id: number,
    slug: string,
    name: any,
    released: string,
    background_image: string,
    rating: number,
    rating_top: string,
    ratings_count: number,
    reviews_text_count: string,
    added: number,
    metacritic: number,
    playtime: number,
    platforms: IPlatforms[]
}