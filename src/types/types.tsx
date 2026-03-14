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

interface IGenre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
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

export interface IGameItem{
    id: number,
    name: string,
    description: string, 
    description_raw: string,
    metacritic: number,
    released: string,
    updated: string,
    background_image: string,
    background_image_additional: string,
    website: string,
    rating: number,
    platforms: IPlatforms[],
    reviews_text_count: string,
    platfroms: IPlatforms[],
    genres: IGenre[];
    twitch_count: number,
    screenshots_count: number,
    youtube_count: number,

}


export interface IGameImg {
  id: number;
  image: string;
  width: number;
  height: number;
  is_deleted: boolean;
}

