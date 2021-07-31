import axiosClient from "../Axios/axios";

const userAPI = {
	getInfo: async (token) => {
		return await axiosClient({
			method: "get",
			url: "/nhanvien",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	},

	editInfo: async (data, token) => {
		const dataInfo = {
			nv_ten: data.name,
			nv_namsinh: data.yearOfBirth.toString(),
			nv_diachi: data.address,
			nv_sdt: data.phone,
			nv_gioitinh: data.sex,
		};

		return await axiosClient({
			method: "PUT",
			url: "/nhanvien",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			},
			data: JSON.stringify(dataInfo),
		});
	},

	changePassword: async (dataUser, token) => {
		return await axiosClient({
			method: "PUT",
			url: "/nhanvien",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			data: JSON.stringify(dataUser),
		});
	},
};

export default userAPI;
