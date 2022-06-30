import { combineReducers } from "@reduxjs/toolkit";
import authState from './authSlice/index'

export const rootReducer = combineReducers({
    authState,
});

export type RootState = ReturnType<typeof rootReducer>;