const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/:id", async (req, res) => {
  try {
    const requestId = Number(req.params.id);
    const result = meals.filter((meal) => meal.id === requestId);

    if (result.length > 0) {
      res.send(result);
    } else {
      res.send(`There is no meal with id ${requestId}`);
    }
  } catch (error) {
    throw error;
  }
});

router.get("/", async (req, res) => {
  if (Object.keys(req.query).length === 0) {
    res.send(meals);
  } else if (req.query.hasOwnProperty("maxPrice")) {
    const maxPrice = Number(req.query.maxPrice);
    const maxPriceFinder = meals.some((meal) => meal.price <= maxPrice);

    if (maxPriceFinder.length > 0) {
      res.send(maxPriceFinder);
    } else {
      res.send(`No food with price: ${maxPrice} or cheaper`);
    }
  } else if (req.query.hasOwnProperty("title")) {
    const requestedTitle = req.query.title.toLowerCase();
    const mealFinder = meals.some((meal) =>
      meal.title.toLowerCase().includes(requestedTitle)
    );

    if (mealFinder.length > 0) {
      res.send(mealFinder);
    } else {
      res.send(`There is no meal with the title ${requestedTitle}`);
    }
  } else if (req.query.hasOwnProperty("createdAfter")) {
    const requestedDate = new Date(req.query.createdAfter);
    const requestedDateFinder = meals.some(
      (meal) => new Date(meal.createdAt) > requestedDate
    );
    if (requestedDateFinder.length > 0) {
      res.send(requestedDateFinder);
    } else {
      res.send(`No food have been planned after ${requestedDate}`);
    }
  } else if (req.query.hasOwnProperty("limit")) {
    const limitRequest = Number(req.query.limit);
    if (limitRequest !== 0) {
      res.send(meals.slice(0, limitRequest));
    } else {
      res.send(`Limit request is not valid`);
    }
  } else {
    res.status(404).send("invalid request: no match exist with your request");
  }
  try {
    console.log(meals);
    console.log("in /api/meals");
  } catch (error) {
    throw error;
  }
});

module.exports = router;
