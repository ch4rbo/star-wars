const getState = ({ getStore, getActions, setStore }) => {
	const urlPers = "https://www.swapi.tech/api/people/";
	const urlPlan = "https://www.swapi.tech/api/planets/";
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			listaPersonajes: [],
			listaPlanetas: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch(urlPers, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
						console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
					})
					.catch(error => {
						//manejo de errores
						alert(error);
					});

				fetch(urlPlan, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
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
