// graphService.js

import { Client } from "@microsoft/microsoft-graph-client";
import { authProvider } from "./authProvider";

const graphService = {
	getUserGroups: async () => {
		const token = await authProvider.getTokenSilently();
		console.log(token, "sreee token");

		try {
			// Get the access token from MSAL
			// const token = await authProvider.getTokenSilently();

			// Use the appropriate method from your authService

			// Initialize the Graph client with the access token
			const client = Client.init({
				authProvider: (done) => {
					done(null, token);
				},
			});

			// Fetch user groups using the Microsoft Graph API
			const response = await client.api("/me/memberOf").get();
			return response.value;
		} catch (error) {
			console.error("Error fetching user groups:", error);
			throw error;
		}
	},
};

export default graphService;
