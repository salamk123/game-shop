import { createGamesSlice } from "./gamesSlice/GamesSlice";

export const allGames = createGamesSlice('all');
export const recomGames = createGamesSlice('recom');
export const popularGames = createGamesSlice('popular');
export const specialGames = createGamesSlice('special');