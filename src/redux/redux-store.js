import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user';
import orgReducer from './org'
import redactorReducer from './redactor';
import volReducer from './volunteer'

export const store = configureStore({
    reducer: {
        user: userReducer,
        org: orgReducer,
        redactor: redactorReducer,
        vol: volReducer
    }
})