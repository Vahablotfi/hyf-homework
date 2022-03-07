const express = require("express");
const { request } = require("../app");
const router = express.Router();
const knex = require("../database");


router.get("/", async (request, response) => {
  const concerts = await knex("concerts");
 
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
          if(request.query.hasOwnProperty("id")){
            
            const requestId=Number(request.query.id);
            const concertFinder = concerts.some(concert=> concert.id ===requestId);
            const requestedConcert = await concerts.filter(concert=> concert.id ===requestId);
    
            if(concertFinder){
              response.json(requestedConcert);    
            }else {
              response.status(404).send('no concert match your request');
            }

    
          }else if(request.query.hasOwnProperty("maxPrice")){
            
            const requestPrice=Number(request.query.maxPrice);
            const priceFinder = concerts.some(concert=> Number(concert.price) < requestPrice);
            const requestedConcert = await concerts.filter(concert=> Number(concert.price)<requestPrice);
          
    
            if(priceFinder){
              response.json(requestedConcert);    
            }else{ 
                response.status(404).send('no concert match your request'); 
            }
 
          }else if(request.query.hasOwnProperty("title")){
           
           
            const requestTitle=request.query.title.toLowerCase();
            const titleFinder = concerts.some(concert=> concert.title.toLowerCase() ===requestTitle);
            const requestedConcert = await concerts.filter(concert=>concert.title.toLowerCase() ===requestTitle);
           
    
            if(titleFinder){
              response.json(requestedConcert);    
            }else{ 
                response.status(404).send('no concert match your request'); 
            }
           
          }else if(request.query.hasOwnProperty("createdAfter")){
            
            const requestDate=new Date(request.query.createdAfter);
            const concertFinder = concerts.some(concert=> new Date(concert.created_date) > requestDate);
            const requestedConcert = await concerts.filter(concert => new Date(concert.created_date) > requestDate);
           
    
            if(concertFinder){
              response.json(requestedConcert);    
            }else{ 
                response.status(404).send('no concert match your request'); 
            }
   
          }else if(request.query.hasOwnProperty("band")){
            const requestBand=request.query.band.toLowerCase();
            const concertFinder = concerts.some(concert=> concert.band.toLowerCase() ===requestBand);
            const requestedConcert = await concerts.filter(concert=>concert.band.toLowerCase() ===requestBand);
           
    
            if(concertFinder){
              response.json(requestedConcert);    
            }else{ 
                response.status(404).send('no concert match your request'); 
            }
          }else{
            response.json(concerts);
          }
 
  } catch (error) {
    throw error;
  }
});
  

router.post("/", async (request, response) => {

  try {
     // knex syntax for selecting things. Look up the documentation for knex for further info
    const concerts = await knex('concerts').insert(request.body);
   
    // Alternatively could also insert in the way commented below
    // but I personally prefer request.body method and using postman.
   
    // const concerts = await knex('concerts').insert( 
    //   {"title": "spring festival",
    // "band": "many singers",
    // "venue": "spring celebration",
    // "created_date": '2021-02-28 15:00:00',
    // "performance_date": '2021-04-22 17:00:00',
    // "price": 100});
   
    response.json(concerts);
  } catch (error) {
    throw error;
  }
});


router.put("/", async (request,response)=> {
  try{
    //api/concerts/{id}	PUT	Updates the concert by id	
    const concerts = await knex("concerts");
   

    if(request.query.hasOwnProperty('id')){
      
      const concertId=Number(request.query.id);
      const concertFinder = concerts.some(concert=> concert.id ===concertId);
      if(concertFinder){
           const updateConcerts = await knex("concerts")
           .where({ id: concertId })
         .update({ band : 'electronic concert' });
         response.json(`concert with id: ${concertId} was successfully Updated.`)
      }else{
        response.status(404).send(`No concert matches the id:${concertId}`);
      }
   
    } else{
      response.status(400).send(`Bad Request`);
    }
   
   
  }catch(error){
    throw error;
  }
});


router.delete("/", async (request,response)=> {
  try{
    //api/concerts/{id}	DELETE	Deletes the concert by id	DELETE api/concerts/2
    const concerts = await knex("concerts");

    if(request.query.hasOwnProperty('id')){
      
      const concertId=Number(request.query.id);
      const concertFinder = concerts.some(concert=> concert.id ===concertId);
      if(concertFinder){
           const updateConcerts = await knex("concerts")
           .where({ id: concertId })
           .del()
         response.json(`concert with id: ${concertId} was successfully DELETED.`)
      }else{
        response.status(404).send(`No concert matches the id:${concertId}`);
      }
   
    } else{
      response.status(400).send(`Bad Request`);
    }
    
  }catch(error){
    throw error;
  }
});



module.exports = router;
