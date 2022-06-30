import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../types";
import { AUTH_STATE } from "../actionTypes";

const intitialAuthState: AuthState = {
    token: null
}

const authState = createSlice({
    name: AUTH_STATE,
    initialState: intitialAuthState,
    reducers: {
        updateAuthState: (state : AuthState, action : PayloadAction<AuthState>) => {
            Object.assign(state, action.payload);
        },
        clearAuthState: (state : AuthState, action : PayloadAction<AuthState>) => {
            Object.assign(state, intitialAuthState);
        }
    }
})

export const { updateAuthState, clearAuthState } = authState.actions;
export default authState.reducer;