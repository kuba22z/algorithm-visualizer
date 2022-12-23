import {createSlice} from '@reduxjs/toolkit'
import {Nullable} from "../utils/types/common";

interface VisualizerState {
    visualDelay?: Nullable<number>
    numbers: any[]
}

const initialState: VisualizerState = {
    visualDelay: null,
    numbers: []
}

export const visualizerSlice = createSlice({
    name: 'visualizer',
    initialState,
    reducers: {
        setNumbers: (state, action) => {
            state.numbers = action.payload
        },
        setVisualDelay: (state, action) => {
            state.numbers = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const {setVisualDelay, setNumbers} = visualizerSlice.actions

export default visualizerSlice.reducer