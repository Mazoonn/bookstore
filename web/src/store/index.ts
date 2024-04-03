import {configureStore} from '@reduxjs/toolkit'
import {apiSlice} from "./api-slice";
import businessLogicSliceReducer from './business-logic-slice'


export const Store = configureStore({
    reducer: {
        businessLogic: businessLogicSliceReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

export const state = Store.getState()

export type RootState = ReturnType<typeof Store.getState>
