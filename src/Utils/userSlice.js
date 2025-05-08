import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: null,
        isLoggedIn: false,
        isLoading: false,
        error: null,
    },
    reducers: {
        login: (state, action) => {
            state.userData = action.payload;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.userData = null;
            state.isLoggedIn = false;
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;