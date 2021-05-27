import React from "react";
import { NavBar, NavImg, NavInnerItem, NavItem, NavLogo } from "./NavElements";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { Modal } from "../Home/HomeElements";

function Nav() {
	function myfunc() {
		if (document.getElementById("modal").style.display === "block") {
			document.getElementById("modal").style.display = "none";
		} else {
			document.getElementById("modal").style.display = "block";
		}
	}
	return (
		<div>
			<NavBar>
				<NavLogo>
					<Link to="/">
						<NavImg
							src={logo}
							alt="logo"
							height="100px"
							width="100px"
						/>
					</Link>
				</NavLogo>
				<NavItem>
					<NavInnerItem onClick={() => myfunc()}>Login</NavInnerItem>
				</NavItem>
				<NavItem>
					<NavInnerItem>Cart</NavInnerItem>
				</NavItem>
			</NavBar>
		</div>
	);
}

export default Nav;
