import React, { lazy, Suspense, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import CleanPairs from "../screens/CleanPairs";
import { authProvider } from "../../authProvider";
import UnCleanPairs from "../screens/UnCleanPairs";
import ApprovedPairs from "../screens/ApprovedPairs";

const Home = lazy(() => import("../screens/Home"));
const SideBar = lazy(() => import("../general/SideBar"));
const Header = lazy(() => import("../general/Header"));
const SiteConfigration = lazy(() =>
	import("../screens/site-configration/SiteConfigration")
);
const SiteSingleView = lazy(() =>
	import("../screens/site-configration/SiteSingleView")
);

// const userGroup = getUserGroups();

function AppRouter() {
	const [userGroup, setUserGroups] = useState("");

	function getUserData() {
		authProvider
			.getAccessToken()
			.then((token) => {
				// You have acquired the token. Now, you can make an API call to Microsoft Graph.
				// Here's an example of using the token to get the user's groups.
				const graphEndpoint =
					"https://graph.microsoft.com/v1.0/me/memberOf";
				fetch(graphEndpoint, {
					method: "GET",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
					.then((response) => response.json())
					.then((data) => {
						// Handle the response data, which should contain the user's groups.
						console.log("User's Groups:", data.value);
					})
					.catch((error) => {
						// Handle any errors that occur during the API call.
						console.error("Error fetching user's groups:", error);
					});
			})
			.catch((error) => {
				// Handle errors related to acquiring the token.
				console.error("Error acquiring token:", error);
			});
	}

	useEffect(() => {
		// getUserData();
	}, []);

	return (
		<Container>
			<SideBar />
			<Cover>
				<Header />
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/" element={<Navigate to="/home" />} />
						<Route path="/home" element={<Home />} />
						<Route
							path="/site-configration"
							element={<SiteConfigration />}
						/>
						<Route
							path="/site-configration/edit/:id"
							element={<SiteSingleView />}
						/>
						<Route path="/clean-pairs" element={<CleanPairs />} />
						<Route
							path="/unclean-pairs"
							element={<UnCleanPairs />}
						/>
						<Route
							path="/approved-pairs"
							element={<ApprovedPairs />}
						/>
					</Routes>
				</Suspense>
			</Cover>
		</Container>
	);
}

export default AppRouter;
const Container = styled.div`
	display: flex;
	gap: 10px;
`;
const Cover = styled.div`
	height: calc(100vh - 30px);
	background-color: #fff;
	border-radius: 10px;
	flex: 1;
`;
