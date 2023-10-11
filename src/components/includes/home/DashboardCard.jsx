import React from "react";
import { styled } from "styled-components";

function DashboardCard({ data, color }) {
	return (
		<Container>
			<Title>{data.title}</Title>
			<Details color={color}>{data.data}</Details>
		</Container>
	);
}

export default DashboardCard;
const Container = styled.div`
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	padding: 20px;
	height: 180px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	position: relative;
`;
const Details = styled.p`
	font-size: 16px;
	color: ${(props) => props.color};
`;
const Title = styled.p`
	position: absolute;
	top: 10px;
	left: 15px;
	font-size: 15px;
`;
