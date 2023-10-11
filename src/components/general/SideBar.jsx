import React, { useState } from "react";
import { styled } from "styled-components";
import ccp_logo from "../../assets/images/logo.svg";
import short_logo from "../../assets/images/sidebar/short_logo.svg";

import home from "../../assets/images/sidebar/home.png";
import home_inactive from "../../assets/images/sidebar/home_inactive.svg";

import setting from "../../assets/images/sidebar/setting.svg";
import active_setting from "../../assets/images/sidebar/setting_white.svg";
import clean_pairs from "../../assets/images/sidebar/clean_pair.svg";
import active_clean_pairs from "../../assets/images/sidebar/clean_pair_white.svg";
import collapse from "../../assets/images/sidebar/collapse.svg";
import invalid_active from "../../assets/images/sidebar/invalid_active.svg";
import unclean from "../../assets/images/sidebar/unclean_pair.svg";
import approval_active from "../../assets/images/sidebar/active_approved_pair.svg";
import approved_pair from "../../assets/images/sidebar/approved_pairs.svg";

import { COLORS } from "../../Constants";
import { NavLink } from "react-router-dom";

function SideBar() {
	const [isCollapsed, setCollapsed] = useState(true);
	const menu = [
		{
			id: 1,
			name: "Home",
			active_icon: home,
			inactive_icon: home_inactive,
			path: "/home",
		},
		{
			id: 2,
			name: "Site Configration",
			active_icon: active_setting,
			inactive_icon: setting,
			path: "/site-configration",
		},
		{
			id: 3,
			name: "Clean Pairs",
			active_icon: active_clean_pairs,
			inactive_icon: clean_pairs,
			path: "/clean-pairs",
		},
		{
			id: 4,
			name: "Unclean Pairs",
			active_icon: invalid_active,
			inactive_icon: unclean,
			path: "/unclean-pairs",
		},
		{
			id: 5,
			name: "Approved Pairs",
			active_icon: approval_active,
			inactive_icon: approved_pair,
			path: "/approved-pairs",
		},
		//
	];
	return (
		<Container isCollapsed={isCollapsed}>
			{isCollapsed ? (
				<LogoSection style={{ padding: "10px 20px" }}>
					<img src={short_logo} alt="App Logo" />
				</LogoSection>
			) : (
				<LogoSection>
					<img src={ccp_logo} alt="App Logo" />
				</LogoSection>
			)}
			<MenuSection isCollapsed={isCollapsed}>
				{menu.map((data) => (
					<Menu
						to={data.path}
						activeClassName="active"
						key={data.id}
						isCollapsed={isCollapsed}
					>
						<Icon
							className="active_image"
							isCollapsed={isCollapsed}
						>
							<img src={data.active_icon} alt="" />
						</Icon>
						<Icon
							className="inactive_image"
							isCollapsed={isCollapsed}
						>
							<img src={data.inactive_icon} alt="" />
						</Icon>
						<Name isCollapsed={isCollapsed}>{data.name}</Name>
					</Menu>
				))}
			</MenuSection>
			{isCollapsed ? (
				<CollapsedMenu
					onClick={() => setCollapsed((prev) => !prev)}
					isCollapsed={isCollapsed}
				>
					<CollapeIcon>
						<img src={collapse} alt="" />
					</CollapeIcon>{" "}
				</CollapsedMenu>
			) : (
				<CollapsedMenu onClick={() => setCollapsed((prev) => !prev)}>
					<Icon isCollapsed={isCollapsed}>
						<img src={collapse} alt="" />
					</Icon>{" "}
					Collapse
				</CollapsedMenu>
			)}
		</Container>
	);
}

export default SideBar;
const Container = styled.div`
	width: ${(props) => (props.isCollapsed ? "80px" : "220px")};
	min-width: ${(props) => (props.isCollapsed ? "80px" : "220px")};
	height: calc(100vh - 30px);
	background-color: #fff;
	border-radius: 10px;
	position: relative;
	transition: 0.3s;
`;
const LogoSection = styled.h1`
	width: 100%;
	margin: 0 auto;
	padding: 13px 50px;
	border-bottom: 1px solid #d0d1d2;
	img {
		display: block;
		width: 100%;
	}
`;
const MenuSection = styled.div`
	padding: ${(props) => (props.isCollapsed ? "20px 10px" : "20px")};
	transition: 0.3s;
`;
const Menu = styled(NavLink)`
	display: flex;
	justify-content: ${(props) =>
		props.isCollapsed ? "center" : "flex-start"};
	transition: 0.3s;

	align-items: center;
	padding: 10px 20px;
	color: ${COLORS.PRIMARY};
	background-color: #fff;

	font-size: 14px;
	border-radius: 5px;
	&:hover {
		opacity: 0.8;
	}
	cursor: pointer;
	transition: 0.3s;
	margin-bottom: 10px;
	.active_image {
		display: none;
	}
	.inactive_image {
		display: block;
	}
	&.active {
		background-color: ${COLORS.THEME_COLOR};
		color: #fff;
		.active_image {
			display: block;
		}
		.inactive_image {
			display: none;
		}
	}
`;
const Icon = styled.span`
	width: ${(props) => (props.isCollapsed ? "25px" : "18px")};
	transition: 0.3s;
	min-width: 18px;
	display: block;
	margin-right: ${(props) => (props.isCollapsed ? 0 : "10px")};
	transition: 0.3s;
	transform: translate(0px, -2px);
	img {
		display: block;
		width: 100%;
	}
`;
const Name = styled.p`
	display: ${(props) => (props.isCollapsed ? "none" : "block")};
	/* width: ${(props) => (props.isCollapsed ? 0 : "115px")}; */
	overflow: hidden;
	transition: 0.3s;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
const CollapsedMenu = styled.span`
	color: #6a6a6a;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: ${(props) =>
		props.isCollapsed ? "center" : "flex-start"};
	padding: ${(props) => (props.isCollapsed ? "10px" : "10px 40px")};
	transition: 0.3s;
	position: absolute;
	bottom: 10px;
	left: 0;
	cursor: pointer;
	&:hover {
		opacity: 0.8;
	}
`;
const CollapeIcon = styled.span`
	width: ${(props) => (props.isCollapsed ? "25px" : "18px")};
	transition: 0.3s;
	min-width: 18px;
	display: block;
	margin-right: ${(props) => (props.isCollapsed ? 0 : "10px")};
	transform: translate(0px, -2px);
	img {
		display: block;
		width: 100%;
		transition: 0.3s;
		transform: rotate(${(props) => (props.isCollapsed ? 0 : "180deg")});
	}
`;
