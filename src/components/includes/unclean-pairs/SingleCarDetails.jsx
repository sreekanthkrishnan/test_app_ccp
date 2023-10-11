import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import entry_img from "../../../assets/images/clean_pairs/entry_img.png";
import exit_img from "../../../assets/images/clean_pairs/car_back.png";

import numberplate from "../../../assets/images/clean_pairs/numberplate.png";
import arrow from "../../../assets/images/clean_pairs/right_arrow.svg";
import left_arrow from "../../../assets/images/left-arrow.svg";
import right_arrow from "../../../assets/images/right-arrow.svg";
import delete_icon from "../../../assets/images/delete 2.svg";
import save from "../../../assets/images/save.svg";

import { Select, Tooltip } from "antd";
import { COLORS } from "../../../Constants";

function SingleCarDetails({
	handleSelectChange,
	data,
	setModal,
	setModalType,
}) {
	const dropdownStyle = {
		overflow: "auto",
		textOverflow: "ellipsis",
	};

	return (
		<Container>
			<TopSection>
				<NavigationButton>
					<img src={left_arrow} alt="" />
					Prev
				</NavigationButton>
				<Title>Invalid, AI Corrected, Fuzzy, Rejected Pairs</Title>
				<NavigationButton>
					Next
					<img src={right_arrow} alt="" />
				</NavigationButton>
			</TopSection>
			<Cover>
				<DetailsContainer>
					<SectionCover>
						<Entry>
							<Tooltip
								overlayInnerStyle={{ width: "315px" }}
								title={
									<img
										src={entry_img}
										alt=""
										style={{
											maxWidth: "300px",
											width: "300px",
										}}
									/>
								}
								color={"black"}
							>
								<CarImage>
									<img src={entry_img} alt="Entry Img" />
								</CarImage>
							</Tooltip>
							<EntryDetails>
								<Tooltip
									// overlayInnerStyle={{ width: "320px" }}
									title={
										<img
											src={numberplate}
											alt=""
											style={{ maxWidth: "300px" }}
										/>
									}
									color={"black"}
								>
									<NumberPlate>
										<img src={numberplate} alt="" />
									</NumberPlate>
								</Tooltip>
								<Feilds>
									<FeildName>Plate No:</FeildName>
									<FeildData
										style={{
											fontFamily: "Roboto Mono",
											fontWeight: 600,
											fontSize: "18px",
										}}
									>
										{data?.plate_number}
									</FeildData>
								</Feilds>
								<Feilds>
									<FeildName>Entry Date:</FeildName>
									<FeildData>04-09-2023</FeildData>
								</Feilds>
								<Feilds>
									<FeildName>Entry Time:</FeildName>
									<FeildData>08:35:22 </FeildData>
								</Feilds>
							</EntryDetails>
						</Entry>
						<CorrectThePlateSection>
							Correct The Plate <input type="text" tabIndex="1" />{" "}
							<OptionButton>
								<img src={delete_icon} alt="" />
							</OptionButton>
							<OptionButton>
								<img src={save} alt="" />
							</OptionButton>
						</CorrectThePlateSection>
					</SectionCover>
					<SectionCover>
						<Exit>
							<Tooltip
								overlayInnerStyle={{ width: "315px" }}
								title={
									<img
										src={exit_img}
										alt=""
										style={{
											maxWidth: "300px",
											width: "300px",
										}}
									/>
								}
								color={"black"}
							>
								<CarImage>
									<img src={exit_img} alt="Entry Img" />
								</CarImage>
							</Tooltip>
							<EntryDetails>
								<Tooltip
									title={
										<img
											src={numberplate}
											alt=""
											style={{ maxWidth: "300px" }}
										/>
									}
									color={"black"}
								>
									<NumberPlate>
										<img src={numberplate} alt="" />
									</NumberPlate>
								</Tooltip>
								<Feilds>
									<FeildName>Plate No:</FeildName>
									<FeildData
										style={{
											fontFamily: "Roboto Mono",
											fontWeight: 600,
											fontSize: "18px",
										}}
									>
										{data?.plate_number}
									</FeildData>
								</Feilds>
								<Feilds>
									<FeildName>Exit Date:</FeildName>
									<FeildData>04-09-2023</FeildData>
								</Feilds>
								<Feilds>
									<FeildName>Exit Time:</FeildName>
									<FeildData>08:35:22 </FeildData>
								</Feilds>
							</EntryDetails>
						</Exit>
						<CorrectThePlateSection>
							Correct The Plate <input type="text" tabIndex="1" />{" "}
							<OptionButton>
								<img src={delete_icon} alt="" />
							</OptionButton>
							<OptionButton>
								<img src={save} alt="" />
							</OptionButton>
						</CorrectThePlateSection>
					</SectionCover>
					<SectionCover>
						<VehicleDetails>
							<SectionTitle>Vehicle Details</SectionTitle>
							<Feilds>
								<FeildName className="veh_details">
									Make:
								</FeildName>
								<FeildData>Volkswagen</FeildData>
							</Feilds>
							<Feilds>
								<FeildName className="veh_details">
									Model:
								</FeildName>
								<FeildData>Civic</FeildData>
							</Feilds>
							<Feilds>
								<FeildName className="veh_details">
									Colour:
								</FeildName>
								<FeildData>Silver</FeildData>
							</Feilds>
						</VehicleDetails>
					</SectionCover>
					<ViolationDetails>
						<SectionTitle>Violation Details</SectionTitle>
						<Feilds>
							<FeildName className="voi_details">
								Site Violation Time:
							</FeildName>
							<FeildData>41 mins</FeildData>
						</Feilds>
						<Feilds>
							<FeildName className="voi_details">
								Stay Duration:
							</FeildName>
							<FeildData>120 mins</FeildData>
						</Feilds>
						<Feilds>
							<FeildName className="voi_details">
								Violation Type:
							</FeildName>
							<FeildData style={{ fontSize: "16px" }}>
								Overstay
							</FeildData>
						</Feilds>
					</ViolationDetails>
				</DetailsContainer>
				<BottomSection>
					<RejectSection>
						<Tooltip>
							<Select
								style={{ width: "100%" }}
								placeholder="Reason"
								onChange={(e) => handleSelectChange(e, data.id)}
								dropdownStyle={dropdownStyle}
								options={[
									{
										value: "Emergency Vehicle",
										label: "Emergency Vehicle",
									},
									{ value: "Direction", label: "Direction" },
									{
										value: "Different Cars",
										label: "Different Cars",
									},
								]}
							/>
						</Tooltip>{" "}
						<RejectButton>Reject</RejectButton>
					</RejectSection>
					<AcceptButton>Accept</AcceptButton>
				</BottomSection>
			</Cover>
		</Container>
	);
}

