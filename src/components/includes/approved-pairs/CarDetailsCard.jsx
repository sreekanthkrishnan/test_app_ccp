import React from "react";
import { styled } from "styled-components";
import entry_img from "../../../assets/images/clean_pairs/entry_img.png";
import exit_img from "../../../assets/images/clean_pairs/car_back.png";

import numberplate from "../../../assets/images/clean_pairs/numberplate.png";
import arrow from "../../../assets/images/clean_pairs/right_arrow.svg";
import { Select, Tooltip } from "antd";

function CarDetailsCard({ handleSelectChange, data, setModal, setModalType }) {
	const dropdownStyle = {
		overflow: "auto", // Add scrollbars when content overflows
		textOverflow: "ellipsis", // Truncate text with ellipsis
	};

	return (
		<Container>
			<Entry>
				<Tooltip
					overlayInnerStyle={{ width: "315px" }}
					title={
						<img
							src={entry_img}
							alt=""
							style={{ maxWidth: "300px", width: "300px" }}
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
								fontSize: "16px",
							}}
						>
							AD08DXG
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
			<Exit>
				<Tooltip
					overlayInnerStyle={{ width: "315px" }}
					title={
						<img
							src={exit_img}
							alt=""
							style={{ maxWidth: "300px", width: "300px" }}
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
								fontSize: "16px",
							}}
						>
							AD08DXG
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
			<VehicleDetails>
				<SectionTitle>Vehicle Details</SectionTitle>
				<Feilds>
					<FeildName className="veh_details">Make:</FeildName>
					<FeildData>Volkswagen</FeildData>
				</Feilds>
				<Feilds>
					<FeildName className="veh_details">Model:</FeildName>
					<FeildData>Civic</FeildData>
				</Feilds>
				<Feilds>
					<FeildName className="veh_details">Colour:</FeildName>
					<FeildData>Silver</FeildData>
				</Feilds>
			</VehicleDetails>
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
					<FeildData style={{ fontSize: "16px" }}>Overstay</FeildData>
				</Feilds>
			</ViolationDetails>
			<ActionSection>
				<Cover>
					<Tooltip title={data.reason}>
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
					</Tooltip>
				</Cover>
				<ActionButton>
					<RejectButton>Revert</RejectButton>
				</ActionButton>
				<CorrectPlateBTN
					onClick={() => {
						setModal(true);
						setModalType("correct_plate");
					}}
				>
					Correct the plate <Icon src={arrow} />
				</CorrectPlateBTN>
				<ShortBotton>
					<Button
						onClick={() => {
							setModal(true);
							setModalType("double_entry");
						}}
					>
						DE <Icon src={arrow} />
					</Button>
					<Button
						onClick={() => {
							setModal(true);
							setModalType("incorrect_sequence");
						}}
					>
						IS <Icon src={arrow} />
					</Button>
				</ShortBotton>
				<GoodToPrint>
					<FeildName>
						<FeildName>Good to print:</FeildName>
					</FeildName>
					<Radio>
						<span></span>
					</Radio>
				</GoodToPrint>
			</ActionSection>
		</Container>
	);
}

export default CarDetailsCard;
const Container = styled.div`
	display: flex;
	border: 1px solid #d0d1d2;
	border-radius: 5px;
	padding: 8px 5px;
	margin-bottom: 8px;
	/* gap: 20px; */
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
`;
const ViolationDetails = styled.div`
	border-right: 1px solid #d0d1d2;
	padding: 0 10px;
`;
const ActionSection = styled.div`
	padding: 0 10px;
	flex: 1;
	padding-right: 5px;
	max-width: 180px;
`;
const CarImage = styled.div`
	width: 100%;
	/* width: 100px; */
	/* min-width: 100px; */
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
const Radio = styled.span`
	display: block;
	width: 30px;
	height: 15px;
	background-color: #3d619b;
	border-radius: 10px;
	border: 2px solid #3d619b;
	position: relative;
	cursor: pointer;
	span {
		display: block;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: #fff;
		position: absolute;
		right: 0;
	}
`;
const SectionTitle = styled.p`
	font-size: 14px;
	color: #3d619b;
	margin-bottom: 15px;
`;
const RejectButton = styled.span`
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
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		background-color: #fff;
		color: #3d619b;
	}
`;
const Cover = styled.div`
	border-radius: 5px;
	flex: 1;
	margin-top: 10px;
	.ant-select-selector {
		border: 1px solid #d0d1d2;
	}
	/* border: 1px solid #d0d1d2; */
`;
const CorrectPlateBTN = styled.div`
	display: flex;
	align-items: center;
	font-size: 12px;
	gap: 10px;
	color: #1a73e8;
	margin-top: 5px;
	cursor: pointer;
`;
const Icon = styled.img`
	display: block;
	width: 10px;
`;
const GoodToPrint = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-top: 5px;
`;
const ActionButton = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 5px;
	margin-top: 5px;
`;
const ShortBotton = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
`;

const Button = styled.span`
	display: flex;
	align-items: center;
	font-size: 12px;
	gap: 10px;
	color: #1a73e8;
	margin-top: 5px;
	cursor: pointer;
`;
