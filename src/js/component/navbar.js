import React from "react";
import PropType from "prop-types";
export function NavBar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<a className="navbar-brand" href="#">
				{props.navBarName}
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a className="nav-link" href="#">
							{props.linkOne}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							{props.linkTwo}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							{props.linkThree}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							{props.linkFour}
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
NavBar.propTypes = {
	navBarName: PropType.string,
	linkOne: PropType.string,
	linkTwo: PropType.string,
	linkThree: PropType.string,
	linkFour: PropType.string
};
