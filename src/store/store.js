import { configureStore } from "@reduxjs/toolkit";
import useReducer from './userInfo'

export const store = configureStore({
    reducer : useReducer
})