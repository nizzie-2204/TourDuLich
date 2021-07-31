import React from "react";
import Footer from "../../../../../components/Admin/Footer/Footer";
import Header from "../../../../../components/Admin/Header/Header";
import SidebarAdmin from "../../../../../components/Admin/SidebarAdmin/SidebarAdmin";
import TableTour from "../components/TableTour/TableTour";
import InfoTour from "../components/InfoTour/InfoTour";

const Main = () => {
	return (
		<>
			<SidebarAdmin />
			<div className="panel">
				<Header />

				<div className="main">
					<h4>Quản lý Tours</h4>
					<div className="main__container tours-main">
						<TableTour />
						<InfoTour />
					</div>
				</div>

				<Footer />
			</div>
		</>
	);
};

export default Main;
