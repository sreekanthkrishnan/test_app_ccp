import React from "react";
import { styled } from "styled-components";
import { COLORS } from "../../../Constants";
import LeftDetailsSection from "../../includes/site-configration/site-single-view/LeftDetailsSection";
import RightDetailSection from "../../includes/site-configration/site-single-view/RightDetailSection";

function SiteSingleView() {
	return (
		<Container>
			<Title>Site Configuration</Title>
			<DetailsContainer>
				<LeftSection>
					<LeftDetailsSection />
				</LeftSection>
				<RightSection>
					<RightDetailSection />
				</RightSection>
			</DetailsContainer>
		</Container>
	);
}

export default SiteSingleView;
const Container = styled.div`
	padding: 20px;
`;
const Title = styled.h2`
	color: ${COLORS.THEME_COLOR};
	font-size: 18px;
	font-weight: 500;
`;
const DetailsContainer = styled.div`
	margin-top: 20px;
	display: grid;
	grid-template-columns: 2fr 3fr;
	grid-gap: 30px;
`;
const LeftSection = styled.div`
	height: 100%;
	border: 1px solid #d0d1d2;
	max-height: calc(100vh - 210px);
	min-height: calc(100vh - 210px);
	border-radius: 10px;
`;
const RightSection = styled.div`
	max-height: calc(100vh - 210px);
	min-height: calc(100vh - 210px);
	overflow: scroll;
`;
