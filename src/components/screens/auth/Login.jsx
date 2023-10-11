import React from "react";
import { styled } from "styled-components";
import left_bg from "../../../assets/images//left_bg.png";
import logo from "../../../assets/images/logo.svg";
import mobpp from "../../../assets/images/member_pf_bpp.svg";
import bpp_approved from "../../../assets/images/BPA_AOS_Logo.svg";
import bg from "../../../assets/images/login_bg.png";
import { COLORS } from "../../../Constants";
import smile from "../../../assets/images/smile.svg";
import space from "../../../assets/images/more_space.svg";
import time from "../../../assets/images/time.svg";
import revenue from "../../../assets/images/revenue.svg";

function Login({ handleLogin }) {
	return (
		<Container>
			<LeftSection>
				<LeftBg>{/* <img src={left_bg} alt="" /> */}</LeftBg>
				<TopSection>
					<Logo>
						<img src={logo} alt="Polus logo" />
					</Logo>
				</TopSection>
				<MiddleSection>
					<Title>
						Hassle-free parking <br />
						solutions
					</Title>
					<PointsSection>
						<Points>
							&#8226; Fully managed parking services tailored to
							your needs
						</Points>
						<Points>
							&#8226; Increase space availability and reduce
							nuisance parking
						</Points>
						<Points>
							&#8226; Unlock new revenue streams for your
							organisation
						</Points>
					</PointsSection>
					<LabalSection>
						<Label>
							<Icon>
								<img src={space} alt="" />
							</Icon>
							<Text>More Space</Text>
						</Label>
						<Label>
							<Icon>
								<img src={smile} alt="" />
							</Icon>
							<Text>Happier Customers</Text>
						</Label>
						<Label>
							<Icon>
								<img src={time} alt="" />
							</Icon>
							<Text>More Time</Text>
						</Label>
						<Label>
							<Icon>
								<img src={revenue} alt="" />
							</Icon>
							<Text>Additional Revenue</Text>
						</Label>
					</LabalSection>
				</MiddleSection>
				<BottomSection>
					<ApprovalOne>
						<img src={mobpp} alt="Member of bpp" />
					</ApprovalOne>
					<ApprovalTwo>
						<img src={bpp_approved} alt="Bpp approved" />
					</ApprovalTwo>
				</BottomSection>
			</LeftSection>

			<RightSection>
				<LoginSection>
					<LoginTitle>Hello, Welcome!</LoginTitle>
					<SignInButton onClick={handleLogin}>Sign in</SignInButton>
				</LoginSection>
			</RightSection>
		</Container>
	);
}

export default Login;
const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;

	background: url(${bg}) no-repeat;
	background-size: cover;
`;

const LeftSection = styled.div`
	height: 100vh;
	background: #fff;
	background-size: cover;
	padding: 50px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
`;
const RightSection = styled.div`
	height: 100vh;
	background-color: #ffffff94;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 50px;
`;
const TopSection = styled.div``;
const MiddleSection = styled.div`
	margin-left: 30px;
`;
const BottomSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Logo = styled.h1`
	width: 130px;
	img {
		display: block;
		width: 100%;
	}
`;
const Title = styled.h2`
	font-size: 46px;
	font-weight: 600;
	line-height: normal;
`;
const PointsSection = styled.div`
	margin-top: 40px;
`;
const Points = styled.p`
	margin-bottom: 10px;
`;
const LabalSection = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 15%;
`;

const Label = styled.div``;
const Icon = styled.span``;
const Text = styled.p``;
const ApprovalOne = styled.span`
	display: block;
	width: 150px;
	background-color: transparent; /* Set the background color of the container to transparent */
	background-blend-mode: luminosity;
	/ img {
		display: block;
		width: 100%;
	}
`;
const ApprovalTwo = styled.span`
	display: block;
	width: 100px;
	img {
		display: block;
		width: 100%;
	}
`;
const LoginSection = styled.div`
	max-width: 450px;
	padding: 30px;
	background: rgba(255, 255, 255, 0.75);
	width: 100%;
`;
const LoginTitle = styled.h2`
	color: ${COLORS.THEME_COLOR};
	font-size: 20px;
	font-weight: 500;
`;
const SignInButton = styled.div`
	width: 100%;
	height: 40px;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${COLORS.THEME_COLOR};
	border-radius: 5px;
	margin-top: 20px;
	cursor: pointer;
`;
const LeftBg = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: url(${left_bg}) no-repeat;
	background-size: cover;
	background-position: center;
	opacity: 0.1;
`;
