import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SkeletonImg from "./Skeleton";
import { ImgDiv, Outdiv, ProdImg, TextDiv } from "./ProductElements";
import { SkeletonTheme } from "react-loading-skeleton";
function ProductDescription(props) {
	const [store, setStore] = useState([]);
	let { id } = useParams();
	useEffect(() => {
		axios.get("https://fakestoreapi.com/products").then((resp) => {
			console.log(resp);
			setStore(resp.data[id - 1]);
		});
	}, []);
	return (
		<SkeletonTheme
			color="rgb(230, 231, 232)"
			highlightColor="rgb(230, 231, 232)"
		>
			{store.length !== 0 ? (
				<Outdiv>
					<ImgDiv>
						<ProdImg src={store["image"]} alt="product" />
					</ImgDiv>
					<TextDiv>
						<h4>{store["title"]}</h4>
						<p>{store["description"]}</p>
						<p>Price:${store["price"]}</p>
					</TextDiv>
				</Outdiv>
			) : (
				<SkeletonImg />
			)}
		</SkeletonTheme>
	);
}

export default ProductDescription;
