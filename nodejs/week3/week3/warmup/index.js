const { query } = require( "express" );
const express = require("express");
const app = express();
const typeValidation=require("./validator")
app.use(express.urlencoded({extended:false}));
app.use( express.json() );



app.get( "/", ( req, res ) => {
    res.send( "nodejs week3 homework" )
} );


app.get("/calculator/multiply", typeValidation, async (req, res) => {


  if (Object.keys(req.query).length !== 0) {
    const values = Object.values(req.query);
    const result = values.reduce(
      (previous, current) => Number(previous) * Number(current)
    );

    res.send(`The answer for your request is ${result}`);
  }
 
});

app.get("/calculator/add", typeValidation,async (req, res) => {
 
  if (Object.keys(req.query).length !== 0) {
    const values = Object.values(req.query);
    const result = values.reduce(
      (previous, current) => Number(previous) + Number(current)
    );

    res.send(`The answer for your request is ${result}`);
  }
});

app.get("/calculator/division", typeValidation, (req, res) => {

  if (Object.keys(req.query).length !== 0) {
    const values = Object.values(req.query);
    const result = values.reduce(
      (previous, current) => Number(previous) / Number(current)
    );

    res.send(`The answer for your request is ${result}`);
  }
});

app.get("/calculator/Subtraction", typeValidation, (req, res) => {
  if (Object.keys(req.query).length !== 0) {
    const values = Object.values(req.query);
    const result = values.reduce(
      (previous, current) => Number(previous) - Number(current)
    );

    res.send(`The answer for your request is ${result}`);
  }
});



app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
