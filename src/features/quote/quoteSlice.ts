import { createSlice } from "@reduxjs/toolkit";
import { fetchQuote } from "../api/quoteApi";

const quoteSlice = createSlice({
    name: 'quote',
    initialState: 'Winter is coming...',
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchQuote.pending, () => 'Pending...')
            .addCase(fetchQuote.fulfilled, (_state, action) => action.payload)
            .addCase(fetchQuote.rejected, () => 'Error geting quote')
    },
})

export default quoteSlice.reducer