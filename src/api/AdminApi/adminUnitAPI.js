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

		// formData.append("t_ten", dataForm.name);
		// formData.append("t_soluong", dataForm.phone);
		// formData.append("t_mota", dataForm.yearOfBirth);
		// formData.append("t_tgbatdaudk", dataForm.sex);
		// formData.append("t_tgketthucdk", dataForm.address);
		// formData.append("t_ngaybatdau", dataForm.idTour);

		// formData.append("t_ngayketthuc", dataForm.idTour);
		// formData.append("t_gia", dataForm.idTour);
		// formData.append("dv_id", dataForm.idTour);
		// formData.append("images", dataForm.idTour);

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

	addNewPicture: async (idTour) => {
		let formData = new FormData();

		// formData.append("t_ten", dataForm.name);
		// formData.append("t_soluong", dataForm.phone);
		// formData.append("t_mota", dataForm.yearOfBirth);
		// formData.append("t_tgbatdaudk", dataForm.sex);
		// formData.append("t_tgketthucdk", dataForm.address);
		// formData.append("t_ngaybatdau", dataForm.idTour);

		// formData.append("t_ngayketthuc", dataForm.idTour);
		// formData.append("t_gia", dataForm.idTour);
		// formData.append("dv_id", dataForm.idTour);
		// formData.append("images", dataForm.idTour);

		return await axiosClient({
			method: "post",
			url: `/admin/tour/${idTour}`,
			headers: {
				"Content-Type": "multipart/form-data",

				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
			data: formData,
		});
	},

	editTour: async (idTour, infoTour) => {
		return await axiosClient({
			method: "put",
			url: `/admin/tour/${idTour}`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
			data: JSON.stringify(infoTour),
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
	addEmployee: async () => {
		let formData = new FormData();

		// formData.append("nv_ten", dataForm.name);
		// formData.append("nv_namsinh", dataForm.phone);
		// formData.append("nv_diachi", dataForm.yearOfBirth);
		// formData.append("nv_thoigianvaolam", dataForm.sex);
		// formData.append("nv_sdt", dataForm.address);
		// formData.append("nv_gioitinh", dataForm.idTour);

		// formData.append("dv_id", dataForm.idTour);
		// formData.append("ltk_id", dataForm.idTour);

		return await axiosClient({
			method: "get",
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

	getDeletedEmployees: async (id) => {
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

	editEmployee: async (id) => {
		let formData = new FormData();

		// formData.append("nv_ten", dataForm.name);
		// formData.append("nv_namsinh", dataForm.phone);
		// formData.append("nv_diachi", dataForm.yearOfBirth);
		// formData.append("nv_sdt", dataForm.address);
		// formData.append("nv_gioitinh", dataForm.address);
		// formData.append("dv_id", dataForm.address);

		return await axiosClient({
			method: "put",
			url: `/admin/nhanvien/${id}`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
			data: formData,
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

	addSupportExpense: async () => {
		let formData = new FormData();

		// formData.append("tuthamnien", dataForm.name);
		// formData.append("denthamnien", dataForm.phone);
		// formData.append("sotienhotro", dataForm.yearOfBirth);
		// formData.append("diengiai", dataForm.address);
		// formData.append("tunam", dataForm.address);
		// formData.append("dennam", dataForm.address);
		return await axiosClient({
			method: "post",
			url: `/admin/donvi/kinhphi`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
			data: formData,
		});
	},

	editSupportExpense: async () => {
		let formData = new FormData();

		// formData.append("tuthamnien", dataForm.name);
		// formData.append("denthamnien", dataForm.phone);
		// formData.append("sotienhotro", dataForm.yearOfBirth);
		// formData.append("diengiai", dataForm.address);

		return await axiosClient({
			method: "put",
			url: `/admin/donvi/kinhphi`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
			data: formData,
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
	},

	addPeriod: async () => {
		let formData = new FormData();

		// formData.append("tunam", dataForm.name);
		// formData.append("dennam", dataForm.phone);

		return await axiosClient({
			method: "post",
			url: `/admin/donvi/giaidoan`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
			data: formData,
		});
	},

	editPeriod: async (id) => {
		let formData = new FormData();

		// formData.append("tuthamnien", dataForm.name);
		// formData.append("denthamnien", dataForm.phone);
		// formData.append("sotienhotro", dataForm.phone);
		// formData.append("diengiai", dataForm.phone);

		return await axiosClient({
			method: "post",
			url: `/admin/donvi/giaidoan/${id}`,
			headers: {
				Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
			},
			data: formData,
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
