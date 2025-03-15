import { current } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: 'dark',
    isSidebarOpen: false
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            state.mode === 'dark' ? state.mode = 'light' : state.mode = 'dark';
        },
        toggleSidebar: (state, action) => {
            const status = state.isSidebarOpen;
            state.isSidebarOpen = !status
        }
    }
});

export const {toggleTheme, toggleSidebar} = themeSlice.actions;

export default themeSlice.reducer;