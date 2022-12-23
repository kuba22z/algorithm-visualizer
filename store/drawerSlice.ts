import {createSlice} from "@reduxjs/toolkit";

interface DrawerState {
    mobileOpen: boolean
}

const initialState: DrawerState = {
    mobileOpen: false
}

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        toggleDrawer: (state) => {
            state.mobileOpen = !state.mobileOpen
        }
    },
})

export const {toggleDrawer} = drawerSlice.actions

export default drawerSlice.reducer