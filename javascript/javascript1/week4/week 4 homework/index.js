const name = [];
const toDo = [];
function getReply(command){
    const lowerCase = command.toLowerCase();
    //console.log(lowerCase)
    
    let words = lowerCase.split(" ");
     let myName = words[words.length-1]
    name.push(myName);
     //console.log(name)
    if(lowerCase.includes('hello my name is')){
       console.log( "Nice to meet you "+ name[0])
    }
    if(lowerCase.includes("what is my name")){
        console.log("Your name is "+name[0])
      /* function whatIsYourName(){
        console.log("Your name is "+name)
       }
         whatIsYourName(); */
    }
    if(lowerCase.includes("add fishing to my todo")){
        toDo.push('fishing');
        console.log("fishing added to your todo")
    }
    if(lowerCase.includes("add singing in the shower to my todo")){
        toDo.push('singing in the shower');
        console.log("singing in the shower added to your todo")
    }
    if(lowerCase.includes('remove fishing from my todo')){
        toDo.shift('fishing')
        console.log( "Removed fishing from your todo")
    }
    if(lowerCase.includes('what is on my todo?')){
        
        console.log(`You have ${toDo.length} todo ${toDo}`)
    }
    if(lowerCase.includes('what day is it today?')){
        const monthsOfYear=["January","February","March","April","May","June","July","August","September","November","December"]
        let date = new Date();
        console.log(date)
        let day= date.getDate();
        let month=(date.getMonth());
        let year=date.getFullYear();
        console.log(`${day}. of ${monthsOfYear[month]} ${year}`);
        
    }
    if(lowerCase.includes("+")){
        const x = lowerCase.split(' ');
        console.log(x);
        const numbers=x.filter( n => Number(n) );
        const answer =numbers.reduce((a,b)=>Number(a)+Number(b),0) 
        console.log(answer);
        console.log(numbers);
    }
    if(lowerCase.includes("*")){
        const x = lowerCase.split(' ');
        console.log(x);
        const numbers=x.filter( n => Number(n) );
        const answer =numbers.reduce((a,b)=>Number(a)*Number(b),) 
        console.log(answer);
        console.log(numbers);
    }
    if(lowerCase.includes('set a timer for 4 minutes')){
        const x = lowerCase.split(' ');
        console.log(x);
        const numbers=x.filter( n => Number(n) );
        console.log(+numbers)
        setTimeout(function(){
            console.log("Timer done")
        },+numbers*60000)
    }
}
getReply("Hello my name is vahab");
getReply("What is my name");
getReply('"Add fishing to my todo"')
getReply('"Add singing in the shower to my todo"')
getReply( "remove fishing from my todo")
getReply('what is on my todo?')
getReply("what day is it today?")
getReply("what is 3 + 3");
getReply("what is 4 * 12");
getReply("Set a timer for 1 minutes");

