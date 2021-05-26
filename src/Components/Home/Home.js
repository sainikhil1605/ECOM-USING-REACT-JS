import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Mylink = styled(Link)`
	color: black;
	text-decoration: none;
	:hover {
		color: gray;
	}
`;
function Home() {
	const [store, setStore] = useState([]);
	useEffect(() => {
		axios.get("https://fakestoreapi.com/products").then((resp) => {
			console.log(resp);
			setStore(resp.data);
		});
	}, []);
	return (
		<div style={{ display: "flex", flexWrap: "wrap" }}>
			{store.map((product) => {
				return (
					<div
						style={{
							flex: "1",
							boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 8px",
							margin: "30px 30px",
						}}
					>
						<Mylink to={`/product/${product["id"]}`}>
							<img
								width="250px"
								height="250px"
								src={product["image"]}
								alt="product"
							/>
							<div>{product["title"]}</div>
							<div style={{ fontSize: "25px" }}>
								${product["price"]}
							</div>
						</Mylink>
					</div>
				);
			})}
		</div>
	);
}

export default Home;
