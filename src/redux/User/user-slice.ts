import { createSlice } from "@reduxjs/toolkit";

interface IUser {
    name: string;
    email: string;
}

interface IUserState {
    user: IUser | null;
}

const initialState : IUserState = {
    user: null,
}

export const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        // Primeira action: login
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.user = null
        }
    }
});

export const { login, logout } = userSlice.actions;