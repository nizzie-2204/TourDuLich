import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "../../api/Auth/authApi";
import userAPI from "../../api/UserApi/userApi";

export const login = createAsyncThunk(
	"auth/login",
	async ({ username, password }) => {
		const authUser = await authAPI.login(username, password);
		return authUser.data;
	}
);

export const logout = createAsyncThunk("auth/logout", async (token) => {
	const authUser = await authAPI.logout(token);
	return authUser.data;
});

export const getUserInfo = createAsyncThunk(
	"auth/getUserInfo",
	async (token) => {
		const userInfo = await userAPI.getInfo(token);
		return userInfo.data;
	}
);

export const editUserInfo = createAsyncThunk(
	"auth/editUserInfo",
	async ({ data, token }, thunkAPI) => {
		const userInfo = await userAPI.editInfo(data, token);

		if (userInfo) {
			thunkAPI.dispatch(getUserInfo(token));
		}

		return userInfo.data;
	}
);

export const changeUserPassword = createAsyncThunk(
	"auth/changeUserPassword",
	async ({ dataUser, token }) => {
		const userInfo = await userAPI.changePassword(dataUser, token);
		return userInfo.data;
	}
);

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: null,
		authLoading: false,
		isAuthenticated: false,
		error: null,
	},
	reducer: {},
	extraReducers: {
		[login.fulfilled]: (state, action) => {
			state.isAuthenticated = true;
			state.user = action.payload.message;
		},

		[login.rejected]: (state, action) => {
			state.error = action.payload.message;
		},

		[getUserInfo.pending]: (state) => {
			state.authLoading = true;
		},

		[getUserInfo.fulfilled]: (state, action) => {
			state.user = action.payload.nhanvien;
			state.isAuthenticated = true;
			state.authLoading = false;
		},

		[getUserInfo.rejected]: (state, action) => {
			state.authLoading = false;
			state.isAuthenticated = false;
		},

		[logout.fulfilled]: (state) => {
			state.user = null;
			state.isAuthenticated = false;
		},
	},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
