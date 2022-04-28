const express = require("express");
const HomeRouter = express.Router();
const HomeController = require("../controllers/home.controller");

HomeRouter.get("/", HomeController);

module.exports = HomeRouter;
