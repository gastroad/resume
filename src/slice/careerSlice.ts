import { createSlice } from '@reduxjs/toolkit'

import { fetchCarrerData } from "api/request"

export const carrerSlice = createSlice({
    name: 'carrer',
    initialState: {
        carrerData: [{
            title: "",
            startDate: "",
            endDate: "",
            content: ""
        }],
        status: "PENDDING"
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCarrerData.fulfilled, (state, action) => {
            state.carrerData = action.payload
            state.status = "FULFILLED"
        })
        builder.addCase(fetchCarrerData.pending, (state) => {
            state.status = "PENDDING"
        })
        builder.addCase(fetchCarrerData.rejected, (state) => {
            state.status = "REJECTED"
        })
    },

})

export default carrerSlice
