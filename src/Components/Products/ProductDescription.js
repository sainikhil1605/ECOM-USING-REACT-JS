import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
		<div style={{ display: "flex", margin: "50px 50px" }}>
			<div style={{ flex: "1", float: "left" }}>
				<img
					width="250px"
					height="250px"
					src={store["image"]}
					alt="product"
					style={{ float: "left" }}
				/>
			</div>
			<div style={{ flex: "3", textAlign: "center" }}>
				<h1>{store["title"]}</h1>
				<p>{store["description"]}</p>
				<p>Price:${store["price"]}</p>
			</div>
		</div>
	);
}

export default ProductDescription;
