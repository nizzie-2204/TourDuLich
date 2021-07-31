import { method } from "lodash";
import axiosClient from "../Axios/axios";

const adminAPI = {
	getUnits: async () => {
		return await axiosClient({
			method: "get",
			url: "/adminsystem/donvi",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
		});
	},

	getUnit: async (id) => {
		return await axiosClient({
			method: "get",
			url: `/adminsystem/donvi/${id}`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
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
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
			data: formData,
		});
	},

	deleteUnit: async (id) => {
		return await axiosClient({
			method: "delete",
			url: `/adminsystem/donvi/${id}`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
		});
	},

	restoreDeletedUnit: async (id) => {
		return await axiosClient({
			method: "put",
			url: `/admin/history/donvi/${id}/restore`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
		});
	},

	getDeletedUnits: async () => {
		return await axiosClient({
			method: "get",
			url: `/admin/history/donvi/`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
		});
	},

	editUnit: async (name, id) => {
		return await axiosClient({
			method: "put",
			url: `/adminsystem/donvi/${id}`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
			body: JSON.stringify(name),
		});
	},
};

export default adminAPI;
