import React from "react";
import Footer from "../../../../../components/Admin/Footer/Footer";
import Header from "../../../../../components/Admin/Header/Header";
import SidebarAdmin from "../../../../../components/Admin/SidebarAdmin/SidebarAdmin";

import SearchEmployee from "../components/SearchEmployee/SearchEmployee";
import TableEmployee from "../components/TableEmployee/TableEmployee";
import AddEmployee from "../components/AddEmployee/AddEmployee";
import InfoEmployee from "../components/InfoEmployee/InfoEmployee";
import TableDeletedEmployee from "../components/TableDeletedEmployee/TableDeletedEmployee";

import "./style.scss";

const Main = () => {
	return (
		<>
			<SidebarAdmin />
			<div className="panel">
				<Header />

				<div className="main">
					<h4>Quản lý nhân viên</h4>
					<div className="main__container nhanvien-main">
						{/* <SearchEmployee /> */}
						<TableEmployee />
						{/* <AddEmployee /> */}
						<InfoEmployee />
						<TableDeletedEmployee />
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
};

export default Main;
