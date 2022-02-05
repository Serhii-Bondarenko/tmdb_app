import {configureStore, combineReducers} from '@reduxjs/toolkit';

const rootReducer = combineReducers({

});

export const setupStore = () => configureStore({
    reducer: rootReducer
})

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];