import React, { useContext } from "react";
import "../../styles/home.scss";
import Tarjeta from "../component/tarjeta.js";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid">
			<div
				className="scrolling-wrapper row flex-row flex-nowrap row-cols-1 row-cols-md-3"
				style={{ overflowX: "scroll", overflowY: "hidden", whiteSpace: "nowrap" }}>
				{store.listaPersonajes.map((personaje, index) => {
					return <Tarjeta key={index} name={personaje.name} />;
				})}
			</div>

			<div
				className="scrolling-wrapper row flex-row flex-nowrap row-cols-1 row-cols-md-3"
				style={{ overflowX: "scroll", overflowY: "hidden", whiteSpace: "nowrap" }}>
				{store.listaPlanetas.map((planeta, index) => {
					return <Tarjeta key={index} name={planeta.name} />;
				})}
			</div>
		</div>
	);
};
