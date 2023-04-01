import thunk from "redux-thunk";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { departmentSlice } from "./slice/departmentSlice";
import { employeeSlice } from "./slice/employeeSlice";

const store = configureStore({
        reducer: {
                department: departmentSlice.reducer,
                employee: employeeSlice.reducer
        },
        middleware: [thunk, logger],
        devTools: process.env.NODE_ENV === 'development',
});

export default store