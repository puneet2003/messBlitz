import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    complaints: [],
};

const complaintSlice = createSlice({
    name: "complaints",
    initialState,
    reducers: {
        add_complaint: (state, action) => {
            state.complaints.push(action.payload);
        },
        get_my_complaints: (state,action) => {
            state.myComplaints = action.payload
        },
        get_all_complaints: (state,action) => {
            state.complaints = action.payload
        }
    }
});

export const { add_complaint, get_my_complaints, get_all_complaints } = complaintSlice.actions;
export default complaintSlice.reducer;
