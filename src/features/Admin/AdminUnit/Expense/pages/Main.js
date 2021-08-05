import React from "react";
import Footer from "../../../../../components/Admin/Footer/Footer";
import Header from "../../../../../components/Admin/Header/Header";
import SidebarAdmin from "../../../../../components/Admin/SidebarAdmin/SidebarAdmin";
import TablePeriod from "../components/TablePeriod/TablePeriod";
import AddPeriod from "../components/AddPeriod/AddPeriod";
import TableExpense from "../components/TableExpense/TableExpense";

import "./style.scss";
import AddExpense from "../components/AddExpense/AddExpense";

const Main = () => {
	return (
		<>
			<SidebarAdmin />
			<div className="panel">
				<Header />

				<div className="main">
					<h4>Quản lý kinh phí</h4>
					<div className="main__container donvi-main ">
						<TablePeriod />
						{/* <AddPeriod /> */}
						<TableExpense />
						<AddExpense />
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
};

export default Main;
