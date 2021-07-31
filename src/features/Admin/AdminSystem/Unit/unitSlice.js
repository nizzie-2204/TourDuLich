import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminAPI from "../../../../api/AdminApi/adminAPI";

export const getUnits = createAsyncThunk("unit/getUnits", async () => {
	const result = await adminAPI.getUnits();

	return result.data;
});

export const getDeletedUnits = createAsyncThunk(
	"unit/getDeletedUnits",
	async () => {
		const result = await adminAPI.getDeletedUnits();

		return result.data;
	}
);

export const addUnit = createAsyncThunk(
	"unit/addUnit",
	async (name, thunkAPI) => {
		const result = await adminAPI.addUnit(name);

		thunkAPI.dispatch(getUnits());

		return result.data;
	}
);

export const deleteUnit = createAsyncThunk(
	"unit/deleteUnit",
	async (id, thunkAPI) => {
		const result = await adminAPI.deleteUnit(id);

		thunkAPI.dispatch(getUnits());
		// thunkAPI.dispatch(getDeletedUnits());

		return result.data;
	}
);

export const restoreDeletedUnit = createAsyncThunk(
	"unit/restoreDeletedUnit",
	async (id, thunkAPI) => {
		const result = await adminAPI.restoreDeletedUnit(id);

		// thunkAPI.dispatch(getUnits());
		thunkAPI.dispatch(getDeletedUnits());

		return result.data;
	}
);

const unitSlice = createSlice({
	name: "unit",
	initialState: {
		units: null,
		unitsLoading: false,
		deletedUnits: null,
		deletedUnitsLoading: false,
		unit: null,
		unitLoading: false,
	},
	reducers: {},
	extraReducers: {
		[getUnits.pending]: (state) => {
			state.unitsLoading = true;
		},

		[getUnits.fulfilled]: (state, action) => {
			state.unitsLoading = false;
			state.units = action.payload;
		},

		[getDeletedUnits.pending]: (state) => {
			state.deletedUnitsLoading = true;
		},

		[getDeletedUnits.fulfilled]: (state, action) => {
			state.deletedUnitsLoading = false;
			state.deletedUnits = action.payload.donvi;
		},
	},
});

export const {} = unitSlice.actions;
export default unitSlice.reducer;
