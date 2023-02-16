import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import certificationSlice from "./slice/certificationSlice"
import careerSlice from "./slice/careerSlice"

const store = configureStore({
    reducer: { certification: certificationSlice.reducer, career: careerSlice.reducer }
})
export default store


export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch


