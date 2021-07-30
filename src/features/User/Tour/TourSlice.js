import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import tourAPI from "../../../api/Tour/tourApi";

export const getTours = createAsyncThunk("tour/getTours", async () => {
	const tours = await tourAPI.getTours();

	return tours.data;
});

export const getToursByPage = createAsyncThunk(
	"tour/getToursByPage",
	async (page) => {
		const tours = await tourAPI.getToursByPage(page);

		return tours.data;
	}
);

export const getFeaturedTours = createAsyncThunk(
	"tour/getFeaturedTours",
	async (limit) => {
		const tours = await tourAPI.getTours(limit);

		return tours.data;
	}
);

export const getTour = createAsyncThunk("tour/getTour", async (id) => {
	const tours = await tourAPI.getTour(id);

	return tours.data;
});

export const bookTour = createAsyncThunk(
	"tour/bookTour",
	async ({ dataForm, token }) => {
		const bookTour = await tourAPI.bookTour(dataForm, token);

		return bookTour.data;
	}
);

export const getBookedTours = createAsyncThunk(
	"tour/getBookedTours",
	async (token) => {
		const result = await tourAPI.getBookedTours(token);

		return result.data;
	}
);

export const cancelTour = createAsyncThunk(
	"tour/cancelTour",
	async ({ id, token }, thunkAPI) => {
		const cancelTour = await tourAPI.cancelTour(id, token);

		if (cancelTour) {
			thunkAPI.dispatch(getBookedTours(token));
		}

		return cancelTour.data;
	}
);

export const getSupportExpense = createAsyncThunk(
	"tour/getSupportMoney",
	async (token) => {
		const getSupportExpense = await tourAPI.getSupportExpense(token);

		console.log(getSupportExpense);

		return getSupportExpense.data;
	}
);

const TourSlice = createSlice({
	name: "tour",
	initialState: {
		tours: null,
		toursLoading: false,
		featuredTours: null,
		featuredToursLoading: false,
		tour: null,
		tourLoading: false,
		bookedTours: null,
		bookedToursLoading: false,
	},
	reducers: {},

	extraReducers: {
		[getTours.pending]: (state) => {
			state.toursLoading = true;
		},

		[getTours.fulfilled]: (state, action) => {
			state.toursLoading = false;
			state.tours = action.payload.data;
		},

		[getFeaturedTours.pending]: (state) => {
			state.featuredToursLoading = true;
		},

		[getFeaturedTours.fulfilled]: (state, action) => {
			state.featuredToursLoading = false;
			state.featuredTours = action.payload.data;
		},

		[getTour.pending]: (state) => {
			state.tourLoading = true;
		},

		[getTour.fulfilled]: (state, action) => {
			state.tourLoading = false;
			state.tour = action.payload.tour;
		},

		[getBookedTours.pending]: (state) => {
			state.bookedToursLoading = true;
		},

		[getBookedTours.fulfilled]: (state, action) => {
			state.bookedToursLoading = false;
			state.bookedTours = action.payload.dangky;
		},

		[getToursByPage.pending]: (state) => {
			state.tourLoading = true;
		},

		[getToursByPage.fulfilled]: (state, action) => {
			state.tourLoading = false;
			state.tours = action.payload.data;
		},
	},
});

export const {} = TourSlice.actions;
export default TourSlice.reducer;