export default SingleCarDetails;
const Container = styled.div`
	width: 100%;
`;
const TopSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
`;
const DetailsContainer = styled.div`
	display: flex;

	margin-bottom: 8px;
	width: 100%;
`;
const Entry = styled.div`
	display: flex;
	gap: 10px;
	padding: 0 10px;
	position: relative;
	border-right: 1px solid #d0d1d2;
	flex: 1;
`;
const Exit = styled.div`
	display: flex;
	gap: 10px;
	border-right: 1px solid #d0d1d2;
	padding: 0 10px;
	flex: 1;
`;
const VehicleDetails = styled.div`
	border-right: 1px solid #d0d1d2;
	padding: 0 10px;
	min-height: 125px;
`;
const ViolationDetails = styled.div`
	/* border-right: 1px solid #d0d1d2; */
	padding: 0 10px;
`;
const ActionSection = styled.div`
	padding: 0 10px;
	flex: 1;
	padding-right: 5px;
	max-width: 180px;
`;
const CarImage = styled.div`
	width: 150px;
	min-width: 150px;
	height: 120px;
	border-radius: 8px;
	overflow: hidden;
	img {
		display: block;
		/* object-fit: cover; */
		width: 100%;
		height: 120px;
		object-fit: cover;
	}
`;
const EntryDetails = styled.div``;
const NumberPlate = styled.span`
	height: 30px;
	display: block;
	img {
		display: block;
		height: 100%;
	}
	margin-bottom: 5px;
`;
const Feilds = styled.div`
	margin-bottom: 5px;
	display: flex;
	align-items: center;
`;
const FeildName = styled.p`
	font-size: 13px;
	color: #6a6a6a;
	width: 90px;
	&.veh_details {
		width: 60px !important;
	}
	&.voi_details {
		width: 130px;
	}
`;
const FeildData = styled.p`
	font-size: 12px;
	color: #6a6a6a;
	white-space: nowrap;
	color: #000;
	font-weight: 500;
`;

const SectionTitle = styled.p`
	font-size: 14px;
	color: #3d619b;
	margin-bottom: 15px;
`;

const NavigationButton = styled.span`
	display: flex;
	align-items: center;
	gap: 5px;
	border-radius: 5px;
	border: 1px solid #828282;
	width: 80px;
	height: 30px;
	justify-content: center;
	cursor: pointer;
	color: #828282;
	&:hover {
		opacity: 0.5;
	}
`;
const Title = styled.h2`
	color: ${COLORS.THEME_COLOR};
	font-size: 16px;
	font-weight: 500;
	text-align: center;
`;
const Cover = styled.div`
	border: 1px solid #d0d1d2;
	border-radius: 5px;
	padding: 10px;
`;
const BottomSection = styled.div`
	margin-top: 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const RejectSection = styled.div`
	display: flex;
	align-items: center;
	max-width: 400px;
	min-width: 400px;
	gap: 10px;
	padding-left: 5px;

	:where(.css-dev-only-do-not-override-1vr7spz).ant-select-single:not(
			.ant-select-customize-input
		)
		.ant-select-selector {
		flex: 1;
	}
`;
const RejectButton = styled.span`
	min-width: 150px;
	height: 30px;
	border: 1px solid #3d619b;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #3d619b;
	font-size: 13px;
	border-radius: 5px;
	flex: 1;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		background-color: #3d619b;
		color: #fff;
	}
`;
const SectionCover = styled.div`
	flex: 1;
`;
const CorrectThePlateSection = styled.div`
	display: flex;
	align-items: center;
	white-space: nowrap;
	margin-top: 10px;
	font-size: 13px;
	font-weight: 500;
	padding: 0 10px;
	gap: 10px;
	margin-top: 10px;
	input {
		border: 1px solid #d9d9d9;
		width: 200px;
		margin-left: 10px;
		padding: 5px 10px;
	}
`;
const OptionButton = styled.span`
	display: block;
	width: 20px;
	img {
		display: block;
		width: 100%;
	}
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		opacity: 0.6;
	}
`;
const AcceptButton = styled.span`
	height: 30px;
	border: 1px solid #3d619b;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #3d619b;
	color: #fff;
	font-size: 13px;
	border-radius: 5px;
	flex: 1;
	max-width: 150px;
	min-width: 150px;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		background-color: #fff;
		color: #3d619b;
	}
`;
