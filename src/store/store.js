import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import AuthReducer from "../features/Auth/authSlice";
import TourReducer from "../features/User/Tour/TourSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	auth: AuthReducer,
	tour: TourReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
});

export let persistor = persistStore(store);

export default store;
