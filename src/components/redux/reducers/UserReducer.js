import { createSlice } from "@reduxjs/toolkit";

const INITAIL_STATE = {
	userData: localStorage.getItem("userData")
		? JSON.parse(localStorage.getItem("userData"))
		: {
				name: "",
				phone: "",
				email: "",
		  },

	userProfile: {},
};

const userSlice = createSlice({
	name: "user",
	initialState: INITAIL_STATE,
	reducers: {
		updateUserData: (state, action) => {
			state.userData = { ...state.userData, ...action.payload };
			localStorage.setItem("userData", JSON.stringify(state.userData));
		},
		updateUserProfile: (state, action) => {
			state.userProfile = { ...state.userProfile, ...action.payload };
		},
	},
});

export const { updateUserData, updateUserProfile } = userSlice.actions;
export default userSlice.reducer;
