import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminUnitAPI from "../../../../api/AdminApi/adminUnitAPI";
import tourAPI from "../../../../api/Tour/tourApi";

export const getTours = createAsyncThunk("adminTour/getTours", async () => {
	const result = await adminUnitAPI.getAllTour();

	return result.data;
});

export const getTour = createAsyncThunk("adminTour/getTour", async (id) => {
	const result = await tourAPI.getTour(id);

	return result.data;
});

export const deleteTour = createAsyncThunk(
	"adminTour/deleteTour",
	async (id, thunkAPI) => {
		const result = await adminUnitAPI.deleteTour(id);

		thunkAPI.dispatch(getTours());
		thunkAPI.dispatch(getDeletedTour());

		return result.data;
	}
);

export const addTour = createAsyncThunk(
	"adminTour/addTour",
	async (tour, thunkAPI) => {
		const result = await adminUnitAPI.addTour(tour);

		thunkAPI.dispatch(getTours());

		return result.data;
	}
);

export const restoreDeletedTour = createAsyncThunk(
	"adminTour/restoreDeletedTour",
	async (id, thunkAPI) => {
		const result = await adminUnitAPI.restoreDeletedTour(id);

		thunkAPI.dispatch(getTours());
		thunkAPI.dispatch(getDeletedTour());

		return result.data;
	}
);

export const getDeletedTour = createAsyncThunk(
	"adminTour/getDeletedTour",
	async () => {
		const result = await adminUnitAPI.getDeletedTour();

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
	async ({ id, mulFiles }) => {
		const result = await adminUnitAPI.addNewPicture({ id, mulFiles });
		console.log(result.data);

		return result.data;
	}
);

export const editTour = createAsyncThunk(
	"adminTour/editTour",
	async ({ data, id }, thunkAPI) => {
		const result = await adminUnitAPI.editTour({ data, id });

		thunkAPI.dispatch(getTours());

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
		deletedTours: null,
		deletedToursLoading: false,
	},
	reducers: {
		cancelGetTour: (state) => {
			state.touLoading = false;
			state.tour = null;
		},
	},
	extraReducers: {
		[getTours.pending]: (state) => {
			state.toursLoading = true;
		},

		[getTours.fulfilled]: (state, action) => {
			state.toursLoading = false;
			state.tours = action.payload;
		},

		[getTour.pending]: (state) => {
			state.tourLoading = true;
		},

		[getTour.fulfilled]: (state, action) => {
			state.touLoading = false;
			state.tour = action.payload.tour;
		},

		[getDeletedTour.pending]: (state) => {
			state.deletedToursLoading = true;
		},

		[getDeletedTour.fulfilled]: (state, action) => {
			state.deletedToursLoading = false;
			state.deletedTours = action.payload.tour;
		},
	},
});

export const { cancelGetTour } = tourSlice.actions;
export default tourSlice.reducer;
