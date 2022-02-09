//const { Router } = require("express");
const express = require("express");
const router = express.Router();
let { Breed, Temperament } = require("../db.js");
const fetch = require("cross-fetch");
require("dotenv").config();

const { key } = process.env;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//const { getAllDogs, createDog } = require('./controllers/dogs.js');

//const router = Router();
router.use(express.json());

const { dogsApi } = require("./controllers/gdaApi");
const { dogsDB } = require("./controllers/gdDb");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
let j;
 
router.get("/dogs", async (req, res) => {
  const { name } = req.query;

  let dogsApi2 = await dogsApi();

  const dogsDB2 = await dogsDB();
  //console.log('lala', dogsDB2)

  const allDogs = [...dogsApi2, ...dogsDB2]; //await dogsApi2.concat(dogsDB2)

  if (name) {
    const dogName = allDogs.filter((d) => {
      // console.log(d)
      return d.name.toLowerCase().includes(name.toLowerCase());
    });

    if (!dogName.length) {
      return res.status(404).send({ msg: "Dog not found" });
    }
    return res.json(dogName);
  }

  return res.send(allDogs);
});

router.get("/dogs/:idRaza", async (req, res) => {
  const { idRaza } = req.params;

  let dogsApi2 = await dogsApi();

  let dogsDB2 = await dogsDB();
  //console.log('lala', dogsDB2)

  const allDogs = [...dogsApi2, ...dogsDB2]; //await dogsApi2.concat(dogsDB2)
  //console.log(dogsDB2)
  if (idRaza) {
    const dogName = allDogs.filter((d) => {
       //console.log(idRaza)
      return String(d.id) === idRaza;
    });

    if (!dogName.length) {
      return res.status(404).send({ msg: "Dog ID not found" });
    }
    return res.json(dogName);
  }
});

router.get("/temperament", async (req, res) => {
  let dogs = await dogsApi();

  let temps = [];
  let newArr = [];
  dogs.map(dog => dog.temperament !== null ? dog.temperament.map(e => newArr.push(e)): "" );
  newArr.forEach((e) => temps.includes(e) ? "continue" : temps.push(e) );

  let contador = 0;
  
  while (contador < temps.length) {
    await Temperament.findOrCreate({
      where: { name: temps[contador] },
      defaults: {
        name: temps[contador],
      },
    });
    contador++;
  }
  //   let contador2 = 0;
  const temperamentsDB = async () => {
    let infoDB = await Temperament.findAll();

    return infoDB;
  };

  let y = await temperamentsDB();
  let tdb = y.map((e) => e.name);
  //console.log(y)

  return res.json(tdb);
});

router.post("/dog", async (req, res) => {
  let {
    name,
    height_min,
    height_max,
    weight_min,
    weight_max,
    life_span,
    temperament,
    image,
  } = req.body;

  if (!image) {
    try {
      let { message } = await fetch(
        "https://dog.ceo/api/breeds/image/random"
      ).then((data) => data.json());
      image = message;
    } catch (error) {
      console.log(error);
    }
  }
  let parameters =
    name &&
    height_min &&
    height_max &&
    weight_min &&
    weight_max &&
    life_span &&
    temperament &&
    image;

  if (parameters) {
    let newDog = await Breed.create({
      name: name,
      height_min: Number(height_min),
      height_max: Number(height_max),
      weight_min: Number(weight_min),
      weight_max: Number(weight_max),
      life_span,
      image,
      createInBd: true,
    });

    let findTemperamentDB = await Temperament.findAll({
      where: { name: temperament },
    }); //[{},{},{}]
    // console.log('jeje',findTemperamentDB)
    //j = await findTemperamentDB.map( e => e.dataValues.name)
    //console.log(findTemperamentDB)
    const y = await newDog.addTemperament(findTemperamentDB); //agrego al perro creado el temperamento que selecciono el usuario
    res.status(200).json({
      msg: "All good",
      data: y,
    });
  } else {
    res.status(404).send("Please, complete all the fields");
  }
});

module.exports = router;
