import { Link } from "react-router-dom";
import styled from "styled-components";

export const OutDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	position: absolute;
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
export const Modal = styled.div`
	display: none;
	position: fixed;
	top: 0px;
	left: 0px;
	z-index: 1;
	width: 100%;
	height: 100%;
	align-items: center;
	overflow: auto; /* Enable scroll if needed */
	/* background-color: rgb(0, 0, 0); Fallback color */
	background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;
export const ModalContent = styled.div`
	background-color: #fefefe;
	margin: auto;
	position: absolute;
	padding: 20px;
	top: 50%;
	left: 25%;
	border: 1px solid #888;
	width: 50%;
`;
