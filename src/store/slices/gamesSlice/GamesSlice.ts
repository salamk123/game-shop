import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IGame } from "../../../types/types";
import Games from "../../../API/GamesService";


interface MyKnownError {
    errorMessage: string
}

type GamesRequestType = 'all' | 'popular' | 'recom' | 'special';

const serviceMap = {
    all: Games.getAll.bind(Games),
    recom: Games.getRecom.bind(Games),
    popular: Games.getPopular.bind(Games),
    special: Games.getSpecial.bind(Games)
}

export function createGamesSlice(requestType: GamesRequestType) {
    const gamesAdapter = createEntityAdapter<IGame>();

    const initialState = gamesAdapter.getInitialState({
        isGamesLoading: false,
        gamesError: null as string | null
    });

    const loadGames = createAsyncThunk<
        IGame[],
        void,
        { rejectValue: MyKnownError }
    >(`load/${requestType}Games`, async (_, thunkApi) => {
        try {
            const data: IGame[] = await serviceMap[requestType]();
            return data
        } catch (error) {
            return thunkApi.rejectWithValue({
                errorMessage: error instanceof Error 
                    ? error.message
                    : 'Неизвестная ошибка' 
            })
        }
    })

    const gamesSlice = createSlice({
        name: `${requestType}Games`,
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(loadGames.pending, (state) => {
                state.isGamesLoading = true;
                state.gamesError = null;
            });
            builder.addCase(loadGames.fulfilled, (state, action) => {
                gamesAdapter.addMany(state, action.payload);
                state.isGamesLoading = false;
            })
            builder.addCase(loadGames.rejected, (state, action) => {
                action.payload
                    ? state.gamesError = action.payload.errorMessage
                    : state.gamesError = action.error.message || "Неизвестная ошибка"
            });
        }
    });

    return {
        reducer: gamesSlice.reducer,
        loadGames,
        sliceName: gamesSlice.name,   
        adapter: gamesAdapter
    }
};

