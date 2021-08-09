import axiosClient from "../Axios/axios";

const adminAPI = {
	getUnits: async () => {
		return await axiosClient({
			method: "get",
			url: "/adminsystem/donvi",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminSystemToken")}`,
			},
		});
	},

	getUnit: async (id) => {
		return await axiosClient({
			method: "get",
			url: `/adminsystem/donvi/${id}`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminSystemToken")}`,
			},
		});
	},

	addUnit: async (name) => {
		let formData = new FormData();

		formData.append("dv_ten", name);

		console.log(formData.get("dv_ten"));

		return await axiosClient({
			method: "post",
			url: "/adminsystem/donvi",
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${localStorage.getItem("adminSystemToken")}`,
			},
			data: formData,
		});
	},

	deleteUnit: async (id) => {
		return await axiosClient({
			method: "delete",
			url: `/adminsystem/donvi/${id}`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminSystemToken")}`,
			},
		});
	},

	restoreDeletedUnit: async (id) => {
		return await axiosClient({
			method: "put",
			url: `/admin/history/donvi/${id}/restore`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminSystemToken")}`,
			},
		});
	},

	getDeletedUnits: async () => {
		return await axiosClient({
			method: "get",
			url: `/admin/history/donvi/`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminSystemToken")}`,
			},
		});
	},

	editUnit: async (unit) => {
		const name = { dv_ten: unit.dv_ten };

		return await axiosClient({
			method: "put",
			url: `/adminsystem/donvi/${unit.id}`,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("adminSystemToken")}`,
			},
			data: JSON.stringify(name),
		});
	},
};

export default adminAPI;
