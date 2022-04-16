const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/:id", async (request, response) => {
  var requestId = Number(request.params.id);

  const result = reviews.filter((review) => review.id === requestId);

  if (result.length > 0) {
    response.send(result);
  } else {
    response.send(`There is no Review with id ${requestId}`);
  }
});
// /api/reviews	Respond with the json for all reviews *

router.get("/", async (request, response) => {
  response.send(reviews);
});

module.exports = router;
