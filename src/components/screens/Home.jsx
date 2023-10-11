import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { COLORS } from "../../Constants";
import DashboardCard from "../includes/home/DashboardCard";

function Home() {
	const data = [
		{
			id: 1,
			title: "last approved data",
			data: "1 september 2023",
		},
		{
			id: 2,
			title: "Pending dates to be approved",
			data: "20",
		},
		{
			id: 3,
			title: "Sample text",
			data: "34455",
		},
		{
			id: 4,
			title: "last approved data",
			data: "1 september 2023",
		},
		{
			id: 5,
			title: "Pending dates to be approved",
			data: "66",
		},
		{
			id: 6,
			title: "Sample text",
			data: "35455",
		},
	];
	const colors = ["#CCA4FF", "#FF994F", "#65C8FF"];
	return (
		<Container>
			<Title>Dashboard</Title>
			<DataCardContainer>
				{data.map((item, i) => (
					<DashboardCard
						key={item.id}
						data={item}
						color={colors[i % colors.length]}
					/>
				))}
			</DataCardContainer>
		</Container>
	);
}

export default Home;
const Container = styled.div`
	padding: 20px;
`;
const Title = styled.h2`
	color: ${COLORS.THEME_COLOR};
	font-size: 18px;
	font-weight: 500;
`;
const DataCardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 20px;
	grid-gap: 30px;
`;
