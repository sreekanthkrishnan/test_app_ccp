import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AzureAD, AuthenticationState } from "react-aad-msal";
import { authProvider } from "./authProvider";
import { Router } from "react-router-dom";
import { Store } from "../src/components/redux/Store";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./components/screens/auth/Login";

const router = createBrowserRouter([
	{
		path: "/*",
		element: <App />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AzureAD provider={authProvider}>
			{({ login, logout, authenticationState, error, accountInfo }) => {
				error && console.log(error);
				console.log(accountInfo);
				// eslint-disable-next-line default-case
				switch (authenticationState) {
					case AuthenticationState.Authenticated:
						return (
							<Provider store={Store}>
								<RouterProvider router={router} />
							</Provider>
						);
					case AuthenticationState.Unauthenticated:
						return <Login handleLogin={login} />;
					case AuthenticationState.InProgress:
						return <p>Authenticating...</p>;
				}
			}}
		</AzureAD>
		{/* <AzureAD provider={authProvider} forceLogin={true}>
			<Provider store={Store}>
				<RouterProvider router={router} />
			</Provider>
		</AzureAD> */}
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
