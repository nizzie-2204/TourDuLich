import axiosClient from "../Axios/axios";

const authAPI = {
	login: async (username, password) => {
		let bodyFormData = new FormData();
		bodyFormData.append("username", username);
		bodyFormData.append("password", password);

		return await axiosClient({
			method: "post",
			url: "/login",
			data: bodyFormData,
			headers: { "Content-Type": "multipart/form-data" },
		});
	},
	logout: async (token) => {
		return await axiosClient("/logout", {
			method: "post",
			url: "/logout",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	},
};

export default authAPI;
