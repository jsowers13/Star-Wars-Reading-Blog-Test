const getState = ({ getStore, getActions, setStore }) => {
  //const backendUrl = "https://swapi.tech/api";
  const backendUrl = "https://swapi.dev/api";
  return {
    store: {
      characters: [
        {
          height: "172",
          mass: "77",
          hair_color: "blond",
          skin_color: "fair",
          eye_color: "blue",
          birth_year: "19BBY",
          gender: "male",
          created: "2022-11-24T20:21:16.705Z",
          edited: "2022-11-24T20:21:16.705Z",
          name: "Luke Skywalker",
          homeworld: "https://www.swapi.tech/api/planets/1",
          url: "https://www.swapi.tech/api/people/1",
        },
      ],
      planets: [
        {
          diameter: "10465",
          rotation_period: "23",
          orbital_period: "304",
          gravity: "1 standard",
          population: "200000",
          climate: "arid",
          terrain: "desert",
          surface_water: "1",
          created: "2022-11-24T20:21:16.711Z",
          edited: "2022-11-24T20:21:16.711Z",
          name: "Tatooine",
          url: "https://www.swapi.tech/api/planets/1",
        },
      ],
      vehicles: [
        {
          model: "Digger Crawler",
          vehicle_class: "wheeled",
          manufacturer: "Corellia Mining Corporation",
          cost_in_credits: "150000",
          length: "36.8 ",
          crew: "46",
          passengers: "30",
          max_atmosphering_speed: "30",
          cargo_capacity: "50000",
          consumables: "2 months",
          films: [],
          pilots: [],
          created: "2020-09-17T17:46:31.415Z",
          edited: "2020-09-17T17:46:31.415Z",
          name: "Sand Crawler",
          url: "https://www.swapi.tech/api/vehicles/4",
        },
      ],
      favorites: [],
    },
    actions: {
      getCharacters: () => {
        let newPeople = [];
        fetch(backendUrl + "/people")
          .then((res) => res.json())
          .then((data) => {
            // for (let i = 0; data.results.length > i; i++) {
            //   fetch(data.results[i].url)
            //     .then((resp) => resp.json())
            //     .then((info) => {
            //       newPeople.push(info.result.properties);
            //     })

            //     .catch((err) => console.log(err));
            // }
            setStore({ characters: data.results });
          })
          // .then(console.log(newPeople))
          // .then(() => setStore({ characters: newPeople }))
          //.then(console.log(getStore().characters))
          .catch((error) => console.log(error));
      },

      getPlanets: () => {
        let newPlanets = [];
        fetch(backendUrl + "/planets")
          .then((res) => res.json())
          .then((data) => {
            // for (let i = 0; data.results.length > i; i++) {
            //   fetch(data.results[i].url)
            //     .then((resp) => resp.json())
            //     .then((info) => {
            //       newPlanets.push(info.result.properties);
            //     })

            //     .catch((err) => console.log(err));
            // }
            setStore({ planets: data.results });
          })
          // .then(() => setStore({ planets: newPlanets }))
          .then(console.log(getStore().planets))
          .catch((error) => console.log(error));
      },

      getVehicles: () => {
        let newVehicles = [];
        fetch(backendUrl + "/vehicles")
          .then((res) => res.json())
          .then((data) => {
            // for (let i = 0; data.results.length > i; i++) {
            //   fetch(data.results[i].url)
            //     .then((resp) => resp.json())
            //     .then((info) => {
            //       newVehicles.push(info.result.properties);
            //     })

            //     .catch((err) => console.log(err));
            // }
            setStore({ vehicles: data.results });
          })
          // .then(() => setStore({ vehicles: newVehicles }))
          .then(console.log(getStore().vehicles))
          .catch((error) => console.log(error));
      },

      addFavorites: () => {},

      deleteFavorites: () => {},
    },
  };
};

export default getState;
