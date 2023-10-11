import axios from "axios";

// Create an Axios instance with default configurations
const axiosConfig = axios.create({
	baseURL:
		"https://func-dev-updatesiteconfigmotion-uks-01.azurewebsites.net/api/", // Replace with your API's base URL
	headers: {
		"Content-Type": "application/json",
		// Add any other default headers you need
	},
});

export default axiosConfig;
