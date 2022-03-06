const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

// router.get("/", async (request, response) => {
//   try {
//     console.log(reservations);
//     console.log("in /api/reservations");
//   } catch (error) {
//     throw error;
//   }
// });


// /api/reservations/{id}	Respond with the json for the reservation with 
// the corresponding id *

router.get("/:id", async (request, response) => {

    var requestId =Number(request.params.id);
  
    const find=reservations.some(reservation=>reservation.id==requestId)
  
    const result=reservations.filter(reservation=>reservation.id===requestId);
  
    if(find){
      response.send(result[0]);
    }else{
      response.send(`There is no Reservation with id ${requestId}`);
    }
  });

// /api/reservations	Respond with the json for all reservations *
router.get("/", async (request, response) => {
    response.send(reservations)
 });



module.exports = router;