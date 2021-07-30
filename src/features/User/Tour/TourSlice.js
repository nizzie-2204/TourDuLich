import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import tourAPI from "../../../api/Tour/tourApi";

export const getTours = createAsyncThunk("tour/getTours", async (limit) => {
	const tours = await tourAPI.getTours(limit);

	return tours.data;
});

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
	async ({ user, token }) => {
		const bookTour = await tourAPI.bookTour(user, token);

		return bookTour.data;
	}
);

export const cancelTour = createAsyncThunk(
	"tour/cancelTour",
	async ({ id, token }) => {
		const cancelTour = await tourAPI.cancelTour(id, token);

		return cancelTour.data;
	}
);

export const getSupportMoney = createAsyncThunk(
	"tour/getSupportMoney",
	async (token) => {
		const getSupportMoney = await tourAPI.getSupportMoney(token);

		return getSupportMoney.data;
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
	},
});

export const {} = TourSlice.actions;
export default TourSlice.reducer;
