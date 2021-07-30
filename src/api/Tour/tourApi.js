import axiosClient from "../Axios/axios";

const tourAPI = {
	getTours: async (limit) => {
		return await axiosClient({
			method: "get",
			url: `/tour?sort=asc&item=${limit}`,
		});
	},

	getTour: async (id) => {
		return await axiosClient({
			method: "get",
			url: `/tour/${id}`,
		});
	},

	bookTour: async (user, token) => {
		let formData = new FormData();

		console.log(user);
		console.log(token);

		formData.append("dkt_hoten");
		formData.append("dkt_sdt");
		formData.append("dkt_namsinh");
		formData.append("dkt_gioitinh");
		formData.append("dkt_diachi");
		formData.append("t_id");

		// return await axiosClient({
		// 	method: "post",
		// 	url: "/dangkytour",
		// 	headers: {
		// 		"Content-Type": "multipart/form-data",
		// 	},
		// 	data: formData,
		// });
	},

	cancelTour: async (id, token) => {
		return await axiosClient({
			method: "delete",
			url: `dangkytour/${id}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	},

	getSupportMoney: async (token) => {
		return await axiosClient({
			method: "get",
			url: "dangkytour/tienhotro",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	},
};

export default tourAPI;
