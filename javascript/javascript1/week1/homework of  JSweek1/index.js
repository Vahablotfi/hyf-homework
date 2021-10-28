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


