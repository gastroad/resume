import { createSlice } from '@reduxjs/toolkit'
import { fetchCertificationData } from "../api/request"

export const certificationSlice = createSlice({
    name: 'certification',
    initialState: {
        certificationData: [{ name: "", date: "", content: "" }],
        status: "PENDDING"
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCertificationData.fulfilled, (state, action) => {
            state.certificationData = action.payload
            state.status = "FULFILLED"
        })
        builder.addCase(fetchCertificationData.pending, (state) => {
            state.status = "PENDDING"
        })
        builder.addCase(fetchCertificationData.rejected, (state) => {
            state.status = "REJECTED"
        })
    },

})

export default certificationSlice
