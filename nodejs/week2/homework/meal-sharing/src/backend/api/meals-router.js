const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (req, res) => {
  if(Object.keys(req.query).length === 0 ){
  res.send(meals);
} 
else if
(req.query.hasOwnProperty("id")){

      const requestId =Number(req.query.id);
       const idFinder=meals.some(meal=>meal.id==requestId)
       const result=meals.filter(meal=>meal.id===requestId);
    
      if(idFinder){
        res.send(result);
      }else{
        res.send(`There is no meal with id ${requestId}`);
      }
}
else if
(req.query.hasOwnProperty("maxPrice")){
 
  const maxPrice =Number(req.query.maxPrice);
  const maxPriceFinder=meals.some(meal=>meal.price <= maxPrice);
  
  if(maxPriceFinder){
    res.send(meals.filter(meal=>meal.price <= maxPrice));
  }else{
    res.status(400).send(`No food with price: ${maxPrice} or cheaper`);
  }
   
}
else if
(req.query.hasOwnProperty("title")){

  const requestedTitle = (req.query.title).toLowerCase();
  const mealFinder=meals.some(meal=>meal.title.toLowerCase().includes(requestedTitle));
  
  if(mealFinder){
    res.send(meals.filter(meal=>(meal.title.toLowerCase()).includes(requestedTitle)));
  }else{
    res.status(404).send(`There is no meal with the title ${requestedTitle}`)
  }
}
else if
(req.query.hasOwnProperty("createdAfter")){

  const requestedDate =new Date(req.query.createdAfter);
  const requestedDateFinder=meals.some(meal=>new Date(meal.createdAt) > requestedDate);
  if(requestedDateFinder){
    res.send(meals.filter(meal=>new Date(meal.createdAt) > requestedDate));
  }else{
    res.status(400).send(`No food have been planned after ${requestedDate}`)
  }
  
}
else if
(req.query.hasOwnProperty("limit")){

  const limitRequest =Number(req.query.limit);
  if(limitRequest!==0){ 
    res.send(meals.slice(0,limitRequest));
  }else{
    res.status(400).send(`Limit request is not valid`)
  }
 
}
else
{
  res.status(404).send('invalid request: no match exist with your request');
}
  try {
    console.log(meals);
    console.log("in /api/meals");
  } catch (error) {
    throw error;
  }
});

module.exports = router;
