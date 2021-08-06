import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AdminUnitRoute = ({ component: Component, ...rest }) => {
	const user = useSelector((state) => state.auth.user);

	return (
		<Route
			{...rest}
			render={(props) => {
				return (user && user.ltk_id === 3) || !user ? (
					// User => not allow to access admin page
					// => redirect to home page
					<Redirect to="/" />
				) : (
					// Admin system => redirect to any page in admin page (system and unit)
					<Component {...props} />
				);
			}}
		/>
	);
};

export default AdminUnitRoute;
