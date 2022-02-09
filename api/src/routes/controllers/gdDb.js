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
 const y = await infoDB.map(infoDB => infoDB = {
  id: infoDB.id,
  name: infoDB.name,
  height_min: infoDB.height_min,
  height_max: infoDB.height_max,
  weight_min: infoDB.weight_min,
  weight_max: infoDB.weight_max,
  life_span: infoDB.life_span,
  createInDb: infoDB.createInDb,
  image: infoDB.image,
  temperament: infoDB.temperaments.map( e => e.name)
 
}) 
 //console.log('hola',y)
  return y;//infoDB[0].dataValues
};

module.exports = {
  dogsDB,
};
