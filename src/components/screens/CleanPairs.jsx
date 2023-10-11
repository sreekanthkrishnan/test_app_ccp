import React, { useState } from "react";
import { styled } from "styled-components";
import { COLORS } from "../../Constants";
import { DatePicker, Pagination, Select } from "antd";
import search from "../../assets/images/search.svg";
import CarDetailsCard from "../includes/clean-pairs/CarDetailsCard";
import CorrectThePlate from "../includes/modals/CorrectThePlate";

function CleanPairs() {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(10); // I
	const [isModal, setModal] = useState(false);

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
			{isModal && <CorrectThePlate setModal={setModal} />}
			<TopSection>
				<Title>Site Configuration</Title>
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
							<img src={search} alt="Search" />
						</Icon>
						<input type="text" placeholder="Search..." />
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
				<PaginationCover>
					<Pagination defaultCurrent={1} total={500} />
				</PaginationCover>

				<Button>Accept All</Button>
			</BottomSection>
		</Container>
	);
}

export default CleanPairs;
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
	font-size: 18px;
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
	width: 150px;
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
	justify-content: flex-end;
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
const PaginationCover = styled.div`
	display: flex;
	justify-content: center;
	flex: 1;
`;
