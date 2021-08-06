import React from "react";
import Header from "../../../../../components/Admin/Header/Header";
import SidebarAdmin from "../../../../../components/Admin/SidebarAdmin/SidebarAdmin";
import Footer from "../../../../../components/Admin/Footer/Footer";
import AddUnit from "../components/AddUnit/AddUnit";
import TableUnit from "../components/TableUnit/TableUnit";
import "./style.scss";
import DetailUnit from "../components/DetailUnit/DetailUnit";
import { useSelector } from "react-redux";
import TableDeletedUnit from "../components/TableDeletedUnit/TableDeletedUnit";

const Main = () => {
	const user = useSelector((state) => state.auth.user);

	return (
		<>
			<SidebarAdmin />
			<div className="panel">
				<Header />

				<div className="main">
					<h4>Quản lý đơn vị</h4>
					<div className="main__container donvi-main ">
						<TableUnit />
						<AddUnit />
						<TableDeletedUnit />
						{/* <DetailUnit /> */}
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
};

export default Main;
