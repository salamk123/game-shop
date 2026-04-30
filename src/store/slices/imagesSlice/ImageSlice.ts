import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IGameImg } from "../../../types/types";
import Games from "../../../API/GamesService";
import { RootState } from "../../store";

interface MyKnownError {
    errorMessage: string
}

const imagesAdapter = createEntityAdapter();

const initialState = imagesAdapter.getInitialState({
    isImagesLoading: false,
    imagesError: null as string | null
});

const loadImages = createAsyncThunk<
    IGameImg[],
    string,
    {rejectValue: MyKnownError}
>(`load/images`, async (id: string, thunkApi) => {
    try{
        const images: IGameImg[] = await Games.getGameImgs(id);
        return images;
    } catch (error) {
        return thunkApi.rejectWithValue({
            errorMessage: error instanceof Error
                ? error.message
                : 'Неизвестная ошибка' 
        })
    }
})

const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadImages.pending, (state) => {
            state.isImagesLoading = true;
            state.imagesError = null;
        });
        builder.addCase(loadImages.fulfilled, (state, action) => {
            imagesAdapter.addMany(state, action.payload);
            state.isImagesLoading = false;
        });
        builder.addCase(loadImages.rejected, (state, action) => {
            action.payload
                ? state.imagesError = action.payload.errorMessage
                : state.imagesError = action.error.message || 'Неизветная ошибка'
        });
    }
})


const getImages = (state: RootState) => imagesAdapter.getSelectors().selectAll(state.images);
const getIsImagesLoading = (state: RootState) => state.images.isImagesLoading;
const getImagesError = (state: RootState) => state.images.imagesError;

const {reducer: imagesReducer} = imagesSlice;

export default imagesReducer;