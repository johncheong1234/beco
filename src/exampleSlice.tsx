import { createSlice } from '@reduxjs/toolkit';

export const exampleSlice = createSlice({
    name: 'example',
    initialState: {
        inspectionType: 'FIR',
        estate: 'woodlands',
        block: '1',
        inspector: 'bob',
        startDate: '2023-10-01T02:00:00Z',
        endDate: '2023-10-10T02:00:00Z'
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
        },
        setStartDateReducer: (state, action) => {
            state.startDate = action.payload.startDate
        },
        setEndDateReducer: (state, action) => {
            state.endDate = action.payload.endDate
        } 
    }
});

export const {
    setInspectionTypeReducer,
    setEstateReducer,
    setBlockReducer,
    setInspectorReducer,
    setStartDateReducer,
    setEndDateReducer
} = exampleSlice.actions;
export default exampleSlice.reducer;