//import { fetchDogs } from "../actions/actions";

const initialState = {
  dogs: [],
  temperaments: [],
  origin: [],
  idDog: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchDogs":
      return {
        ...state,
        dogs: action.payload,
        origin: action.payload,
      };
    case "createDog":
      return {
        ...state, //copio lo que ya tengo en el array le concateno el nuevo obj
        dogs: state.dogs.concat(action.payload), //[{},{}] --> [{},{},{}]
      };
    case "getTemperaments":
      return {
        ...state,
        temperaments: action.payload,
      };

    case "orderByName":
      const sortArr =
        action.payload === "asc"
          ? [...state.origin].sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              return 0;
            })
          : [...state.origin].sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              return 0;
            });

      return {
        ...state,
        dogs: sortArr,
      };

    case "orderByWeight":
      const sortArr2 =
        action.payload === "wmin"
          ? [...state.origin].sort((a, b) => {
              if (a.weight_min < b.weight_min) return -1;
              if (a.weight_min > b.weight_min) return 1;
              return 0;
            })
          : [...state.origin].sort((a, b) => {
              if (a.weight_max > b.weight_max) return -1;
              if (a.weight_max < b.weight_max) return 1;
              return 0;
            });

      return {
        ...state,
        dogs: sortArr2,
      };

    case "orderByOrigin":
      let originFilter = state.origin;

      const createdDogs =
        action.payload === "Dogs_from_DB"
          ? originFilter.filter((e) => e.createInDb)
          : originFilter.filter((e) => !e.createInDb);
      //console.log('yuyu',createdDogs)
      return {
        ...state,
        dogs: createdDogs,
      };

    case "filterByTemperament":
      let temperamentFilter = state.origin;

      const t = temperamentFilter.filter((e) =>
        e.temperament !== null ? e.temperament.includes(action.payload) : ""
      );
      return {
        ...state,
        dogs: t,
      };

    case "findByID":
      let idDog = action.payload;
      console.log(idDog);
      return{
        ...state,
        idDog: idDog
      }
      case "searchADog":
        let dogFound = action.payload;
        console.log(dogFound);
        return{
          ...state,
          dogs: dogFound
        }

    default:
      return state;
  }
};
export default rootReducer;
