import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AdminSystemRoute = ({ component: Component, ...rest }) => {
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
					[
						// Admin unit => not allow to access admin system page
						// => redirect to admin unit page
						user && user.ltk_id === 2 ? (
							<Redirect to="/admin/employee" />
						) : (
							// Admin system
							<Component {...props} />
						),
					]
				);
			}}
		/>
	);
};

export default AdminSystemRoute;
