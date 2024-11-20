import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  user: JSON.parse(localStorage.getItem('user')) || null,
}
export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        loginUser : (state, action) => {
            state.isLoggedIn = true
            state.user = action.payload
        },
        logoutUser : (state) => {
            state.isLoggedIn = false
            state.user = null
        }
    }
})
export const {loginUser , logoutUser} = userSlice.actions

export default userSlice.reducer