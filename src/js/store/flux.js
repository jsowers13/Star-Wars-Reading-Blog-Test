const getState = ({ getStore, getActions, setStore }) => {
	
	const backendUrl = "https://swapi.dev/api"
	return {
		store: {
			characters:[],
			planets:[],
			vehicles:[],
			favorites:[],		
		},
		actions: {
			
			getCharacters:()=>{
				fetch(backendUrl + "/people")
				.then(res=>res.json())
                .then(data=>{setStore({characters:data.results})})   
			},
			
			getPlanets:()=>{

            },
			
			getVehicles:()=>{

            },
			
			addFavorites: ()=>{

			},
			
			deleteFavorites: ()=>{

			}
		}
	};
};

export default getState;
