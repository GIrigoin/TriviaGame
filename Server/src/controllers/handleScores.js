const { log } = require("console");
const fs = require("fs");

//La lista de puntajes es un array con elementos que tienen el siguiente formato:
// {nombre, puntaje}

const getScores = (req, res) => {
  try {
    fs.readFile("../Server/src/utils/scores.json", "utf-8", (error, data) => {
      if (error) throw error;
      res.json(JSON.parse(data));
    });
  } catch (error) {
    res.status(500).send("Epa! Que rompimos?");
  }
};

const addScore = async (req, res) => {
  try {
    if (req.body.nombre && req.body.puntaje) {
      fs.readFile("../Server/src/utils/scores.json", "utf-8", (error, data) => {
        if (error) throw error;
        let lista = JSON.parse(data);
        console.log(lista);
        console.log(req.body);
        let index = lista.findIndex((item) => item.nombre === req.body.nombre);
        console.log("Index " + index);
        if (index >= 0) {
          if (lista[index].puntaje < req.body.puntaje)
            lista[index].puntaje = req.body.puntaje;
        } else {
          lista.push(req.body);
        }

        fs.writeFile(
          "../Server/src/utils/scores.json",
          JSON.stringify(lista),
          "utf-8",
          (error) => {
            if (error) throw error;
          }
        );
        res.json(lista);
      });
    } else {
      throw Error("Faltan Datos");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getScores, addScore };
