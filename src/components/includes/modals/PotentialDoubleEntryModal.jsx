import React from "react";
import { styled } from "styled-components";
import close from "../../../assets/images/close.svg";
import { COLORS } from "../../../Constants";
import { DatePicker, Tooltip } from "antd";
import entry_img from "../../../assets/images/clean_pairs/entry_img.png";
import exit_img from "../../../assets/images/clean_pairs/car_back.png";
import numberplate from "../../../assets/images/clean_pairs/numberplate.png";
import SimilarPlatesCard from "./general/SimilarPlatesCard";
import search from "../../../assets/images/search.svg";

function PotentialDoubleEntryModal({ setModal }) {
	const similarCars = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
	const onChange = function (date, dateString) {
		console.log(dateString);
	};
	return (
		<Container i>
			<ModalContent>
				{" "}
				<Close onClick={() => setModal(false)}>
					<img src={close} alt="" />
				</Close>
				<Title>Potential Double Entries</Title>
				<CarCover>
					<CarDetails>
						<Cover>
							<Entry>
								{" "}
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
									<Feilds>
										<FeildName>Plate image:</FeildName>
										<FeildData>
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
													<img
														src={numberplate}
														alt=""
													/>
												</NumberPlate>
											</Tooltip>
										</FeildData>
									</Feilds>
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
							</Entry>
						</Cover>
						<Cover>
							<Exit>
								{" "}
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
									<Feilds>
										<FeildName>Plate image:</FeildName>
										<FeildData>
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
													<img
														src={numberplate}
														alt=""
													/>
												</NumberPlate>
											</Tooltip>
										</FeildData>
									</Feilds>
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
							</Exit>
						</Cover>
					</CarDetails>
				</CarCover>
				<SimilarSection>
					<TopSection>
						<Title>
							Similar plates within the above time frame
						</Title>
						<RightSection>
							<Search>
								<Icon>
									<img src={search} alt="Search" />
								</Icon>
								<input type="text" placeholder="Search..." />
							</Search>
							<Cover>
								<DatePicker
									placeholder="Start date"
									onChange={onChange}
								/>
							</Cover>
							<Cover>
								<DatePicker
									placeholder="End date"
									onChange={onChange}
								/>
							</Cover>
						</RightSection>
					</TopSection>

					<SimilarCars>
						{similarCars.map((data) => (
							<SimilarPlatesCard />
						))}
					</SimilarCars>
				</SimilarSection>
			</ModalContent>
		</Container>
	);
}

export default PotentialDoubleEntryModal;
const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	/* backdrop-filter: blur(8px); */
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 999;
`;
const ModalContent = styled.div`
	background-color: white;
	padding: 30px 40px;
	border-radius: 4px;
	width: 1000px;
	position: relative;
`;
const Close = styled.span`
	position: absolute;
	top: 20px;
	right: 20px;
	cursor: pointer;
	width: 25px;
	height: 25px;
	background-color: #fff;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Title = styled.h2`
	/* color: ${COLORS.THEME_COLOR}; */
	font-size: 18px;
	font-weight: 500;
`;
const CarCover = styled.div`
	padding: 20px;
	border: 1px solid #d9d9d9;
	margin-top: 10px;
`;
const CarDetails = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 50px;
`;
const Entry = styled.div`
	display: flex;
	gap: 20px;
`;
const Exit = styled.div`
	display: flex;
	gap: 20px;
`;
const CarImage = styled.div`
	width: 100%;
	/* width: 100px; */
	/* min-width: 100px; */
	height: 150px;
	border-radius: 8px;
	overflow: hidden;
	img {
		display: block;
		/* object-fit: cover; */
		width: 100%;
		height: 150px;
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
	color: ${COLORS.THEME_COLOR};
	white-space: nowrap;
	font-weight: 500;
`;
const Cover = styled.div``;
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
	justify-content: center;
	align-items: center;
	gap: 20px;
	margin-top: 20px;
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
	width: 100px;
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
	width: 100px;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		background-color: #fff;
		color: #3d619b;
	}
`;
const SimilarSection = styled.div`
	margin-top: 30px;
`;
const SimilarCars = styled.div`
	border: 1px solid #d9d9d9;
	padding: 10px 10px;
	margin-top: 10px;
	max-height: calc(100vh - 400px);
	overflow: scroll;
`;
const TopSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const RightSection = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 10px;
`;
const Search = styled.div`
	border-radius: 5px;
	border: 1px solid #d9d9d9;
	display: flex;
	align-items: center;
	width: 150px;
	padding: 0 10px;
	input {
		width: 100%;
		padding: 6px 10px;
	}
`;
const Icon = styled.span`
	display: block;
	width: 20px;
	img {
		display: block;
		width: 100%;
	}
`;
