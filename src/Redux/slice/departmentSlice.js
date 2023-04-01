import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { departmentApi } from "../../API/departmentApi";

export const getAllDepartment = createAsyncThunk('department/getAllDepartment', async () => {
        const data = await departmentApi.getAllDepartment();
        return data;
})

export const addDepartment = createAsyncThunk('department/addDepartment', async (body) => {
        const data = await departmentApi.addDepartment(body);
        return data;
})

export const deleteDepartment = createAsyncThunk('department/deleteDepartment', async (id) => {
        const data = await departmentApi.deleteDepartment(id);
        return data;
})

export const departmentSlice = createSlice({
        name: 'department',
        initialState: {
                departments: [],
                isChangeDepDep: false,
                isCallForm: false,
                employees: [],
                message: ''
        },
        reducers: {
                callForm: (state, action) => {
                        state.isCallForm = action.payload
                },
                displayEmployee: (state, action) => {
                        const departments = state.departments;
                        state.employees = departments.filter(d => d.name === action.payload)[0]['employees']
                }
        },

        extraReducers: {
                [getAllDepartment.fulfilled]: (state, action) => {
                        state.departments = action.payload;
                        state.isChangeDep = false;
                },
                [getAllDepartment.rejected]: (state, action) => {

                },

                [addDepartment.fulfilled]: (state, action) => {
                        state.message = action.payload;
                        state.isChangeDep = true;
                },
                [addDepartment.rejected]: (state, action) => {

                },

                [deleteDepartment.fulfilled]: (state, action) => {
                        state.message = action.payload;
                        state.isChangeDep = true;
                },
                [deleteDepartment.rejected]: (state, action) => {

                },
        }
});

export const {
        callForm,
        displayEmployee
} = departmentSlice.actions;