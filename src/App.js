import { styled } from "styled-components";
import { authProvider } from "./authProvider";
import { AzureAD, AuthenticationState } from "react-aad-msal";
import "./assets/css/app.css";
import AppRouter from "./components/routers/AppRouter";

function App() {
	return (
		<Container className="App">
			<AppRouter />
		</Container>
	);
}

export default App;
const Container = styled.div`
	background: #dce6f6;
	height: 100vh;
	padding: 15px;
`;
