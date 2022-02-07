import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';

import {movieService} from "../services";
import {IGenre, IMovie, IMovieState, IResponse} from "../interfaces";

const initialState: IMovieState = {
    response: null,
    movies: [],
    genres: [],
    status: null,
    error: null
}

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll();
            dispatch(setMovies({response: data}));

        } catch (e) {
            return rejectWithValue((e as Error).message);
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',

    initialState,

    reducers: {
        setMovies: (state, action:PayloadAction<{ response: IResponse }>) => {
            state.response = action.payload.response;
            state.movies = action.payload.response.results;
        }
    },

    extraReducers: (builder) => {

        builder.addCase(getAllMovies.pending, (state, action) => {
            state.status = 'loading';
            state.error = null;
        });

        builder.addCase(getAllMovies.fulfilled, (state, action) => {
            state.status = 'fulfilled';
        });

        builder.addCase(getAllMovies.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        });

    }
});

export const {setMovies} = movieSlice.actions;

const movieReducer = movieSlice.reducer;

export default movieReducer;