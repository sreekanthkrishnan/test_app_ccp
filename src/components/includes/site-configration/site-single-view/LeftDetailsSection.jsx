import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../../../Constants";
import { DatePicker } from "antd";

function LeftDetailsSection() {
	const onChange = function (date, dateString) {
		console.log(dateString);
	};
	return (
		<Container>
			<Cover>
				<FieldCover>
					<FeildName>Site Code:</FeildName>
					<FeildData>001</FeildData>
				</FieldCover>
				<FieldCover>
					<FeildName>Site Name:</FeildName>
					<FeildData>McD</FeildData>
				</FieldCover>
				<FieldCover>
					<FeildName>Address:</FeildName>
					<FeildData>
						#1, XYZ Road, 49 Featherstone Street, London, EC1Y8SY
					</FeildData>
				</FieldCover>
				<FieldCover>
					<FeildName>Latitude:</FeildName>
					<FeildData>41.3809° N</FeildData>
				</FieldCover>
				<FieldCover>
					<FeildName>Longitude:</FeildName>
					<FeildData>2.1228° E</FeildData>
				</FieldCover>
				<FieldCover>
					<FeildName>Enabled</FeildName>
					<FeildData>
						<Radio>
							<span></span>
						</Radio>
					</FeildData>
				</FieldCover>
				<FieldCover>
					<FeildName>Start Date:</FeildName>
					<FeildData>
						<DatePicker
							placeholder="Start date"
							onChange={onChange}
						/>
					</FeildData>
				</FieldCover>
				<FieldCover>
					<FeildName>End Date:</FeildName>
					<FeildData>
						<DatePicker
							placeholder="Start date"
							onChange={onChange}
						/>
					</FeildData>
				</FieldCover>
				<FieldCover>
					<FeildName>Overnight:</FeildName>
					<FeildData>
						<Radio>
							<span></span>
						</Radio>
					</FeildData>
				</FieldCover>
				<FieldCover>
					<FeildName>Violation Time:</FeildName>
					<FeildData>
						<Minites>
							<input type="number" /> minutes
						</Minites>
					</FeildData>
				</FieldCover>
				<FieldCover>
					<FeildName>No. of Cameras:</FeildName>
					<FeildData>03</FeildData>
				</FieldCover>
				<FieldCover>
					<FeildName>Entry:</FeildName>
					<FeildData>Front In</FeildData>
				</FieldCover>
				<FieldCover>
					<FeildName>Exit:</FeildName>
					<FeildData>Back Out</FeildData>
				</FieldCover>
				<FieldCover>
					<FeildName>Last Processed Date:</FeildName>
					<FeildData>01-09-2023</FeildData>
				</FieldCover>
				<FieldCover>
					<FeildName>Point of Contact Email:</FeildName>
					<FeildData>xyz@ccp.com</FeildData>
				</FieldCover>
				<FieldCover>
					<FeildName>Point of Contact Mobile:</FeildName>
					<FeildData>9874563244</FeildData>
				</FieldCover>
			</Cover>
			<ButtonSection>
				<Cancel>Cancel</Cancel>
				<Save>Save</Save>
			</ButtonSection>
		</Container>
	);
}

export default LeftDetailsSection;
const Container = styled.div`
	padding: 20px;
	height: 100%;
	:where(.css-dev-only-do-not-override-1vr7spz).ant-picker {
		width: 100%;
	}
	:where(.css-dev-only-do-not-override-1vr7spz).ant-picker {
		border: 1px solid #717171;
	}
`;
const Cover = styled.div`
	max-height: calc(100vh - 295px);
	min-height: calc(100vh - 295px);
	overflow: scroll;
`;
const FieldCover = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	font-size: 14px;
	margin-bottom: 15px;
`;
const FeildName = styled.p`
	color: #060606;
`;
const FeildData = styled.span`
	display: block;
	color: #6a6a6a;
`;

const Radio = styled.span`
	display: block;
	width: 40px;
	height: 20px;
	background-color: #dfdfdf;
	border-radius: 10px;
	border: 2px solid #dfdfdf;
	span {
		display: block;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background-color: #fff;
	}
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
const Minites = styled.span`
	display: block;
	width: 100%;
	display: flex;
	align-items: center;
	font-weight: 500;
	font-size: 16px;
	border-radius: 5px;
	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		appearance: none;
		margin: 0;
	}
	input {
		border: 1px solid #717171;
		margin-right: 10px;
	}
`;
