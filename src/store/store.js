import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import AuthReducer from "../features/Auth/authSlice";
import TourReducer from "../features/User/Tour/TourSlice";
import AdminAuthReducer from "../features/Auth/adminAuthSlice";
import UnitReducer from "../features/Admin/AdminSystem/Unit/unitSlice";
import AdminTourReducer from "../features/Admin/AdminUnit/Tour/tourSlice";
import EmployeeReducer from "../features/Admin/AdminUnit/Employee (User)/employeeSlice";
import AdminExpenseReducer from "../features/Admin/AdminUnit/Expense/expenseSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	auth: AuthReducer,
	tour: TourReducer,
	adminAuth: AdminAuthReducer,
	unit: UnitReducer,
	employee: EmployeeReducer,
	adminTour: AdminTourReducer,
	adminExpense: AdminExpenseReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
});

export let persistor = persistStore(store);

export default store;
