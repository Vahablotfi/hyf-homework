const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

// router.get("/", async (request, response) => {
//   try {
//     console.log(reviews);
//     console.log("in /api/reviews");
//   } catch (error) {
//     throw error;
//   }
// });

// /api/reviews/{id}	Respond with the json for the review with the 
//corresponding id *
router.get("/:id", async (request, response) => {

    var requestId =Number(request.params.id);
  
    const find=reviews.some(review=>review.id==requestId)
  
    const result=reviews.filter(review=>review.id===requestId);
  
    if(find){
      response.send(result);
    }else{
      response.send(`There is no Review with id ${requestId}`);
    }
  });
// /api/reviews	Respond with the json for all reviews *

router.get("/", async (request, response) => {
    response.send(reviews)
 });

module.exports = router;