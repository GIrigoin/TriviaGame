const express = require("express");
const router = express.Router();
const { getScores, addScore } = require("../controllers/handleScores");
const getQuestions = require("../controllers/handleQuestions");
const getCategories = require("../controllers/handleCategories");

router.get("/scores", getScores);

router.post("/scores", addScore);

router.get("/questions", getQuestions);

router.get("/categories", getCategories);

module.exports = router;
