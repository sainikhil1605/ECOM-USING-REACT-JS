import React from "react";
import Skeleton from "react-loading-skeleton";
import { Outdiv } from "../Products/ProductElements";
import { Mylink, PriceDiv, ProdDiv, TitleDiv } from "./HomeElements";

function HomeSkeleton() {
	return (
		<ProdDiv>
			<Mylink>
				<Skeleton width="200px" height="200px" />
			</Mylink>
			<TitleDiv>
				<Skeleton width="200px" />
			</TitleDiv>
			<PriceDiv>
				<Skeleton width="200px" />
			</PriceDiv>
		</ProdDiv>
	);
}

export default HomeSkeleton;
