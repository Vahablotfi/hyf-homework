const express = require("express");
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/", (req, res) => res.send("nodejs week3 homework"));


app.get("/calculator/multiply", (req, res) => {
   
    const firstNumber= Number(req.query.firstParam);
    const secondNumber=Number(req.query.secondParam);
    const thirdNumber =Number(req.query.thirdParam);
    if(thirdNumber){
        const result1=firstNumber * secondNumber * thirdNumber;
        res.json(`The answer for your request is ${result1}`);
    }else{
        const result =firstNumber * secondNumber;
    res.json(`The answer for your request is ${result}`);
    }
    
});

app.get("/calculator/add", (req, res) => {
   
    const firstNumber= Number(req.query.firstParam);
    const secondNumber=Number(req.query.secondParam);
    const thirdNumber =Number(req.query.thirdParam);
    if(thirdNumber){
        const result1=firstNumber + secondNumber + thirdNumber;
        res.json(`The answer for your request is ${result1}`);
    }else{
        const result =firstNumber + secondNumber;
    res.json(`The answer for your request is ${result}`);
    }

});

app.get("/calculator/division", (req, res) => {
    
    const firstNumber= Number(req.query.firstParam);
    const secondNumber=Number(req.query.secondParam);
    const result =firstNumber / secondNumber;
    res.json(`The answer for your request is ${result}`);
    
});

app.get("/calculator/Subtraction", (req, res) => {
    
    const firstNumber= Number(req.query.firstParam);
    const secondNumber=Number(req.query.secondParam);
    const result =firstNumber - secondNumber;
    res.json(`The answer for your request is ${result}`);
    
});

app.post("/calculator/multiply", (req, res) => {
      
    const firstNumber= Number(req.body.firstParam);
    const secondNumber=Number(req.body.secondParam);
    const result = firstNumber * secondNumber;
    res.json(`The answer for your request is ${result}`);
   
});

app.post("/calculator/add", (req, res) => {
    
    const firstNumber= Number(req.body.firstParam);
    const secondNumber=Number(req.body.secondParam);
    const result =firstNumber + secondNumber;
    res.json(`The answer for your request is ${result}`);
   
});

app.post("/calculator/division", (req, res) => {
    
    const firstNumber= Number(req.body.firstParam);
    const secondNumber=Number(req.body.secondParam);
    const result =firstNumber / secondNumber;
    res.json(`The answer for your request is ${result}`);
  
});

app.post("/calculator/Subtraction", (req, res) => {
    
    const firstNumber= Number(req.body.firstParam);
    const secondNumber=Number(req.body.secondParam);
    const result =firstNumber - secondNumber;
    res.json(`The answer for your request is ${result}`);
   
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
