import { createSlice } from '@reduxjs/toolkit';
import { stderr } from 'process';

export const exampleSlice = createSlice({
    name: 'example',
    initialState: {
        inspectionType: 'FIR',
        estate: 'woodlands',
        block: '1',
        inspector: 'bob'
    },
    reducers: {
        setInspectionTypeReducer: (state, action) => {
            state.inspectionType = action.payload.inspectionType;
        },
        setEstateReducer: (state, action) => {
            state.estate = action.payload.estate;
        },
        setBlockReducer: (state,action) => {
            state.block = action.payload.block
        },
        setInspectorReducer: (state,action) => {
            state.inspector = action.payload.inspector
        }
    }
});

export const {
    setInspectionTypeReducer,
    setEstateReducer,
    setBlockReducer,
    setInspectorReducer
} = exampleSlice.actions;
export default exampleSlice.reducer;