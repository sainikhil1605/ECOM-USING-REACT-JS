import React from "react";
import { NavBar, NavImg, NavInnerItem, NavItem, NavLogo } from "./NavElements";
import logo from "../../assets/logo.svg";
function Nav() {
	return (
		<div>
			<NavBar>
				<NavLogo>
					<NavImg
						src={logo}
						alt="logo"
						height="100px"
						width="100px"
					/>
				</NavLogo>
				<NavItem>
					<NavInnerItem>Login</NavInnerItem>
				</NavItem>
				<NavItem>
					<NavInnerItem>Cart</NavInnerItem>
				</NavItem>
			</NavBar>
		</div>
	);
}

export default Nav;
