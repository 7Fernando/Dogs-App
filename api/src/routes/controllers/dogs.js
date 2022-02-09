// const fetch = require("cross-fetch");
// let { Breed, Temperament } = require("../../db.js");
// require("dotenv").config();
// const { key } = process.env;
// const url = `https://api.thedogapi.com/v1/breeds?key=${key}`;
// //const mergeInfo = require("./mergeInfo");

// //  GET /dogs:
// // Obtener un listado de las razas de perro
// // Debe devolver solo los datos necesarios para la ruta principal (name, temperament, image)

// // [ ] GET /dogs?name="...":
// // Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
// // Si no existe ninguna raza de perro mostrar un mensaje adecuado

// async function getAllDogs(req, res) {
//   const { name } = req.query;

//   // try {
//   //   const dogs = await mergeInfo();//[{},{},{}]
//   //   if (name) {
      
//   //     const foundName = dogs.filter( dog =>{ dog.name.toLoweCase() === name.toLoweCase() } )
//   //     if(foundName.length > 0){
//   //       return res.json(foundName);
//   //     }
//   //     else{
//   //       return res.status(404).send("Name not found");
//   //     }
//   //   } else return res.json(dogs);

//   // } catch (error) {
//   //   console.log(err);
//   // }
  
// try{
//   if (name){
//     let dogsApi = await fetch(url).then((data) => data.json());
//     const MatchedDogsApi = await dogsApi.filter((dog) => dog.name === name);
//     let necessaryInformationApi;
//     if(MatchedDogsApi[0] !== undefined) {
//       necessaryInformationApi = await MatchedDogsApi.map((dog) => {
//         return ({
//           id: dog.id,
//           image: dog.image.url,
//           name: dog.name,
//           temperament: dog.temperament,
//           weight: dog.weight.metric
//         });
//       }) 
  
//     } "hola1";
//     let dogsDb = await Breed.findAll()
//     const MatchedDogsDb = await dogsDb.filter((dog) => dog.dataValues.name === name);
//     //console.log(MatchedDogsDb)
//     let necessaryInformationDb; 
//     if(MatchedDogsDb[0] !== undefined) {
//       necessaryInformationDb = await MatchedDogsDb.map((dog) => {
//         return ({
//           id: dog.id,
//           //image: dog.image.url,
//           name: dog.name,
//           //temperament: dog.temperament,
//           weight: dog.weight
//       });
//     }) 
//   }  "hola2";
//     // const y = necessaryInformationApi.concat(necessaryInformationDb);
//     console.log(necessaryInformationDb)
//     //let mergeInfo = [];

//     return   necessaryInformationApi||necessaryInformationDb[0] ? res.json(necessaryInformationDb) : res.send("No se encontró el perro pa");
//   }

// }catch(e){
//   console.log(e);
// }
// }







// // async function getMatchedDog(req, res) {
// //   const { idRaza } = req.params;

// //   if (idRaza) {
// //     const dogs = await mergeInfo();//[{},{},{}]
// //     const MatchedDog = await dogs.find((dog) => dog.id === Number(idRaza));
// //     let { image, name, temperament, weight } = MatchedDog;
// //     let imageU = image.url,
// //       weightM = weight.metric;

// //     res.send({ imageU, name, temperament, weightM });
// //   }
// // }

// // async function getTemperaments(req, res) {
// //   const data = await fetch(url);
// //   const dogs = await data.json();

// //   let temps = [];
// //   dogs
// //     .map((e) => " " + e.temperament)
// //     .join()
// //     .split(", ")
// //     .forEach((e) => (temps.includes(e) ? "continue" : temps.push(e)));
// //   res.send(temps);
// // }

// // async function createDog(req, res) {
// //   let { name, height_min, height_max, weight_min, weight_max, life_span, createInBd, temperament, image } = req.body;

// //   if(!image){
// //     try {
// //         image = await (await axios.get('https://dog.ceo/api/breeds/image/random')).data.message;
// //     } catch (error) {
// //         console.log(error)
// //     }
// // }    

// // if (name && height_min && height_max && weight_min && weight_max && life_span && temperament && image) {
// //   let dogsCreate = await Breed.create({
// //       name: name,
// //       height_min: parseInt(height_min),
// //       height_max: parseInt(height_max),
// //       weight_min: parseInt(weight_min),
// //       weight_max: parseInt(weight_max),
// //       life_span: life_span,
// //       image: image || 'https://dog.ceo/api/breeds/image/random' ,
// //       createInBd: createInBd,
// //   }) 
// //   let findTemperamentDB = await Temperament.findAll({ where: { name: temperament } })
// //   dogsCreate.addTemperament(findTemperamentDB); //agrego al perro creado el temperamento que selecciono el usuario
// //   res.status(200).send(dogsCreate)
// // } else {
// //   res.status(404).send('Please, complete all the fields')
// // }


// //}


// module.exports = {
//   getAllDogs,
//   // getMatchedDog,
//   // getTemperaments,
//  // createDog
// };
