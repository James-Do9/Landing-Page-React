import React from "react";
import PropType from "prop-types";
export function BootstrapCard(props) {
	return (
		<div className="row">
			<div className="col-3">
				<div className="card m-5">
					<img
						className="card-img-top"
						src={props.imageUrlOne}
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">{props.titleOne}</h5>
						<p className="card-text">{props.descriptionOne}</p>
						<a
							href={props.buttonUrlOne}
							className="btn btn-primary">
							{props.buttonLabelOne}
						</a>
					</div>
				</div>
			</div>
			<div className="col-3">
				<div className="card m-5">
					<img
						className="card-img-top"
						src={props.imageUrlTwo}
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">{props.titleTwo}</h5>
						<p className="card-text">{props.descriptionTwo}</p>
						<a
							href={props.buttonUrlTwo}
							className="btn btn-primary">
							{props.buttonLabelTwo}
						</a>
					</div>
				</div>
			</div>
			<div className="col-3">
				<div className="card m-5">
					<img
						className="card-img-top"
						src={props.imageUrlThree}
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">{props.titleThree}</h5>
						<p className="card-text">{props.descriptionThree}</p>
						<a
							href={props.buttonUrlThree}
							className="btn btn-primary">
							{props.buttonLabelThree}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
BootstrapCard.propTypes = {
	imageUrlOne: PropType.string,
	titleOne: PropType.string,
	descriptionOne: PropType.string,
	buttonUrlOne: PropType.string,
	buttonLabelOne: PropType.string,
	imageUrlTwo: PropType.string,
	titleTwo: PropType.string,
	descriptionTwo: PropType.string,
	buttonUrlTwo: PropType.string,
	buttonLabelTwo: PropType.string,
	imageUrlThree: PropType.string,
	titleThree: PropType.string,
	descriptionThree: PropType.string,
	buttonUrlThree: PropType.string,
	buttonLabelThree: PropType.string
};
