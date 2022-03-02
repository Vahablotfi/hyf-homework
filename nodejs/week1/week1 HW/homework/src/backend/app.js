const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations= require('./data/reservations');
const reviews= require('./data/reviews');

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("node.js week1  homework");
});


//   /meals	Respond with the json for all the meals. For each meal, 
// if there are reviews matching it's meal ID, add these reviews to each meal 
// in the form of an array. For meals that do not have any reviews,
//  the "reviews" property will be an empty array.

const mealsWithReview=
  meals.map(meal=>{
       meal.Review=reviews.filter(review=>review.mealId==meal.id);
      return meal;
  })
app.get("/meals", async (request, response) => {
  response.send(mealsWithReview);
});

// /cheap-meals	Respond with the json for all the meals 
// (including it's reviews) that are cheap (you define what a cheap meal is)
const cheapMeals=mealsWithReview.filter(meal=>meal.price<=50);
app.get("/cheap-meals", async (request, response) => {
  response.send(cheapMeals);
});


// /large-meals	Respond with the json for all the meals 
//(including it's reviews) that can fit lots of people
app.get("/large-meals", async (request, response) => {
  const bigMeal=mealsWithReview.filter(meal=>meal.maxNumberOfGuests>=10);
  response.send(bigMeal);
});

// /meal	Respond with the json for a random meal (including it's reviews)
app.get("/meal", async (request, response) => {
  const randomNumberForMeals =Math.floor(Math.random()*mealsWithReview.length)
const randomMeal =mealsWithReview[randomNumberForMeals];
  response.send(randomMeal);
});


// /reservations	Respond with the json for all reservations
app.get("/reservations", async (request, response) => {
  response.send(reservations);
});



// /reservation	Respond with the json for a random reservation
app.get("/reservation", async (request, response) => {
  const randomNumberForReservation =Math.floor(Math.random()*reservations.length)
const randomReservation =reservations[randomNumberForReservation];
  response.send(randomReservation);
});

module.exports = app;
