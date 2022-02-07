import {configureStore, combineReducers} from '@reduxjs/toolkit';

import movieReducer from "./movie.slice";

const rootReducer = combineReducers({
    movieReducer
});

export const setupStore = () => configureStore({
    reducer: rootReducer
})

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];