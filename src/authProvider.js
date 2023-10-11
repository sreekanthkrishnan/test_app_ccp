import { MsalAuthProvider, LoginType } from "react-aad-msal";
// Msal Configurations
const config = {
	auth: {
		authority:
			"https://login.microsoftonline.com/518ad42c-eb9b-4846-abc6-3108b6178eaa",
		clientId: "894b6d7f-b59b-4689-a091-7bb58a0afc48",
		redirectUri: "http://localhost:3000/callback",
	},
	cache: {
		cacheLocation: "localStorage",
		storeAuthStateInCookie: true,
	},
};
// Authentication Parameters
const authenticationParameters = {
	scopes: [
		"user.read",
		//  "Group.Read.All"
	],
};
const options = {
	loginType: LoginType.Popup,
	tokenRefreshUri: window.location.origin + "/auth.html",
};
export const authProvider = new MsalAuthProvider(
	config,
	authenticationParameters,
	options
);
