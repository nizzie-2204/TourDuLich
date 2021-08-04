import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminUnitAPI from "../../../../api/AdminApi/adminUnitAPI";

export const getInfoPeriod = createAsyncThunk(
	"adminExpense/getInfoPeriod",
	async () => {
		const result = await adminUnitAPI.getInfoPeriod();

		return result.data;
	}
);

export const addPeriod = createAsyncThunk(
	"adminExpense/addPeriod",
	async (data, thunkAPI) => {
		const result = await adminUnitAPI.addPeriod(data);

		thunkAPI.dispatch(getInfoPeriod());

		return result.data;
	}
);

export const editPeriod = createAsyncThunk(
	"adminExpense/editPeriod",
	async ({ data, id }, thunkAPI) => {
		const result = await adminUnitAPI.editPeriod({ data, id });
		thunkAPI.dispatch(getInfoPeriod());
		return result.data;
	}
);

export const deletePeriod = createAsyncThunk(
	"adminExpense/deleltePeriod",
	async (id, thunkAPI) => {
		const result = await adminUnitAPI.deletePeriod(id);
		thunkAPI.dispatch(getInfoPeriod());
		return result.data;
	}
);

export const addSupportExpense = createAsyncThunk(
	"adminExpense/addSupportExpense",
	async (data, thunkAPI) => {
		const result = await adminUnitAPI.addSupportExpense(data);

		thunkAPI.dispatch(getInfoPeriod());

		return result.data;
	}
);

export const editSupportExpense = createAsyncThunk(
	"adminExpense/editSupportExpense",
	async ({ data, id }, thunkAPI) => {
		const result = await adminUnitAPI.editSupportExpense({ data, id });

		thunkAPI.dispatch(getInfoPeriod());

		return result.data;
	}
);

export const deleteSupportExpense = createAsyncThunk(
	"adminExpense/deleteSupportExpense",
	async (id, thunkAPI) => {
		// const result = await adminUnitAPI.deleteSupportExpense(id);
		// thunkAPI.dispatch(getInfoPeriod());
		// return result.data;
	}
);

const expenseSlice = createSlice({
	name: "adminExpense",
	initialState: {
		periods: null,
		periodsLoading: false,
		period: null,
		periodLoading: false,
		expense: null,
		expenseLoading: false,
	},
	reducers: {
		setPeriod: (state, action) => {
			state.period = action.payload;
		},

		unSetPeriod: (state) => {
			state.period = null;
		},

		setExpense: (state, action) => {
			state.expense = action.payload;
		},

		unSetExpense: (state) => {
			state.expense = null;
		},
	},
	extraReducers: {
		[getInfoPeriod.pending]: (state) => {
			state.periodsLoading = true;
		},
		[getInfoPeriod.fulfilled]: (state, action) => {
			state.periodsLoading = false;
			state.periods = action.payload;
		},
	},
});

export const { setPeriod, unSetPeriod, setExpense, unSetExpense } =
	expenseSlice.actions;
export default expenseSlice.reducer;
