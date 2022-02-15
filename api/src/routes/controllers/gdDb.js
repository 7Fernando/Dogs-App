let { Breed, Temperament } = require("../../db.js");

const dogsDB = async () => {
    
  let infoDB = await Breed.findAll({
    include: {
        model: Temperament, //incluyo el modelo Temperament porq el modelo DOG no lo tiene
        attributes: ['name'],
        through: {           //es una validacion donde se constata que traiga solo los atributos señalados de la tabla Temperament
            attributes: [],
        },
    }
    // where: {
      
    //   name: name,
    // },
  });
  // console.log("hola22",infoDB[0])
  /*dogsDb = await Breed.findAll({
    include: {
      model: Temperament,
      attributes: ['name']
    }
  }) */
 const dogs = await infoDB.map(d => d = {
  id: d.id,
  name: d.name,
  height_min: d.height_min,
  height_max: d.height_max,
  weight_min: d.weight_min,
  weight_max: d.weight_max,
  life_span: d.life_span,
  createInDb: d.createInDb,
  image: d.image,
  temperament: d.temperaments.map( e => e.name)
 
}) 
 //console.log('hola',dogs)
  return dogs;//infoDB[0].dataValues
};

module.exports = {
  dogsDB,
};
