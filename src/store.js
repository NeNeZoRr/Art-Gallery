import { configureStore, combineReducers } from '@reduxjs/toolkit';
import dataReducer from './features/dataSlice';
import { logger } from './features/middleware';

const rootReducer = combineReducers({
    data: dataReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
