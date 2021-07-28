import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./features/Auth/pages/Login/Login";
// import AllTour from "./pages/AllTour/AllTour";
// import DetailTourPage from "./pages/DetailTourPage/DetailTourPage";
// import Account from "./pages/Account/Account";
// import BookedTourPage from "./pages/BookedTourPage/BookedTourPage";
// import ChangePassword from "./features/ChangePassword/index";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={Login} />
						{/* <Route path="/tours" component={AllTour} /> */}
						{/* <Route path="/tour/:id" component={DetailTourPage} /> */}
						{/* <Route path="/account" component={Account} /> */}
						{/* <Route path="/booked" component={BookedTourPage} /> */}
						{/* <Route path="/password" component={ChangePassword} /> */}
					</Switch>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
