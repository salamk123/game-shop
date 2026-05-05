import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IGameItem } from "../../../types/types";
import Games from "../../../API/GamesService";
import { RootState } from "../../store";

interface MyKnownError {
    errorMessage: string;
}

interface ISingleGameState {
    entity: IGameItem | undefined | null;
    isGameLoading: boolean;
    gameError: null | string;
}

const initialState: ISingleGameState = {
    entity: null,
    isGameLoading: false,
    gameError: null,
};

const singleGameSlice = createSlice({
    name: 'singleGame',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadSingleGame.pending, (state) => {
            state.isGameLoading = true;
            state.gameError = null;
        });
        builder.addCase(loadSingleGame.fulfilled, (state, action) => {
            state.entity = action.payload;
            state.isGameLoading = false;
        });
        builder.addCase(loadSingleGame.rejected, (state, action) => {
            if (action.payload) {
                state.gameError = action.payload.errorMessage;
            } else {
                state.gameError = action.error.message || 'Неизветная ошибка';
            }

            state.isGameLoading = false;
        });
    }
});

export const loadSingleGame = createAsyncThunk<
    IGameItem,
    string,
    {rejectValue: MyKnownError}
>('load/singleGame', async (id: string, thunkApi) => {
    try {
        const data = Games.getGameInfo(id && id);
        return data
    } catch (error) {
        return thunkApi.rejectWithValue({
            errorMessage: error instanceof Error
                ? error.message
                : 'Неизвестная ошибка'
        })
    };
});


const {reducer: singleGameReducer} = singleGameSlice;

export const getSingleGame = (state: RootState) => state.singleGame.entity;
export const getIsSingleGameLoading = (state: RootState) => state.singleGame.isGameLoading;
export const getSingleGameError = (state: RootState) => state.singleGame.gameError;

export default singleGameReducer