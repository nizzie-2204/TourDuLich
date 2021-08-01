import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminAPI from "../../../../api/AdminApi/adminAPI";

export const getUnits = createAsyncThunk("unit/getUnits", async () => {
	const result = await adminAPI.getUnits();

	return result.data;
});

export const getUnit = createAsyncThunk("unit/getUnit", async (id) => {
	const result = await adminAPI.getUnit(id);

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
		thunkAPI.dispatch(getDeletedUnits());

		console.log(result.data);

		return result.data;
	}
);

export const restoreDeletedUnit = createAsyncThunk(
	"unit/restoreDeletedUnit",
	async (id, thunkAPI) => {
		// const result = await adminAPI.restoreDeletedUnit(id);
		// console.log(result);
		// // thunkAPI.dispatch(getUnits());
		// // thunkAPI.dispatch(getDeletedUnits());
		// return result.data;
	}
);

export const editUnit = createAsyncThunk(
	"unit/editUnit",
	async (unit, thunkAPI) => {
		const result = await adminAPI.editUnit(unit);

		if (result) {
			thunkAPI.dispatch(getUnits());
		}

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
		selectedUnit: null,
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

		[getUnit.pending]: (state) => {
			state.unitLoading = true;
		},

		[getUnit.fulfilled]: (state, action) => {
			state.unitLoading = false;
			state.unit = action.payload.donvi;
		},

		[editUnit.fulfilled]: (state) => {
			state.unit = null;
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
