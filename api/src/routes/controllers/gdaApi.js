const fetch = require("cross-fetch");
require("dotenv").config();
const { key } = process.env;
const url = `https://api.thedogapi.com/v1/breeds?key=${key}`;

const dogsApi = async () => {
  let dogsApi = await fetch(url).then((data) => data.json());
  const dogMainInfo = dogsApi.map((dog) => {
    //[" temp, temp", "temp, temp"] el espacio para unir mas facil difs temps
    // let temps =[]
    // let y = dog
    //   .join() //[" temp, temp, temp, temp"]
    //   .trim()
    //   .split(", ")
    //   .forEach((e) => temps.push(e));
    //let temperament1 = [dog.temperament].split(", ")
   //== undefined || dog.temperament == null ? null : dog.temperament.split(", ")
   // console.log('yeloooow',dog.temperament.split(", "))
    return {
      id: dog.id,
      name: dog.name,
      image: dog.image.url,
      temperament: dog.temperament === undefined || dog.temperament === null ? null : dog.temperament.split(", "),//dog.temperament,
      weight_min: Number(dog.weight.metric.slice(0, 1)),
      weight_max: Number(dog.weight.metric.slice(4)),
      height_min: Number(dog.height.metric.slice(0, 1)),
      height_max: Number(dog.height.metric.slice(4)),
      life_span: dog.life_span,
     
    };
  });
  //console.log(dogMainInfo[0].temperament)
  return dogMainInfo;
};

module.exports = {
  dogsApi,
};
