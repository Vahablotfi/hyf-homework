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



