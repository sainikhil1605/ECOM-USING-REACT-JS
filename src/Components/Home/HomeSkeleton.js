import React from "react";
import Skeleton from "react-loading-skeleton";
import { Outdiv } from "../Products/ProductElements";
import { Mylink, PriceDiv, ProdDiv, TitleDiv } from "./HomeElements";

function HomeSkeleton() {
	return (
		<Outdiv>
			<ProdDiv>
				<Mylink>
					<Skeleton />
				</Mylink>
				<TitleDiv>
					<Skeleton />
				</TitleDiv>
				<PriceDiv>
					<Skeleton />
				</PriceDiv>
			</ProdDiv>
		</Outdiv>
	);
}

export default HomeSkeleton;
