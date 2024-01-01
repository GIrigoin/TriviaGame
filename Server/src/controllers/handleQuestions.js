//Parametros que debemos recibir por query:
// Numero de preguntas, dificultad (opcional), categoria (opcional)

const axios = require("axios");

const getQuestions = async (req, res) => {
  let query = "";
  try {
    if (req.query.cantidad) {
      query = query + "?amount=" + req.query.cantidad;
      if (req.query.dificultad) {
        query = query + "&difficulty=" + req.query.dificultad;
      }
      if (req.query.categoria) {
        query = query + "&category=" + req.query.categoria;
      }
      let { data } = await axios("https://opentdb.com/api.php" + query);
      if (data) {
        res.json(data.results);
      } else {
        throw Error("Algo salio mal");
      }
    } else {
      throw Error("Debe indicar el numero de preguntas a enviar");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getQuestions;
