import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { employeeApi } from "../../API/employeeApi";

export const getAllEmployee = createAsyncThunk('department/getAllEmployee', async () => {
        const data = await employeeApi.getAllEmployee();
        return data;
})

export const addEmployee = createAsyncThunk('department/addEmployee', async (body) => {
        const data = await employeeApi.addEmployee(body);
        return data;
})

export const updateEmployee = createAsyncThunk('department/updateEmployee', async (body) => {
        const data = await employeeApi.updateEmployee(body);
        return data;
})

export const employeeSlice = createSlice({
        name: 'employee',
        initialState: {
                employees: [],
                isChangeEmp: false,
                isCallForm: false,
                message: ''
        },
        reducers: {
                callForm: (state, action) => {
                        state.isCallForm = action.payload
                }
        },
        extraReducers: {
                [getAllEmployee.fulfilled]: (state, action) => {
                        state.employees = action.payload;
                        state.isChangeEmp = false; 
                },
                [getAllEmployee.rejected]: (state, action) => {

                },

                [addEmployee.fulfilled]: (state, action) => {
                        state.message = action.payload;
                        state.isChangeEmp = true;
                },
                [addEmployee.rejected]: (state, action) => {

                },

                [updateEmployee.fulfilled]: (state, action) => {
                        state.message = action.payload;
                        state.isChangeEmp = true;
                },
                [updateEmployee.rejected]: (state, action) => {

                },
        }
});

export const {
        callForm
} = employeeSlice.actions;