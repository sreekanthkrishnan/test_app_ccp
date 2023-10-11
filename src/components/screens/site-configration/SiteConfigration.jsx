import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { COLORS } from "../../../Constants";
import edit from "../../../assets/images/edit.svg";
import delete_btn from "../../../assets/images/delete.svg";
import { DatePicker, Input, Pagination, Select, Table } from "antd";
import { Link } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";
import axios from "axios";
import { formatDatev2 } from "../../../utils/HelperFunctions";
import moment from "moment";

function SiteConfigration() {
	const [isLoading, setLoading] = useState(false);
	const [tableData, setTableData] = useState([]);
	const [paginationData, setPaginationData] = useState({});
	const [pageCount, setPageCount] = useState(15);
	const [sortFeild, setSortFeild] = useState("");
	const [sortOrder, setSortOrder] = useState("0");
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState({
		siteCode: null,
		siteName: null,
		startDate: null,
		endDate: null,
	});

	const handleDelete = async (id) => {
		console.log(id);
	};
	function formatAntdDatePickerDate(selectedDate) {
		// Use the `format` function from moment.js to format the date
		return selectedDate.format("YYYY-MM-DD");
	}

	const handleSearch = (column, value) => {
		const data = { ...search };

		if (column === "startDate" || column === "endDate") {
			if (value) {
				const selectedDate = value;
				const formattedDate = formatAntdDatePickerDate(selectedDate);
				data[column] = formattedDate;
			} else {
				data[column] = null;
			}
		} else {
			data[column] = value;
		}

		setSearch(data);
	};
	console.log(search, "sree search");

	const columns = [
		{
			title: (
				<TableHeader>
					<HeaderName>Site Code</HeaderName>
					<Input
						placeholder="Search..."
						onChange={(e) =>
							handleSearch("siteCode", e.target.value)
						}
						style={{ width: 150 }}
					/>
				</TableHeader>
			),
			dataIndex: "siteCode",
			key: "siteCode",
			sorter: true,
		},
		{
			title: (
				<TableHeader>
					<HeaderName>Site Name</HeaderName>
					<Input
						placeholder="Search..."
						onChange={(e) =>
							handleSearch("siteName", e.target.value)
						}
						style={{ width: 150 }}
					/>
				</TableHeader>
			),
			dataIndex: "siteName",
			key: "siteName",
			sorter: true,
		},
		{
			title: (
				<TableHeader>
					<HeaderName>Start Date</HeaderName>
					<DatePicker
						placeholder="Search"
						onChange={(e) => handleSearch("startDate", e)}
					/>
				</TableHeader>
			),

			dataIndex: "startDate",
			sorter: true,
			key: "startDate",
			render: (text) => formatDatev2(text),
		},

		{
			title: (
				<TableHeader>
					<HeaderName>End Date</HeaderName>
					<DatePicker
						placeholder="Search"
						onChange={(e) => handleSearch("endDate", e)}
					/>
				</TableHeader>
			),

			key: "endDate",
			dataIndex: "endDate",
			sorter: true,
			render: (text) => formatDatev2(text),
		},
		{
			title: "Enabled",
			key: "enabled",
			dataIndex: "enabled",
			render: (text) => (text === "Y" ? "Yes" : "No"),
			sorter: true,
		},

		{
			title: "No. of Cameras",
			key: "noOfCameras",
			dataIndex: "noOfCameras",
			sorter: true,
		},

		{
			title: "Action",
			key: "action",
			render: (e) => (
				<ButtonContainer>
					<Edit to={`/site-configration/edit/${e.noOfCameras}`}>
						<img src={edit} alt="Edit" />
					</Edit>
					<Delete onClick={() => handleDelete(e.id)}>
						<img src={delete_btn} alt="Delete" />
					</Delete>
				</ButtonContainer>
			),
		},
	];

	const handlePageSizeChange = (size) => {
		setPageCount(size);
		setCurrentPage(1);
	};

	const fetchData = () => {
		setLoading(true);
		const queryParams = {
			SiteConfigInput: JSON.stringify({
				siteCode: search.siteCode,
				siteName: search.siteName,
				startDate: search.startDate,
				endDate: search.endDate,
				pageNumber: currentPage,
				pageSize: pageCount,
				sortBy: sortFeild,
				sortOrder: sortOrder,
			}),
		};
		axiosConfig
			.get(
				`GetSiteConfiguration/`,

				{
					params: queryParams,
				}
			)
			.then((res) => {
				const { statusCode, data, paginationData } = res.data;
				if (statusCode === 200) {
					setTableData(data);
					setPaginationData(paginationData);
				}
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	};
	useEffect(() => {
		fetchData();
	}, [pageCount, currentPage, search, sortFeild, sortOrder]);

	const handlePageChange = (page, pageSize) => {
		setCurrentPage(page);
	};
	const handleTableChange = (pagination, filters, sorter) => {
		if (sorter?.column?.key) {
			const { field, order } = sorter;
			setSortFeild(order === "ascend" || "descend" ? field : null);
			setSortOrder(
				order === "ascend" ? "0" : order === "descend" ? "1" : "0"
			);
		}
	};

	return (
		<Container>
			<Title>Site Configuration</Title>
			<SiteListContainer>
				{" "}
				<Table
					columns={columns}
					dataSource={tableData}
					pagination={false}
					onChange={handleTableChange}
					loading={isLoading}
				/>
				<BottomSection>
					<div>
						<span>Rows per page: </span>
						<Select
							defaultValue={pageCount}
							onChange={handlePageSizeChange}
							style={{ width: 80 }}
						>
							<Select.Option value={10}>10</Select.Option>
							<Select.Option value={15}>15</Select.Option>
							<Select.Option value={30}>30</Select.Option>
							<Select.Option value={50}>50</Select.Option>
							<Select.Option value={100}>100</Select.Option>
						</Select>
					</div>
					<PaginationCover>
						<Pagination
							total={paginationData?.count} // Total number of items in the data source
							currentPage={currentPage}
							pageSize={pageCount}
							onChange={handlePageChange}
						/>
					</PaginationCover>
				</BottomSection>
			</SiteListContainer>
		</Container>
	);
}

export default SiteConfigration;
const Container = styled.div`
	padding: 20px;
	.ant-pagination-options {
		display: none;
	}
	:where(.css-dev-only-do-not-override-1vr7spz).ant-picker {
		padding: 0 11px;
	}
	:where(.css-dev-only-do-not-override-1vr7spz).ant-table-wrapper
		.ant-table-column-title,
	:where(.css-dev-only-do-not-override-1vr7spz).ant-table-wrapper
		.ant-table-container
		table
		> thead
		> tr:first-child
		> *:last-child {
		font-size: 14px;
		font-weight: 500;
	}
`;
const Title = styled.h2`
	color: ${COLORS.THEME_COLOR};
	font-size: 18px;
	font-weight: 500;
`;
const SiteListContainer = styled.div`
	margin-top: 20px;
	max-height: calc(100vh - 180px);
	min-height: calc(100vh - 180px);
	overflow: scroll;
	border: 0.5px solid #d0d1d2;
	border-radius: 10px;
	.ant-table {
		min-height: calc(100vh - 240px) !important;
		max-height: calc(100vh - 240px) !important;
		overflow: scroll;
	}
	.ant-table-thead > tr > th,
	.ant-table-tbody > tr > td {
		border-bottom: 0.5px solid #d0d1d2;
		border-collapse: collapse;
		background-color: #fff;
		padding: 10px 15px;
		font-size: 12px;
	}
	.ant-table-thead > tr > th {
		font-weight: 600;
	}
	.ant-table-thead
		> tr
		> th:not(:last-child):not(.ant-table-selection-column):not(
			.ant-table-row-expand-icon-cell
		):not([colspan])::before {
		display: none;
	}
	.ant-pagination-item a {
		color: #000 !important;
	}
`;
const ButtonContainer = styled.div`
	display: block;
	display: flex;
	justify-content: flex-start;
	gap: 10px;
`;
const Edit = styled(Link)``;
const Delete = styled.span``;
const TableHeader = styled.div`
	input {
		padding: 0 10px;
	}
`;
const HeaderName = styled.p`
	font-size: 14px;
	font-weight: 500;
	margin-bottom: 5px;
`;
const BottomSection = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: flex-end;
	padding: 0 10px;
`;
const PaginationCover = styled.div`
	display: flex;
	justify-content: flex-end;
	flex: 1;
`;
