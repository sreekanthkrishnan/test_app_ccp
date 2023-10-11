import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "./reducers/UserReducer";
import UiReducer from "./reducers/UiReducer";

export const Store = configureStore({
	reducer: {
		user: UserReducer,
		ui_state: UiReducer,
	},
});
