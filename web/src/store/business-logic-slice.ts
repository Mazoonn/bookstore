import {createSlice} from '@reduxjs/toolkit';

interface IBusinessLogicStore {
    isLoggedIn:boolean
}

export const businessLogicSlice = createSlice({
    name: `businessLogicSlice`,
    initialState: {
        isLoggedIn: undefined,

    } as unknown as IBusinessLogicStore,
    reducers: {
        setIsLoggedInState: (state: IBusinessLogicStore, action) => {
            state.isLoggedIn = action.payload
        },

    }
})

export // Action creators are generated for each case reducer function
const {
    setIsLoggedInState,
} = businessLogicSlice.actions

export default businessLogicSlice.reducer
