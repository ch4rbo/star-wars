import React, { useContext } from "react";
import "../../styles/home.scss";
import Tarjeta from "../component/tarjeta.js";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="scroll">
					{store.listaPersonajes.map((personaje, index) => {
						return <Tarjeta key={index} name={personaje.name} />;
					})}
				</div>
			</div>

			<div className="row">
				{store.listaPlanetas.map((planeta, index) => {
					return <Tarjeta key={index} name={planeta.name} />;
				})}
			</div>
		</div>
	);
};
