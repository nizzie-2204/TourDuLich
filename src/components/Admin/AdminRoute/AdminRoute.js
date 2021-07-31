import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AdminRoute = ({ component: Component, ...rest }) => {
	const isAdminSystem = useSelector((state) => state.adminAuth.isAdminSystem);
	const isAdminUnit = useSelector((state) => state.adminAuth.isAdminUnit);

	return (
		<Route
			{...rest}
			render={(props) => {
				return isAdminSystem && <Component {...props} />;
			}}
		/>
	);
};

export default AdminRoute;
