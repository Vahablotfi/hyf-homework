//Age-ify ( A future age calculator)
const yearOfBirth = 1991;
const yearFuture = 2063;
const age = yearFuture - yearOfBirth ;
console.log("You will be " + age + " years old in " + yearFuture)

//Goodboy-Oldboy(a DOG AGE CALCULATOR)
const dogYearOfBirth = 2017;
const  dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = dogYearFuture - dogYearOfBirth;
if(shouldShowResultInDogYears != 70){
    console.log("Your dog will be ",dogYear," human years old in",dogYearFuture,".")
} else {
    console.log("Your dog will be",dogYear,"dog years old in",dogYearFuture )
}
//Housey pricey (A house price estimator)
//Peter's house
const width = 8;
const depth = 10;
const height =10;
const  garden = 100;
const peterHousePrice = width * depth *  height * 2.5 * 1000 + garden *300; 
const pricePeterPaid = "2.5 million";
console.log(peterHousePrice)
console.log("peter have paid ",pricePeterPaid," for a house which costs",peterHousePrice, ".")
//Julia's House
const juliawidth = 5;
const juliadepth = 11;
const juliaheight =8;
const  juliagarden = 70;
const juliaHousePrice = juliawidth * juliadepth *  juliaheight * 2.5 * 1000 + juliagarden *300; 
const sellsPrice = 1000000;
console.log(juliaHousePrice)
console.log("Julia wants to pay ",sellsPrice," for a house which costs",juliaHousePrice,"." )

//Ez Namey 
const firstWords=["cute","simple","complicated","sustainable","freaky","dodgy","green","worthy","unique","shiny"]
const secondWords=["helpers","solution","creators","methods","offers","way","makers","colleague","builders","holders"]
const randomNumber = Math.floor(Math.random() * 10);
const firstRandomName= firstWords[Math.floor(Math.random() * 10)]
const secondRandomName=secondWords[Math.floor(Math.random() * 10)]
const  startupName = firstRandomName +" "+ secondRandomName;
// THIS IS THE START UP NAME
console.log(startupName )
const nameLength = startupName.length;
console.log(nameLength)
console.log("The start up ",'"',startupName,'"'," contains ",nameLength, " characters.")

