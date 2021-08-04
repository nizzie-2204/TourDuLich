import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminUnitAPI from "../../../../api/AdminApi/adminUnitAPI";

export const getEmployees = createAsyncThunk(
	"employee/getEmployees",
	async () => {
		const result = await adminUnitAPI.getEmployees();

		return result.data;
	}
);

export const getEmployee = createAsyncThunk(
	"employee/getEmployee",
	async (id) => {
		const result = await adminUnitAPI.getEmployee(id);

		return result.data;
	}
);

export const deleteEmployee = createAsyncThunk(
	"employee/deleteEmployee",
	async (id, thunkAPI) => {
		const result = await adminUnitAPI.deleteEmployee(id);

		thunkAPI.dispatch(getEmployees());
		thunkAPI.dispatch(getDeletedEmployees());

		return result.data;
	}
);

export const addEmployee = createAsyncThunk(
	"employee/addEmployee",
	async (data, thunkAPI) => {
		const result = await adminUnitAPI.addEmployee(data);

		thunkAPI.dispatch(getEmployees());

		return result.data;
	}
);

export const editEmployee = createAsyncThunk(
	"employee/editEmployee",
	async ({ data, id }, thunkAPI) => {
		const result = await adminUnitAPI.editEmployee({ data, id });

		thunkAPI.dispatch(getEmployees());

		return result.data;
	}
);

export const getDeletedEmployees = createAsyncThunk(
	"employee/getDeletedEmployees",
	async () => {
		const result = await adminUnitAPI.getDeletedEmployees();

		return result.data;
	}
);

export const restoreDeletedEmployee = createAsyncThunk(
	"employee/restoreDeletedEmployee",
	async (id, thunkAPI) => {
		const result = await adminUnitAPI.restoreDeletedEmployee(id);

		thunkAPI.dispatch(getEmployees());
		thunkAPI.dispatch(getDeletedEmployees());

		return result.data;
	}
);

const employeeSlice = createSlice({
	name: "employee",
	initialState: {
		employees: null,
		employeesLoading: false,
		employee: null,
		employeeLoading: false,
		deletedEmployees: null,
		deletedEmployeesLoading: false,
	},
	reducers: {},
	extraReducers: {
		[getEmployees.pending]: (state) => {
			state.employeesLoading = true;
		},

		[getEmployees.fulfilled]: (state, action) => {
			state.employeesLoading = false;
			state.employees = action.payload;
		},

		[getDeletedEmployees.pending]: (state) => {
			state.deletedEmployeesLoading = true;
		},

		[getDeletedEmployees.fulfilled]: (state, action) => {
			state.deletedEmployeesLoading = false;
			state.deletedEmployees = action.payload;
		},

		[getEmployee.pending]: (state) => {
			state.employeeLoading = true;
		},

		[getEmployee.fulfilled]: (state, action) => {
			state.employee = action.payload;
			state.employeeLoading = false;
		},

		[editEmployee.fulfilled]: (state) => {
			state.employee = null;
		},
	},
});

export const {} = employeeSlice.actions;
export default employeeSlice.reducer;
