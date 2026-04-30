import { RootState } from '../store';
import { allGames, recomGames, popularGames, specialGames } from '../slices';

type GamesSliceState = {
    isGamesLoading: boolean;
    gamesError: string | null;
    ids: any[];
    entities: any;
};

const isGamesSlice = (slice: any): slice is GamesSliceState => {
    return slice && 'gamesError' in slice && 'isGamesLoading' in slice;
};

const createSelectors = (slice: { adapter: any; sliceName: keyof RootState }) => {
    return {
        selectAll: (state: RootState) => 
            slice.adapter.getSelectors().selectAll(state[slice.sliceName] as any),
        selectById: (state: RootState, id: number) => 
            slice.adapter.getSelectors().selectById(state[slice.sliceName], id),
        selectIsLoading: (state: RootState) => {
            const sliceState = state[slice.sliceName];
            
            if (isGamesSlice(sliceState)) {
                return sliceState.isGamesLoading;
            }
            return false; 
        },
        selectError: (state: RootState) => {
            const sliceState = state[slice.sliceName];
            if (isGamesSlice(sliceState)) {
                return sliceState.gamesError;
            }
            return null;
        }
    };
};

export const allGamesSelectors = createSelectors(allGames);
export const popularGamesSelectors = createSelectors(popularGames);
export const recomGamesSelectors = createSelectors(recomGames);
export const specialGamesSelectors = createSelectors(specialGames);