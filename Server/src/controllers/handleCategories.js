const axios = require("axios");

const getCategories = async (req, res) => {
  try {
    let { data } = await axios("https://opentdb.com/api_category.php");
    if (data) {
      res.json(data.trivia_categories);
    } else {
      res.status(404).send("Not Found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getCategories;
