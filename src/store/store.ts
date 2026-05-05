import { configureStore } from "@reduxjs/toolkit";
import { allGames, recomGames, popularGames, specialGames } from './slices';
import singleGameReducer from "./slices/singleGameSlice/singleGameSlice";
import imagesReducer from "./slices/imagesSlice/ImageSlice";


export const store = configureStore({
    reducer: {
        allGames: allGames.reducer,
        recomGames: recomGames.reducer,
        popularGames: popularGames.reducer,
        specialGames: specialGames.reducer,
        singleGame: singleGameReducer,
        images: imagesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;