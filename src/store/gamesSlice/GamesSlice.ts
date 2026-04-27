import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IGame } from "../../types/types";
import Games from "../../API/GamesService";
import { RootState } from "../store";

interface MyKnownError {
    errorMessage: string
}

const gamesAdapter = createEntityAdapter({});

const initialState = gamesAdapter.getInitialState({
    isGamesLoading: false,
    gamesError: null as string | null,
})

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadGames.pending, (state) => {
            state.isGamesLoading = true;
            state.gamesError = null;
        })
        builder.addCase(loadGames.fulfilled, (state, action) => {
            gamesAdapter.addMany(state, action.payload);
            state.isGamesLoading = false;
        })
        builder.addCase(loadGames.rejected, (state, action) => {
            action.payload 
                ? state.gamesError = action.payload.errorMessage
                : state.gamesError = action.error.message || null;

            state.isGamesLoading = false;
        })
    }
}) 

const loadGames = createAsyncThunk<
    IGame[], 
    void, 
    {rejectValue: MyKnownError}
>
    ('load/games', async(_, thunkApi) => {
        try {
            const data: IGame[] = await Games.getAll();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(
                { errorMessage: error instanceof Error 
                    ? error.message 
                    : 'Неизвестная ошибка'
                })
        };
});

const {reducer: gamesReducer} = gamesSlice;

export const getGames = gamesAdapter.getSelectors<RootState>(state => state.games).selectAll
export const getGamesIsLoading = (state: RootState) => (state.games.isGamesLoading);
export const getGamesError = (state: RootState) => (state.games.gamesError);

export default gamesReducer;