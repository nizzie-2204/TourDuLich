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

	bookTour: async (dataForm, token) => {
		let formData = new FormData();

		formData.append("dkt_hoten", dataForm.name);
		formData.append("dkt_sdt", dataForm.phone);
		formData.append("dkt_namsinh", dataForm.yearOfBirth);
		formData.append("dkt_gioitinh", dataForm.sex);
		formData.append("dkt_diachi", dataForm.address);
		formData.append("t_id", dataForm.idTour);

		return await axiosClient({
			method: "post",
			url: "/dangkytour",
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${token}`,
			},
			data: formData,
		});
	},

	getBookedTours: async (token) => {
		return await axiosClient({
			method: "get",
			url: "/dangkytour",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
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

	getSupportExpense: async (token) => {
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
