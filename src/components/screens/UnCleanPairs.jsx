import { DatePicker, Pagination, Select } from "antd";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { COLORS } from "../../Constants";
import search from "../../assets/images/search.svg";
import CarDetailsCard from "../includes/unclean-pairs/CarDetailsCard";
import filter from "../../assets/images/filter.svg";
import CorrectThePlate from "../includes/modals/CorrectThePlate";
import PotentialDoubleEntryModal from "../includes/modals/PotentialDoubleEntryModal";
import PotentialIncorectSequenceModal from "../includes/modals/PotentialIncorrectSequenceModal";
import SingleCarDetails from "../includes/unclean-pairs/SingleCarDetails";
import SimilarPlatesCard from "../includes/modals/general/SimilarPlatesCard";

function UnCleanPairs() {
	const [currentPage, setCurrentPage] = useState(1);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isModal, setModal] = useState(false);
	const [modalType, setModalType] = useState("");
	const [pageSize, setPageSize] = useState(10); // Initial page size
	const [voilationData, setVoilationData] = useState([
		{
			id: 1,
			plate_number: "AD08DXG",
		},
		{
			id: 2,
			plate_number: "AD08DGGHD",
		},
		{
			id: 3,
			plate_number: "AD0SJJSJS",
		},
		{
			id: 4,
			plate_number: "AD038838NJJ",
		},
		{
			id: 5,
			plate_number: "AD333838838G",
		},
		{
			id: 6,
			plate_number: "AD08DXG",
		},
		{
			id: 7,
			plate_number: "AD08DXG",
		},
		{
			id: 8,
			plate_number: "AD08DXG",
		},
		{
			id: 9,
			plate_number: "AD08DXG",
		},
	]);

	console.log(currentIndex, "plate");

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
	const handleKeyDown = (event) => {
		switch (event.key) {
			case "ArrowRight":
				if (currentIndex < voilationData.length - 1) {
					setCurrentIndex((prev) => prev + 1);
				}
				break;
			case "ArrowLeft":
				// Decrement currentIndex, but ensure it doesn't go below 0
				setCurrentIndex((prev) => Math.max(prev - 1, 0));
				break;
			default:
				console.log("Other key was pressed");
		}
	};

	useEffect(() => {
		// Add the event listener when the component mounts
		document.addEventListener("keydown", handleKeyDown);

		// Remove the event listener when the component unmounts
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []); // The empty dependency array ensures that the listener is added and removed only once

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
				<SingleCarDetails
					handleSelectChange={handleSelectChange}
					data={voilationData[currentIndex]}
					setModal={setModal}
					setModalType={setModalType}
				/>
			</TopSection>
			<ListTop>
				<RightSection>
					<Search>
						<Icon>
							<img src={search} alt="Search" />
						</Icon>
						<input type="text" placeholder="Number Plate" />
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
			</ListTop>
			<CarsList>
				{voilationData.map((data) => (
					<SimilarPlatesCard />
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

export default UnCleanPairs;
const Container = styled.div`
	padding: 20px;
	.ant-pagination-options {
		display: none;
	}
`;
const TopSection = styled.div`
	display: flex;
	justify-content: space-between;
`;

const CarsList = styled.div`
	margin-top: 10px;
	max-height: calc(100vh - 530px);
	overflow: scroll;
	padding: 20px;
	border: 1px solid #d0d1d2;
	border-radius: 5px;
`;
const BottomSection = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	:where(.css-dev-only-do-not-override-1vr7spz).ant-select-single:not(
			.ant-select-customize-input
		)
		.ant-select-selector {
		max-width: 100px;
	}
`;
const ListTop = styled.div`
	margin-top: 20px;
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
