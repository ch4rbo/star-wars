const getState = ({ getStore, getActions, setStore }) => {
	// Estructura universal de flux, importo comandos para poder usar funciones dentro de flux
	const urlPeople = "https://www.swapi.tech/api/people?page=1&limit=100"; // Defino url de peticion de API con 100 resultados
	const urlPlanets = "https://www.swapi.tech/api/planets?page=1&limit=100"; //  Defino url de peticion de API con 100 resultados
	return {
		store: {
			// El store es donde almacen toda mi información
			demo: [
				{
					title: "FIRST", // datos de ejemplo
					background: "white", // datos de ejemplo
					initial: "white" // datos de ejemplo
				},
				{
					title: "SECOND", // datos de ejemplo
					background: "white", // datos de ejemplo
					initial: "white" // datos de ejemplo
				}
			],
			listaPersonajes: [], // defino array vacio para posterior uso
			listaPlanetas: [], // defino array vacio para posterior uso
			favoritos: [] // defino array vacio para posterior uso
		},
		actions: {
			//	En actions almaceno funcionalidades
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			setFavorites: favorito => {
				const store = getStore();
				if (store.favoritos.includes(favorito)) {
					getActions().removeFavoritos(favorito);
				} else {
					setStore({ favoritos: [...store.favoritos, favorito] });
				}
			},
			removeFavoritos: favorito => {
				const store = getStore();
				let newList = store.favoritos.filter(elem => elem != favorito);
				setStore({ favoritos: newList });
			},

			loadSomeData: () => {
				//    comienzo proceso de llamar a las 2 apis
				fetch(urlPeople, {
					// llamo a la api definida en linea 2
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						setStore({ listaPersonajes: data.results });
						//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
						console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
					})
					.catch(error => {
						//manejo de errores
						alert(error);
					});

				fetch(urlPlanets, {
					// lamo a la otra api definida en linea 3
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						setStore({ listaPlanetas: data.results });
						//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
						console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
					})
					.catch(error => {
						//manejo de errores
						alert(error);
					});
			}
			/**
				fetch().then().then(data => setStore({ "foo": data.bar }))
			*/
		},
		changeColor: (index, color) => {
			//get the store
			const store = getStore();

			//we have to loop the entire demo array to look for the respective index
			//and change its color
			const demo = store.demo.map((elm, i) => {
				if (i === index) elm.background = color;
				return elm;
			});

			//reset the global store
			setStore({ demo: demo });
		}
	};
};

export default getState;
