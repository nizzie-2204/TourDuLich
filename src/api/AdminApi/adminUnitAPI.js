import axiosClient from "../Axios/axios";

const adminUnitAPI = {
	// Tour
	deleteTour: async (id) => {
		return await axiosClient({
			method: "delete",
			url: `/admin/tour/${id}`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
		});
	},

	addTour: async (tour) => {
		let formData = new FormData();

		formData.append("t_ten", tour.name);
		formData.append("t_soluong", tour.quantity);
		formData.append("t_mota", tour.desc);
		formData.append("t_tgbatdaudk", tour.startBookDate);
		formData.append("t_tgketthucdk", tour.endBookDate);
		formData.append("t_ngaybatdau", tour.startDate);

		formData.append("t_ngayketthuc", tour.endBookDate);
		formData.append("t_gia", parseInt(tour.price));
		formData.append("dv_id", parseInt(tour.dv_id));
		tour.images.forEach((img) => formData.append("images[]", img));

		return await axiosClient({
			method: "post",
			url: `/admin/tour/`,
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
			data: formData,
		});
	},

	restoreDeletedTour: async (id) => {
		return await axiosClient({
			method: "put",
			url: `/admin/history/tour/${id}/restore`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
		});
	},

	getDeletedTour: async () => {
		return await axiosClient({
			method: "get",
			url: `/admin/history/tour/`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
		});
	},

	deleteTourPicture: async (idTour, idPicture) => {
		return await axiosClient({
			method: "delete",
			url: `/admin/tour/${idTour}/${idPicture}`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
		});
	},

	editTourPicture: async (idTour, idPicture) => {
		return await axiosClient({
			method: "post",
			url: `/admin/tour/${idTour}/${idPicture}`,
			headers: {
				"Content-Type": "multipart/form-data",

				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
		});
	},

	addNewPicture: async ({ id, mulFiles }) => {
		let formData = new FormData();

		console.log(mulFiles);
		mulFiles.forEach((file) => {
			console.log(file.name);
			if (file.name && typeof file.name === "string") {
				formData.append("images[]", file);
				console.log("them dc hinh");
			}
		});

		console.log(formData.get("images[]"));

		return await axiosClient({
			method: "post",
			url: `/admin/tour/${id}`,
			headers: {
				"Content-Type": "multipart/form-data",

				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
			data: formData,
		});
	},

	editTour: async (data) => {
		const dataForm = {
			t_ten: data.data.name,
			t_soluong: data.data.quantity.toString(),
			t_mota: data.data.desc,
			t_tgbatdaudk: data.data.startBookDate,
			t_tgketthucdk: data.data.endBookDate,
			t_ngaybatdau: data.data.startDate,
			t_ngayketthuc: data.data.endDate,
			t_gia: data.data.price,
			dv_id: parseInt(data.data.dv_id),
		};

		console.log(dataForm);

		return await axiosClient({
			method: "put",
			url: `/admin/tour/${data.id}`,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
			data: dataForm,
		});
	},

	getBookedTour: async () => {
		return await axiosClient({
			method: "get",
			url: `/admin/donvi/dangkytour`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
		});
	},

	getAllTour: async () => {
		return await axiosClient({
			method: "get",
			url: `/tourall`,
			// headers: {
			// 	Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			// },
		});
	},

	// Employee
	addEmployee: async (data) => {
		let formData = new FormData();

		console.log(data);

		formData.append("nv_ten", data.nv_ten);
		formData.append("nv_namsinh", data.nv_namsinh);
		formData.append("nv_diachi", data.nv_diachi);
		formData.append("nv_thoigianvaolam", data.nv_thoigianvaolam);
		formData.append("nv_sdt", data.nv_sdt);
		formData.append("nv_gioitinh", data.nv_gioitinh);
		formData.append("dv_id", parseInt(data.dv_id));
		formData.append("ltk_id", parseInt(data.ltk_id));

		return await axiosClient({
			method: "post",
			url: "/admin/nhanvien",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
			data: formData,
		});
	},

	getEmployees: async () => {
		return await axiosClient({
			method: "get",
			url: "/admin/nhanvien",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
		});
	},

	getEmployee: async (id) => {
		return await axiosClient({
			method: "get",
			url: `/admin/nhanvien/${id}`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
		});
	},

	deleteEmployee: async (id) => {
		return await axiosClient({
			method: "delete",
			url: `/admin/nhanvien/${id}`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
		});
	},

	getDeletedEmployees: async () => {
		return await axiosClient({
			method: "get",
			url: `/admin/history/nhanvien`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
		});
	},

	restoreDeletedEmployee: async (id) => {
		return await axiosClient({
			method: "put",
			url: `/admin/history/nhanvien/${id}/restore`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
		});
	},

	editEmployee: async ({ data, id }) => {
		const dataForm = {
			nv_namsinh: data.nv_namsinh.toString(),
			nv_diachi: data.nv_diachi,
			nv_sdt: data.nv_sdt.toString(),
			nv_gioitinh: data.nv_gioitinh,
			nv_ten: data.nv_ten,
			dv_id: parseInt(data.dv_id),
		};

		console.log(dataForm);

		return await axiosClient({
			method: "put",
			url: `/admin/nhanvien/${id}`,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
			data: JSON.stringify(dataForm),
		});
	},

	// Expense
	getInfoSupportExpense: async () => {
		return await axiosClient({
			method: "get",
			url: `/admin/donvi/kinhphi`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
		});
	},

	addSupportExpense: async (data) => {
		let formData = new FormData();

		formData.append("tuthamnien", data.seniorityFrom);
		formData.append("denthamnien", data.seniorityTo);
		formData.append("sotienhotro", data.supportExpense);
		formData.append("diengiai", data.desc);

		return await axiosClient({
			method: "post",
			url: `/admin/donvi/kinhphi/${parseInt(data.period)}`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
			data: formData,
		});
	},

	editSupportExpense: async (data) => {
		const dataForm = {
			tuthamnien: data.data.seniorityFrom,
			denthamnien: data.data.seniorityTo,
			sotienhotro: data.data.supportExpense,
			diengiai: data.data.desc,
		};

		return await axiosClient({
			method: "put",
			url: `/admin/donvi/kinhphi/${data.id}`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
			data: dataForm,
		});
	},

	deleteSupportExpense: async (id) => {
		return await axiosClient({
			method: "delete",
			url: `/admin/donvi/kinhphi/${id}`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
		});
	},

	// Expense period
	getInfoPeriod: async () => {
		return await axiosClient({
			method: "get",
			url: `/admin/donvi/giaidoan`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
		});

		// return await axiosClient.get("/admin/donvi/giaidoan", {
		// 	headers: {
		// 		Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
		// 	},
		// });
	},

	addPeriod: async (data) => {
		let formData = new FormData();

		formData.append("gd_tunam", data.from);
		formData.append("gd_dennam", data.to);
		formData.append("dv_id", parseInt(data.dv_id));

		console.log(...formData);

		return await axiosClient({
			method: "post",
			url: `/admin/donvi/giaidoan`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
			data: formData,
		});
	},

	editPeriod: async (data) => {
		let dv_id;
		if (data.data.dv_id) {
			dv_id = parseInt(data.data.dv_id);
		}

		return await axiosClient({
			method: "put",
			url: `/admin/donvi/giaidoan/${data.id}`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
			data: {
				gd_tunam: data.data.from.toString(),
				gd_dennam: data.data.to.toString(),
				dv_id: dv_id,
			},
		});
	},

	deletePeriod: async (id) => {
		return await axiosClient({
			method: "delete",
			url: `/admin/donvi/giaidoan/${id}`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
		});
	},
};

export default adminUnitAPI;
