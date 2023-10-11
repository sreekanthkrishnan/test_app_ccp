import { Tooltip } from "antd";
import React from "react";
import { styled } from "styled-components";
import entry_img from "../../../../assets/images/clean_pairs/entry_img.png";
import exit_img from "../../../../assets/images/clean_pairs/car_back.png";
import numberplate from "../../../../assets/images/clean_pairs/numberplate.png";
import { COLORS } from "../../../../Constants";

function SimilarPlatesCard() {
	return (
		<Container>
			<LeftSection>
				<Tooltip
					overlayInnerStyle={{ width: "315px" }}
					title={
						<img
							src={entry_img}
							alt=""
							style={{
								maxWidth: "300px",
								width: "100%",
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
								style={{
									maxWidth: "300px",
								}}
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
			</LeftSection>
			<MiddleSection>
				<Feilds>
					<FeildName>Motion:</FeildName>
					<FeildData>Towards</FeildData>
				</Feilds>
				<Feilds>
					<FeildName>Direction</FeildName>
					<FeildData>Entry</FeildData>
				</Feilds>
			</MiddleSection>
			<RightSection>
				<CorrectThePlateSection>
					Correct The Plate <input type="text" />
				</CorrectThePlateSection>
				<ButtonSection>
					<RejectButton>Cancel</RejectButton>
					<AcceptButton>Save</AcceptButton>
				</ButtonSection>
			</RightSection>
		</Container>
	);
}

export default SimilarPlatesCard;
const Container = styled.div`
	border-bottom: 1px solid #d9d9d9;
	padding: 10px 0;
	display: flex;
`;
const LeftSection = styled.div`
	display: flex;
	gap: 10px;
	flex: 1;
	border-right: 1px solid #d9d9d9;
	padding: 0 10px;
`;
const MiddleSection = styled.div`
	padding: 0 50px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	border-right: 1px solid #d9d9d9;
`;
const RightSection = styled.div`
	flex: 1;
	padding: 0 10px;
`;
const CarImage = styled.div`
	width: 100%;
	/* width: 100px; */
	max-width: 150px;
	height: 100px;
	border-radius: 8px;
	overflow: hidden;
	img {
		display: block;
		/* object-fit: cover; */
		width: 100%;
		height: 100px;
		object-fit: cover;
	}
`;
const EntryDetails = styled.div``;
const NumberPlate = styled.span`
	height: 20px;
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
	color: ${COLORS.THEME_COLOR};
	white-space: nowrap;
	font-weight: 500;
`;
const CorrectThePlateSection = styled.div`
	display: flex;
	align-items: center;
	white-space: nowrap;
	margin-top: 10px;
	font-size: 14px;
	font-weight: 500;
	input {
		border: 1px solid #d9d9d9;
		width: 200px;
		margin-left: 20px;
	}
`;
const ButtonSection = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 10px;
	margin-top: 20px;
`;
const RejectButton = styled.span`
	height: 25px;
	border: 1px solid #3d619b;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #3d619b;
	font-size: 13px;
	border-radius: 5px;
	width: 80px;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		background-color: #3d619b;
		color: #fff;
	}
`;
const AcceptButton = styled.span`
	height: 25px;
	border: 1px solid #3d619b;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #3d619b;
	color: #fff;
	font-size: 13px;
	border-radius: 5px;
	width: 80px;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		background-color: #fff;
		color: #3d619b;
	}
`;
