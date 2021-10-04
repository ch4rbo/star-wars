import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import CurrentCharacter from "./views/currentcharacter";
import CurrentPlanet from "./views/currentplanet";
import { Link } from "react-router-dom";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/character">
							<CurrentCharacter />
						</Route>
						<Route exact path="/planet">
							<CurrentPlanet />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
						<Route>
							<h1>¡Página no encontrada!</h1>
							<Link to="/">
								<button>Volver a la página principal.</button>
							</Link>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
