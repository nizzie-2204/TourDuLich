import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../api/Auth/authApi";

export const login = createAsyncThunk(
	"auth/login",
	async ({ username, password }) => {
		const authUser = await authAPI.login(username, password);

		return authUser.data;
	}
);

export const logout = createAsyncThunk("auth/logout", async () => {
	const authUser = await authAPI.logout();
	return authUser.data;
});

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: null,
		error: null,
	},
	reducer: {},
	extraReducers: {
		[login.fulfilled]: (state, action) => {
			// state.user = action.payload.message;
		},

		[login.rejected]: (state, action) => {
			// state.error = action.payload.message;
		},
	},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
