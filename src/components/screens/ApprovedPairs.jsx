import { DatePicker, Pagination, Select } from "antd";
import React, { useState } from "react";
import { styled } from "styled-components";
import { COLORS } from "../../Constants";
import search from "../../assets/images/search.svg";
import CarDetailsCard from "../includes/approved-pairs/CarDetailsCard";
import filter from "../../assets/images/filter.svg";
import CorrectThePlate from "../includes/modals/CorrectThePlate";
import PotentialDoubleEntryModal from "../includes/modals/PotentialDoubleEntryModal";
import PotentialIncorectSequenceModal from "../includes/modals/PotentialIncorrectSequenceModal";

function ApprovedPairs() {
	const [currentPage, setCurrentPage] = useState(1);
	const [isModal, setModal] = useState(false);
	const [modalType, setModalType] = useState("");
	const [pageSize, setPageSize] = useState(10); // Initial page size
	const [voilationData, setVoilationData] = useState([
		{
			id: 1,
		},
		{
			id: 2,
		},
		{
			id: 3,
		},
		{
			id: 4,
		},
		{
			id: 5,
		},
		{
			id: 6,
		},
		{
			id: 7,
		},
		{
			id: 8,
		},
		{
			id: 9,
		},
	]);

	const onChange = function (date, dateString) {
		console.log(dateString);
	};
	const handlePageSizeChange = (size) => {
		setPageSize(size);
		// Fetch data based on the new pageSize and reset the current page to 1
		setCurrentPage(1);
	};

	const handleSelectChange = (event, id) => {
		const selectedValue = event;

		// Update the state to add the "reason" property to the selected object
		setVoilationData((prevData) =>
			prevData.map((item) =>
				item.id === id ? { ...item, reason: selectedValue } : item
			)
		);
	};
	return (
		<Container>
			{isModal && modalType === "correct_plate" && (
				<CorrectThePlate setModal={setModal} />
			)}
			{/* {isPotentialModal&& <Pote} */}
			{isModal && modalType === "double_entry" && (
				<PotentialDoubleEntryModal setModal={setModal} />
			)}
			{isModal && modalType === "incorrect_sequence" && (
				<PotentialIncorectSequenceModal setModal={setModal} />
			)}

			<TopSection>
				<Title>Approved Pairs</Title>
				<RightSection>
					<Cover>
						<Select
							defaultValue="001"
							style={{ width: 100 }}
							// onChange={handleChange}
							options={[
								{ value: "001", label: "001" },
								{ value: "002", label: "002" },
								{ value: "003", label: "003" },
							]}
						/>
					</Cover>
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
					<Search>
						<Icon>
							<img src={search} alt="Plate number" />
						</Icon>
						<input type="text" placeholder="Plate number..." />
					</Search>
				</RightSection>
			</TopSection>
			<CarsList>
				{voilationData.map((data) => (
					<CarDetailsCard
						key={data.id}
						handleSelectChange={handleSelectChange}
						data={data}
						setModal={setModal}
						setModalType={setModalType}
					/>
				))}
			</CarsList>
			<BottomSection>
				<div>
					<span>Rows per page: </span>
					<Select
						defaultValue={pageSize}
						onChange={handlePageSizeChange}
						style={{ width: 80 }}
					>
						<Select.Option value={10}>10</Select.Option>
						<Select.Option value={20}>20</Select.Option>
						<Select.Option value={50}>50</Select.Option>
						{/* Add more options as needed */}
					</Select>
				</div>
				<Pagination defaultCurrent={1} total={500} />
			</BottomSection>
		</Container>
	);
}

export default ApprovedPairs;
const Container = styled.div`
	padding: 20px;
	.ant-pagination-options {
		display: none;
	}
`;
const TopSection = styled.div`
	display: flex;
	/* align-items: center; */
	justify-content: space-between;
`;
const Title = styled.h2`
	color: ${COLORS.THEME_COLOR};
	font-size: 16px;
	font-weight: 500;
`;
const RightSection = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 10px;
`;
const Cover = styled.div`
	border-radius: 5px;
	.ant-picker {
	}
	/* border: 1px solid #d0d1d2; */
`;
const Search = styled.div`
	border-radius: 5px;
	border: 1px solid #d9d9d9;
	display: flex;
	align-items: center;
	width: 180px;
	padding: 0 10px;
	input {
		width: 100%;
		padding: 3px 10px;
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
const CarsList = styled.div`
	margin-top: 20px;
	max-height: calc(100vh - 230px);
	overflow: scroll;
`;
const BottomSection = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Button = styled.span`
	height: 30px;
	border: 1px solid #3d619b;
	width: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #3d619b;
	color: #fff;
	font-size: 13px;
	border-radius: 5px;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		color: #3d619b;
		background-color: #fff;
		/* border: 1px solid #fff; */
	}
`;
const Filter = styled.div`
	border-radius: 5px;
	border: 1px solid #d9d9d9;
	display: flex;
	align-items: center;
	padding: 0 10px;
	img {
		width: 100%;
	}
	p {
		font-size: 12px;
		margin-right: 10px;
		color: #6a6a6a;
	}
	span {
		width: 14px;
	}
`;
