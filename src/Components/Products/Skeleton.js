import React from "react";
import Skeleton from "react-loading-skeleton";
import { ImgDiv, Outdiv, ProdImg, TextDiv } from "./ProductElements";

function SkeletonImg() {
	return (
		<Outdiv>
			<ImgDiv>
				<Skeleton height="75%" width="75%" />
			</ImgDiv>
			<TextDiv>
				<h4>
					<Skeleton />
				</h4>
				<p>
					<Skeleton />
				</p>
				<p>
					<Skeleton />
				</p>
			</TextDiv>
		</Outdiv>
	);
}

export default SkeletonImg;
