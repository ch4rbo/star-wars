import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const Tarjeta = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card" style={{ width: "auto", display: "inline-block", margin: "5px" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">Learn More Learn More ASDKÑLASLDAS[D</p>
				<div className="d-flex justify-content-between">
					<a href="#" className="btn btn-primary">
						Star Wars Fandome
					</a>{" "}
					<button
						type="button"
						className="btn btn-outline-warning"
						onClick={actions.setFavorites(props.name)}>
						<i className="far fa-heart" />
					</button>
				</div>{" "}
			</div>
		</div>
	);
};

Tarjeta.propTypes = {
	name: PropTypes.string
};
export default Tarjeta;
