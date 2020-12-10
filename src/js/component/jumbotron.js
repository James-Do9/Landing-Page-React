import React from "react";
import PropType from "prop-types";
export function Jumbotron(props) {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">{props.header}</h1>
				<p className="lead">{props.description}</p>
				<a
					className="btn btn-primary btn-lg"
					href={props.buttonUrl}
					role="button">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
}
Jumbotron.propTypes = {
	header: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string
};
