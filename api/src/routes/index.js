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
  try {
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
  } catch (error) {
    res.status(404).json(error);
  }
});

router.get("/dogs/:idRaza", async (req, res) => {
  const { idRaza } = req.params;
  try {
    if (idRaza) {
      let dogsApi2 = await dogsApi();

      let dogsDB2 = await dogsDB();

      const allDogs = [...dogsApi2, ...dogsDB2]; //await dogsApi2.concat(dogsDB2)
      //console.log(dogsDB2)

      const dogName = allDogs.filter((d) => {
        //console.log(idRaza)
        return String(d.id) === idRaza;
      });

      if (!dogName.length) {
        return res.status(404).send({ msg: "Dog ID not found" });
      }
      return res.json(dogName);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get("/temperament", async (req, res) => {
  try {
    let dogs = await dogsApi();

    let temps = [];
    let newArr = [];

    dogs.map((dog) =>
      dog.temperament !== null ? dog.temperament.map((e) => newArr.push(e)) : ""
    );
    newArr.forEach((e) => (temps.includes(e) ? "continue" : temps.push(e)));

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
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post("/dog", async (req, res) => {
  try {
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
    // name[0].toUpperCase();
    // console.log(name[0].toUpperCase())
   
    // console.log(name)
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
        life_span: life_span  + " " + "years",
        image,
        createInBd: true,
      });

      let findTemperamentDB = await Temperament.findAll({
        where: { name: temperament },
      }); //[{},{},{}]
       // name: { [Op.in]: temperament }
      // console.log('jeje',findTemperamentDB)
      //j = await findTemperamentDB.map( e => e.dataValues.name)
      //console.log(findTemperamentDB)
      //       Shorthand syntax for Op.in
      // Passing an array directly to the where option will implicitly use the IN operator:

      // Post.findAll({
      //   where: {
      //     id: [1,2,3] // Same as using `id: { [Op.in]: [1,2,3] }`
      //   }
      // });
      // // SELECT ... FROM "posts" AS "post" WHERE "post"."id" IN (1, 2, 3);
      const y = await newDog.addTemperament(findTemperamentDB); //agrego al perro creado el temperamento que selecciono el usuario
      res.status(200).json({
        msg: "All good",
        data: y,
      });
    } else {
      res.status(404).send("Please, complete all the fields");
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
