import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import meter from "../../assets/images/header/meter.svg";
import search from "../../assets/images/header/search_icon.svg";
import dropdown from "../../assets/images/header/chevron-down.svg";
import Jdenticon from "react-jdenticon";
import { formatDate } from "../../utils/HelperFunctions";
import { authProvider } from "../../authProvider";
import AzureAD from "react-aad-msal";

function Header() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const userProfileRef = useRef(null);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (
				isDropdownOpen &&
				userProfileRef.current &&
				!userProfileRef.current.contains(event.target)
			) {
				setIsDropdownOpen(false);
			}
		};

		// Attach the event listener
		document.addEventListener("click", handleOutsideClick);

		// Clean up the event listener on unmount
		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, [isDropdownOpen]);

	return (
		<Container>
			<TopSection>
				<LeftSection>
					<CurrentDate>Date : {formatDate(new Date())}</CurrentDate>
				</LeftSection>
				<RightSection>
					{/* <SearchBar>
						<SearchIcon>
							<img src={search} alt="" />
						</SearchIcon>
						<input type="text" placeholder="Search" />
					</SearchBar> */}
					<UserProfile onClick={toggleDropdown} ref={userProfileRef}>
						<ProfileImage>
							<Jdenticon size="100%" value="sreekanth krishn" />
						</ProfileImage>
						<Details>
							<Name>
								Kevin Harper <img src={dropdown} alt="" />
							</Name>
							<Designation>Manager</Designation>
						</Details>
						{isDropdownOpen && (
							<Dropdown>
								<AzureAD provider={authProvider}>
									{({ logout }) => {
										return (
											<DropdownItem onClick={logout}>
												Logout
											</DropdownItem>
										);
									}}
								</AzureAD>
							</Dropdown>
						)}
					</UserProfile>
				</RightSection>
			</TopSection>

			<span></span>
		</Container>
	);
}

export default Header;
const Container = styled.div`
	border-bottom: 1px solid #d0d1d2;
	padding: 20px;
	padding-bottom: 5px;
	height: 70px;
`;
const TopSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
`;
const RightSection = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 30px;
`;
const LeftSection = styled.div`
	display: flex;
	/* align-items: center; */
	img {
		display: block;
		width: 20px;
		margin-right: 10px;
	}
	h2 {
		font-size: 16px;
		font-weight: 500;
	}
`;
const SearchBar = styled.div`
	display: flex;
	align-items: center;
	width: 300px;
	padding: 0 10px;
	border: 1px solid #d0d1d2;
	border-radius: 8px;
`;
const UserProfile = styled.div`
	display: flex;
	gap: 10px;
	cursor: pointer;
`;
const SearchIcon = styled.span`
	display: block;
	width: 18px;
	img {
		display: block;
		width: 100%;
	}
`;
const CurrentDate = styled.div`
	font-size: 13px;
	font-weight: 500;
`;
const ProfileImage = styled.span`
	display: block;
	width: 40px;
	height: 40px;
	min-width: 40px;
	border-radius: 50%;
	border: 1px solid #5e5e5e;
	overflow: hidden;
	/* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
`;
const Details = styled.span`
	display: block;
`;
const Name = styled.h3`
	font-size: 14px;
	font-weight: 500;
	display: flex;
	align-items: center;
	gap: 5px;
	img {
		display: block;
		width: 15px;
	}
`;
const Designation = styled.p`
	font-size: 13px;
	font-weight: 400;
	color: #3d619b;
`;
const Dropdown = styled.div`
	position: absolute;
	top: 80px;
	right: 30px;
	background-color: #090909;
	border: 1px solid #d0d1d2;
	border-radius: 8px;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	z-index: 1;
`;

const DropdownItem = styled.div`
	padding: 10px;
	cursor: pointer;
	color: #fff;
	&:hover {
		opacity: 0.7;
	}
`;
