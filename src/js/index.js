//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { NavBar } from "./component/navbar.js";

import { Jumbotron } from "./component/jumbotron.js";

import { BootstrapCard } from "./component/card.js";

//render your react application
ReactDOM.render(
	<NavBar
		navbarname="Start Bootstrap"
		linkOne="Home"
		linkTwo="About"
		linkThree="Services"
		linkFour="Contact"
	/>,
	<div className="container">
		<Jumbotron
			header="A Warm Welcome!"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			buttonUrl=""
			buttonLabel="Call to action!"
		/>
		<BootstrapCard
			imageUrlOne=""
			titleOne="Card Title 1"
			descriptionOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			buttonUrlOne=""
			buttonLabelOne="Find Out More!"
			imageUrlTwo=""
			titleTwo="Card Title 2"
			descriptionTwo="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
			buttonUrlTwo=""
			buttonLabelTwo="Find Out More!"
			imageUrlThree=""
			titleThree="Card Title 3"
			descriptionThree="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
			buttonUrlThree=""
			buttonLabelThree="Find Out More!"
		/>
	</div>,
	document.querySelector("#app")
);
