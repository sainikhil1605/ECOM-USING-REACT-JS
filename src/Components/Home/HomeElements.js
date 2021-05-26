import { Link } from "react-router-dom";
import styled from "styled-components";

export const OutDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
export const Mylink = styled(Link)`
	color: black;
	text-decoration: none;
	:hover {
		color: gray;
	}
`;
export const ProdDiv = styled.div`
	flex: 1;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 8px;
	margin: 30px 30px;
	background-color: white;
`;
export const TitleDiv = styled.div``;
export const PriceDiv = styled.div`
	font-size: 25px;
`;
