const express = require("express");
const { request } = require("../app");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  const concerts = await knex("concerts");

  try {
    if (request.query.hasOwnProperty("id")) {
      const requestId = Number(request.query.id);
      const requestedConcert = await concerts.filter(
        (concert) => concert.id === requestId
      );

      if (requestedConcert.length > 0) {
        response.send(requestedConcert);
      } else {
        response.send("no concert match your request");
      }
    } else if (request.query.hasOwnProperty("maxPrice")) {
      const requestPrice = Number(request.query.maxPrice);
      const requestedConcert = await concerts.filter(
        (concert) => Number(concert.price) < requestPrice
      );

      if (requestedConcert.length > 0) {
        response.send(requestedConcert);
      } else {
        response.send("no concert match your request");
      }
    } else if (request.query.hasOwnProperty("title")) {
      const requestTitle = request.query.title.toLowerCase();
      const requestedConcert = await concerts.filter((concert) =>
        concert.title.toLowerCase().includes(requestTitle)
      );

      if (requestedConcert.length > 0) {
        response.send(requestedConcert);
      } else {
        response.send("no concert match your request");
      }
    } else if (request.query.hasOwnProperty("createdAfter")) {
      const requestDate = new Date(request.query.createdAfter);
      const requestedConcert = await concerts.filter(
        (concert) => new Date(concert.created_date) > requestDate
      );

      if (requestedConcert.length > 0) {
        response.send(requestedConcert);
      } else {
        response.send("no concert match your request");
      }
    } else if (request.query.hasOwnProperty("band")) {
      const requestBand = request.query.band.toLowerCase();
      const requestedConcert = await concerts.filter(
        (concert) => concert.band.toLowerCase() === requestBand
      );

      if (requestedConcert.length > 0) {
        response.send(requestedConcert);
      } else {
        response.send("no concert match your request");
      }
    } else {
      response.send(concerts);
    }
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    const concerts = await knex("concerts").insert(request.body);

    response.send("concert posted successfully");
  } catch (error) {
    throw error;
  }
});

router.put("/", async (request, response) => {
  try {
    const concerts = await knex("concerts");

    if (request.query.hasOwnProperty("id")) {
      const concertId = Number(request.query.id);
      const concertFinder = concerts.some(
        (concert) => concert.id === concertId
      );
      if (concertFinder) {
        const updateConcerts = await knex("concerts")
          .where({ id: concertId })
          .update({ band: "electronic concert" });
        response.json(
          `concert with id: ${concertId} was successfully Updated.`
        );
      } else {
        response.send(`No concert matches the id:${concertId}`);
      }
    } else {
      response.status(400).send(`Bad Request`);
    }
  } catch (error) {
    throw error;
  }
});

router.delete("/", async (request, response) => {
  try {
    const concerts = await knex("concerts");

    if (request.query.hasOwnProperty("id")) {
      const concertId = Number(request.query.id);
      const concertFinder = concerts.some(
        (concert) => concert.id === concertId
      );
      if (concertFinder) {
        const updateConcerts = await knex("concerts")
          .where({ id: concertId })
          .del();
        response.send(`concert with id: ${concertId} was successfully DELETE`);
      } else {
        response.send(`No concert matches the id:${concertId}`);
      }
    } else {
      response.status(400).send(`Bad Request`);
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
