import axios from "axios";

import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import {
	Modal,
	ModalContent,
	Mylink,
	OutDiv,
	PriceDiv,
	ProdDiv,
	TitleDiv,
} from "./HomeElements";
import { AiOutlineClose } from "react-icons/ai";
import HomeSkeleton from "./HomeSkeleton";
function Home() {
	const [store, setStore] = useState([]);
	const skeleton = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	useEffect(() => {
		axios.get("https://fakestoreapi.com/products").then((resp) => {
			console.log(resp);
			setStore(resp.data);
		});
	}, []);
	function myfunc() {
		document.getElementById("modal").style.display = "none";
	}
	return (
		<SkeletonTheme
			color="rgb(230, 231, 232)"
			highlightColor="rgb(230, 231, 232)"
		>
			{store.length !== 0 ? (
				<OutDiv>
					<Modal id="modal">
						<ModalContent>
							<AiOutlineClose
								style={{ float: "right" }}
								onClick={() => myfunc()}
							/>
							<form>
								<label for="mail">Email</label>
								<input
									type="email"
									style={{ margin: "20px 10px" }}
								/>
								<br></br>
								<lable for="pswrd">Password</lable>
								<input
									style={{ margin: "20px 20px" }}
									type="password"
								/>
								<br />
								<button type="submit">Submit</button>
							</form>
						</ModalContent>
					</Modal>
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
				<OutDiv>
					{skeleton.map((k) => {
						return <HomeSkeleton />;
					})}
				</OutDiv>
			)}
		</SkeletonTheme>
	);
}

export default Home;
