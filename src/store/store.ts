import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./gamesSlice/GamesSlice";

export const store = configureStore({
    reducer: {
        games: gamesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;