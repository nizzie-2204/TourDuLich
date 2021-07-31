import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";

// ADMIN
import AdminUnit from "./features/Admin/AdminSystem/Unit/pages/Main";
import AdminTour from "./features/Admin/AdminUnit/Tour/pages/Main";
import AdminEmployee from "./features/Admin/AdminUnit/Employee (User)/pages/Main";

// USER
import PublicRoute from "./components/User/PublicRoute/PublicRoute";
import PrivateRoute from "./components/User/PrivateRoute.js/PrivateRoute";
import Login from "./features/Auth/pages/Login/Login";
import ChangePassword from "./features/User/Account/ChangePassword/pages/Main";
import Account from "./features/User/Account/UserInfo/pages/Main";
import AllTour from "./pages/AllTour/AllTour";
import BookedTourPage from "./pages/BookedTourPage/BookedTourPage";
import DetailTourPage from "./pages/DetailTourPage/DetailTourPage";
import Home from "./pages/Home/Home";

import store, { persistor } from "./store/store";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Router>
						<Switch>
							{/* USER */}
							{/* <PublicRoute exact path="/" component={Home} /> */}

							<Route exact restricted path="/login" component={Login} />
							<PublicRoute exact path="/tours" component={AllTour} />
							{/* <PublicRoute path="/tours?page=" component={AllTour} /> */}
							{/* <PublicRoute path="/tour/:id" component={DetailTourPage} /> */}

							{/* <PrivateRoute path="/account" component={Account} /> */}
							{/* <PrivateRoute path="/password" component={ChangePassword} /> */}
							{/* <PrivateRoute path="/booked" component={BookedTourPage} /> */}

							{/* ADMIN */}

							<PrivateRoute exact path="/admin/unit" component={AdminUnit} />
							<PrivateRoute
								exact
								path="/admin/employee"
								component={AdminEmployee}
							/>
							<PrivateRoute exact path="/admin/tour" component={AdminTour} />
						</Switch>
					</Router>
				</PersistGate>
			</Provider>
		</div>
	);
}

export default App;
