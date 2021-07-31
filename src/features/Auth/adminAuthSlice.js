import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "../../api/Auth/authApi";

export const login = createAsyncThunk(
	"adminAuth/login",
	async ({ username, password }) => {
		const authAdmin = await authAPI.login(username, password);
		return authAdmin.data;
	}
);

export const logout = createAsyncThunk("adminAuth/logout", async (token) => {
	const authAdmin = await authAPI.logout(token);
	return authAdmin.data;
});

const adminAuthSlice = createSlice({
	name: "adminAuth",
	initialState: {
		admin: null,
		authLoading: false,
		isAdminSystem: false,
		isAdminUnit: false,
	},
	reducers: {},
	extraReducers: {},
});

export const {} = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
