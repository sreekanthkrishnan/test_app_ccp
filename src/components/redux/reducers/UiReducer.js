import { createSlice } from "@reduxjs/toolkit";

const INITAIL_STATE = {
	showLoader: false,
};

const userSlice = createSlice({
	name: "ui_state",
	initialState: INITAIL_STATE,
	reducers: {
		triggerLoader: (state, action) => {
			state.showLoader = action.payload;
		},
	},
});

export const { triggerLoader } = userSlice.actions;
export default userSlice.reducer;
