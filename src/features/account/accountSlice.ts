import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: 'account',
    initialState: 0,
    reducers: {
        deposit: (state, action: PayloadAction<number>) => state + action.payload,
        withdraw: (state, action: PayloadAction<number>) => state - action.payload < 0 ? state : state - action.payload
    }
})

export const { deposit, withdraw } = accountSlice.actions;

export default accountSlice.reducer;