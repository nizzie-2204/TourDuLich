import React from "react";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SidebarAdmin = () => {
	const user = useSelector((state) => state.auth.user);

	return (
		<div className="nav-left">
			<p>
				<Link to="/">Ready Dashboard</Link>
			</p>
			<div className="nav__header">
				<div className="nav__item">
					<div className="nav__info--avatar">
						<img
							src="https://image.flaticon.com/icons/png/512/3135/3135715.png"
							alt="avatar"
							width="40px"
							height="40px"
						/>
					</div>
					<div className="nav__info">
						<span className="nav__info--name">{user?.username}</span>
						<span className="nav__info--level">Adminstrator</span>
					</div>
					<div className="nav__dropdown">
						<ion-icon name="caret-down"></ion-icon>
					</div>
				</div>
				<div className="nav__dropmenu">
					<Link to="/">
						<p>My Profile</p>
					</Link>
					<Link to="/">
						<p>Edit Profile</p>
					</Link>
					<Link to="/">
						<p>Settings</p>
					</Link>
				</div>
			</div>
			<div className="nav__controller">
				{user?.ltk_id === 1 && (
					<NavLink to="/admin/unit" activeClassName="active">
						<div className="icon">
							<ion-icon name="layers-outline"></ion-icon>
						</div>
						<span>Đơn vị</span>
					</NavLink>
				)}
				<NavLink to="/admin/employee" activeClassName="active">
					<div className="icon">
						<ion-icon name="people-outline"></ion-icon>
					</div>
					<span>Nhân viên</span>
				</NavLink>
				<NavLink to="/admin/tour" activeClassName="active">
					<div className="icon">
						<ion-icon name="airplane-outline"></ion-icon>
					</div>
					<span>Tours</span>
				</NavLink>
				<NavLink to="/admin/expense" activeClassName="active">
					<div className="icon">
						<ion-icon name="cash-outline"></ion-icon>
					</div>
					<span>Kinh phí</span>
				</NavLink>
			</div>
		</div>
	);
};

export default SidebarAdmin;
