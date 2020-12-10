import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { NavBar } from "../component/navbar.js";

import { Jumbotron } from "../component/jumbotron.js";

import { BootstrapCard } from "../component/card.js";
//create your first component
export function Home() {
	return (
		<div>
			<NavBar
				navBarName="Start Bootstrap"
				linkOne="Home"
				linkTwo="About"
				linkThree="Services"
				linkFour="Contact"
			/>
			<div className="container mt-4">
				<Jumbotron
					header="A Warm Welcome!"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					buttonUrl=""
					buttonLabel="Call to action!"
				/>
				<BootstrapCard
					imageUrlOne="https://placehold.it/500x325.jpg"
					titleOne="Card Title 1"
					descriptionOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					buttonUrlOne=""
					buttonLabelOne="Find Out More!"
					imageUrlTwo="https://placehold.it/500x325.jpg"
					titleTwo="Card Title 2"
					descriptionTwo="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					buttonUrlTwo=""
					buttonLabelTwo="Find Out More!"
					imageUrlThree="https://placehold.it/500x325.jpg"
					titleThree="Card Title 3"
					descriptionThree="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
					buttonUrlThree=""
					buttonLabelThree="Find Out More!"
					imageUrlFour="https://placehold.it/500x325.jpg"
					titleFour="Card Title 4"
					descriptionFour="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
					buttonUrlFour=""
					buttonLabelFour="Find Out More!"
				/>
			</div>
		</div>
	);
}
