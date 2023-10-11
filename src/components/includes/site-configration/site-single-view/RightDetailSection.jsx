import React, { useState } from "react";
import { styled } from "styled-components";
import arrow from "../../../../assets/images/white_up_double_arrow.svg";
import solid_arrow from "../../../../assets/images/arrow.svg";
import upload from "../../../../assets/images/upload.svg";
import { COLORS } from "../../../../Constants";

function RightDetailSection() {
	const [openTab, setOpenTab] = useState("");
	const [openCamera, setOpenCamera] = useState("");
	const [selectedFile, setSelectedFile] = useState(null);

	const camera = [
		{
			id: 1,
			name: "XYZ",
			direction_in: "Towards",
			entry: "Towards",
			direction_out: "Away",
			exit: "Away",
		},
		{
			id: 2,
			name: "SYHS",
			direction_in: "Towards",
			entry: "Towards",
			direction_out: "Away",
			exit: "Away",
		},
		{
			id: 3,
			name: "HJJS",
			direction_in: "Towards",
			entry: "Towards",
			direction_out: "Away",
			exit: "Away",
		},
	];

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setSelectedFile(file);
	};
	return (
		<Container>
			<Dropdown onClick={() => setOpenTab("camera")}>
				<Header>
					<Title>Camera Configuration</Title>{" "}
					<Arrow className={openTab === "camera" && "active"}>
						<img src={arrow} alt="" />
					</Arrow>
				</Header>
				{openTab === "camera" && (
					<Content>
						{camera.map((data, i) => (
							<CameraDetails key={data.id}>
								<Top onClick={() => setOpenCamera(data.id)}>
									<CameraName>Camera {i + 1}</CameraName>
									<DropArrow
										className={
											openCamera === data.id && "active"
										}
									>
										<img src={solid_arrow} alt="" />
									</DropArrow>
								</Top>
								{openCamera === data.id && (
									<CameraSettings>
										<FieldCover>
											<FeildName>Camera Name:</FeildName>
											<FeildData>
												<Input value={data.name} />
											</FeildData>
										</FieldCover>
										<FieldCover>
											<FeildName>Direction In:</FeildName>
											<FeildData>
												<Input
													value={data.direction_in}
												/>
											</FeildData>
										</FieldCover>
										<FieldCover>
											<FeildName>Entry:</FeildName>
											<FeildData>Towards</FeildData>
										</FieldCover>
										<FieldCover>
											<FeildName>
												Direction Out:
											</FeildName>
											<FeildData>
												<Input
													value={data.direction_out}
												/>
											</FeildData>
										</FieldCover>
										<FieldCover>
											<FeildName>Exit:</FeildName>
											<FeildData>Away</FeildData>
										</FieldCover>
										<FieldCover>
											<FeildName>Upload image:</FeildName>
											<FeildData>
												<FileInput
													type="file"
													accept=".jpg, .jpeg, .png, .pdf"
													onChange={handleFileChange}
													id="fileInput"
												/>
												<FileInputLabel htmlFor="fileInput">
													<img src={upload} alt="" />
													Upload
												</FileInputLabel>
											</FeildData>
										</FieldCover>

										{selectedFile && (
											<FieldCover>
												<FeildName></FeildName>
												<FeildData>
													<UploadedImage
														src={URL.createObjectURL(
															selectedFile
														)}
														alt="Uploaded"
													/>
												</FeildData>
											</FieldCover>
										)}
										<ButtonSection>
											<Cancel>Cancel</Cancel>
											<Save>Save</Save>
										</ButtonSection>
									</CameraSettings>
								)}
							</CameraDetails>
						))}
					</Content>
				)}
			</Dropdown>
			<Dropdown onClick={() => setOpenTab("blackout")}>
				<Header>
					<Title>Blackout Configuration</Title>{" "}
					<Arrow className={openTab === "blackout" && "active"}>
						<img src={arrow} alt="" />
					</Arrow>
				</Header>
			</Dropdown>
			<Dropdown>
				<Header>
					<Title>Freetime Configuration</Title>{" "}
					<Arrow>
						<img src={arrow} alt="" />
					</Arrow>
				</Header>
			</Dropdown>
			<Dropdown>
				<Header>
					<Title>No Park Configuration</Title>{" "}
					<Arrow>
						<img src={arrow} alt="" />
					</Arrow>
				</Header>
			</Dropdown>
		</Container>
	);
}

export default RightDetailSection;
const Container = styled.div``;
const Dropdown = styled.div`
	margin-bottom: 10px;
`;
const Header = styled.div`
	background-color: ${COLORS.THEME_COLOR};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 6px 10px;
	border-radius: 5px;
`;
const Title = styled.h3`
	font-size: 14px;
	font-weight: 400;
	color: #fff;
`;
const Arrow = styled.span`
	display: block;
	width: 18px;
	transition: 0.3s;
	&.active {
		transform: rotate(180deg);
	}
	img {
		display: block;
		width: 100%;
	}
`;
const Content = styled.div`
	margin-top: 10px;
	padding: 0 30px;
`;
const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #ececec;
	padding: 3px 10px;
	border-radius: 3px;
`;
const CameraDetails = styled.div`
	margin-bottom: 5px;
	/* padding: 10px 30px; */
`;
const CameraName = styled.p`
	font-size: 13px;
`;
const DropArrow = styled.span`
	display: block;
	width: 15px;
	transition: 0.3s;
	transform: rotate(0deg);
	&.active {
		transform: rotate(180deg);
	}
	img {
		display: block;
		width: 100%;
	}
`;
const CameraSettings = styled.div`
	padding: 10px;
	border-radius: 5px;
	border: 1px solid #d0d1d2;
	margin-top: 10px;
`;
const FieldCover = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 10px;
`;
const FeildName = styled.p`
	color: #060606;
	width: 100px;
	font-size: 12px;
`;
const FeildData = styled.span`
	display: block;
	color: #6a6a6a;
	font-size: 13px;
`;
const Input = styled.input`
	font-size: 12px;
	border: 1px solid #d0d1d2;
	padding: 3px 5px;
	border-radius: 3px;
`;
const FileInput = styled.input`
	display: none;
`;

const FileInputLabel = styled.label`
	color: ${COLORS.THEME_COLOR};
	padding: 2px 5px;
	border: none;
	cursor: pointer;
	border-radius: 4px;
	border: 1px solid ${COLORS.THEME_COLOR};
	display: flex;
	font-size: 12px;
	&:hover {
	}
	img {
		display: block;
		width: 15px;
		margin-right: 5px;
	}
`;
const UploadedImage = styled.img`
	max-width: 200px;
	max-height: 200px;
	margin-top: 20px;
`;
const ButtonSection = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 20px;
	margin-top: 20px;
`;
const Save = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	width: 100px;
	background-color: ${COLORS.THEME_COLOR};
	color: #fff;
	border-radius: 3px;
	&:hover {
		opacity: 0.8;
	}
	cursor: pointer;
	transition: 0.3s;
`;
const Cancel = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	width: 100px;
	color: ${COLORS.THEME_COLOR};
	background-color: #fff;
	border: 1px solid ${COLORS.THEME_COLOR};
	border-radius: 3px;
	&:hover {
		opacity: 0.8;
	}
	cursor: pointer;
	transition: 0.3s;
`;
