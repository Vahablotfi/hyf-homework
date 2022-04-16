const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/:id", async (request, response) => {
  var requestId = Number(request.params.id);

  const result = reservations.filter(
    (reservation) => reservation.id === requestId
  );

  if (result.length > 0) {
    response.send(result[0]);
  } else {
    response.send(`There is no Reservation with id ${requestId}`);
  }
});

// /api/reservations	Respond with the json for all reservations *
router.get("/", async (request, response) => {
  response.send(reservations);
});

module.exports = router;
