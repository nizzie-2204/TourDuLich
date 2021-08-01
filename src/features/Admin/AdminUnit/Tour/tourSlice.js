import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminUnitAPI from "../../../../api/AdminApi/adminUnitAPI";

export const getTours = createAsyncThunk("adminTour/getTours", async () => {
	const result = await adminUnitAPI.getAllTour();

	return result.data;
});

export const deleteTour = createAsyncThunk(
	"adminTour/deleteTour",
	async (id, thunkAPI) => {
		const result = await adminUnitAPI.deleteTour(id);

		if (result) {
			thunkAPI.dispatch(getTours());
		}

		return result.data;
	}
);

export const addTour = createAsyncThunk("adminTour/addTour", async (tour) => {
	const result = await adminUnitAPI.addTour(tour);

	return result.data;
});

export const restoreDeletedTour = createAsyncThunk(
	"adminTour/restoreDeletedTour",
	async (id) => {
		const result = await adminUnitAPI.restoreDeletedTour(id);

		return result.data;
	}
);

export const getDeletedTour = createAsyncThunk(
	"adminTour/getDeletedTour",
	async (tour) => {
		const result = await adminUnitAPI.getDeletedTour(tour);

		return result.data;
	}
);

export const deleteTourPicture = createAsyncThunk(
	"adminTour/deleteTourPicture",
	async (idTour, idPicture) => {
		const result = await adminUnitAPI.deleteTourPicture(idTour, idPicture);

		return result.data;
	}
);

export const editTourPicture = createAsyncThunk(
	"adminTour/editTourPicture",
	async (idTour, idPicture) => {
		const result = await adminUnitAPI.editTourPicture(idTour, idPicture);

		return result.data;
	}
);

export const addNewPicture = createAsyncThunk(
	"adminTour/addNewPicture",
	async (idTour) => {
		const result = await adminUnitAPI.addNewPicture(idTour);

		return result.data;
	}
);

export const editTour = createAsyncThunk(
	"adminTour/editTour",
	async (idTour, infoTour) => {
		const result = await adminUnitAPI.editTour(idTour, infoTour);

		return result.data;
	}
);

export const getBookedTour = createAsyncThunk(
	"adminTour/getBookedTour",
	async () => {
		const result = await adminUnitAPI.getBookedTour();

		return result.data;
	}
);

const tourSlice = createSlice({
	name: "adminTour",
	initialState: {
		tours: null,
		toursLoading: false,
		tour: null,
		tourLoading: false,
	},
	reducers: {},
	extraReducers: {
		[getTours.pending]: (state) => {
			state.tourLoading = true;
		},

		[getTours.fulfilled]: (state, action) => {
			state.tourLoading = false;
			state.tours = action.payload;
		},
	},
});

export const {} = tourSlice.actions;
export default tourSlice.reducer;
