import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Mylink, OutDiv, PriceDiv, ProdDiv, TitleDiv } from "./HomeElements";
import HomeSkeleton from "./HomeSkeleton";

function Home() {
	const [store, setStore] = useState([]);
	useEffect(() => {
		axios.get("https://fakestoreapi.com/products").then((resp) => {
			console.log(resp);
			setStore(resp.data);
		});
	}, []);
	return (
		<SkeletonTheme
			color="rgb(230, 231, 232)"
			highlightColor="rgb(230, 231, 232)"
		>
			{store.length !== 0 ? (
				<OutDiv>
					{store.map((product) => {
						return (
							<ProdDiv>
								<Mylink to={`/product/${product["id"]}`}>
									<img
										width="200px"
										height="200px"
										src={product["image"]}
										alt="product"
									/>
									<TitleDiv>{product["title"]}</TitleDiv>
									<PriceDiv>${product["price"]}</PriceDiv>
								</Mylink>
							</ProdDiv>
						);
					})}
				</OutDiv>
			) : (
				<HomeSkeleton />
			)}
		</SkeletonTheme>
	);
}

export default Home;
