import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./features/Auth/pages/Login/Login";
import Account from "./features/User/Account/UserInfo/pages/Main";
import ChangePassword from "./features/User/Account/ChangePassword/pages/Main";
import AllTour from "./pages/AllTour/AllTour";
import DetailTourPage from "./pages/DetailTourPage/DetailTourPage";

import { Provider } from "react-redux";
import PublicRoute from "./components/User/PublicRoute/PublicRoute";
import PrivateRoute from "./components/User/PrivateRoute.js/PrivateRoute";
import BookedTourPage from "./pages/BookedTourPage/BookedTourPage";

import store from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { persistor } from "./store/store";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Router>
						<Switch>
							<PublicRoute exact path="/" component={Home} />
							<PublicRoute restricted path="/login" component={Login} />
							<PublicRoute exact path="/tours" component={AllTour} />
							<PublicRoute path="/tours?page=" component={AllTour} />
							<PublicRoute path="/tour/:id" component={DetailTourPage} />

							<PrivateRoute path="/account" component={Account} />
							<PrivateRoute path="/password" component={ChangePassword} />
							<PrivateRoute path="/booked" component={BookedTourPage} />
							{/* <Route path="/password" component={ChangePassword} /> */}
						</Switch>
					</Router>
				</PersistGate>
			</Provider>
		</div>
	);
}

export default App;
