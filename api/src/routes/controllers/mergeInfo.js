// const fetch = require("cross-fetch");
// let { Breed, Temperament } = require("../../db");
// require("dotenv").config();
// const { key } = process.env;
// const url = `https://api.thedogapi.com/v1/breeds?key=${key}`;

// // async function dogsFromApi() {
// //   try{
// //     let dogsApi = await fetch(url).then((data) => data.json());
// //   const necessaryInformationApi = await dogsApi.map((dog) => {
// //     return {
// //       id: dog.id,
// //       name: dog.name,
// //       image: dog.image.url,
// //       temperament: dog.temperament,
// //       weight_min: Number(dog.weight.metric.slice(0, 1)),
// //       weight_max: Number(dog.weight.metric.slice(4)),
// //       height_min: Number(dog.height.metric.slice(0, 1)),
// //       height_max: Number(dog.height.metric.slice(4)),
// //       life_span: dog.life_span,
// //       //breed_group: dog.breed_group,
// //     };
// //   });
// //   return necessaryInformationApi;
// // }catch(e){
// //     console.log(e)
// // }
// // }

// // async function dogsFromDb() {

// //  try{ let dogsFromDb = await Breed.findAll({
// //     // include: {
// //     //   model: Temperament, //incluyo el modelo Temperament porq el modelo DOG no lo tiene
// //     //   attributes: ["name"],
// //     //   through: { //es una validacion donde se constata que traiga solo los atributos señalados de la tabla Temperament
// //     //     attributes: [],
// //     //   },
// //     // },
// //   });
// //   //console.log(infoDB);
// //   return dogsFromDb;}catch(e){
// //       console.log(e)
// //   }
// // }

// // const mergeInfo = async () => {
// //     let dogsApi = await dogsFromApi();
// //     let dogsDb = await dogsFromDb();
// //     let mergeBoth = await dogsApi.concat(dogsDb);
// //     return mergeBoth;
// // }


// // module.exports = {
// //   mergeInfo
// // };
