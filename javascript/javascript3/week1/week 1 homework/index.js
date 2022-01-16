const apiKey="2848bb8f26a968a447c566c29db5060c";


//use the button to add event 
//create input and button
const input=document.querySelector("#input-name")
const btn=document.querySelector("#submit")
const display= document.querySelector('.display-data')
//create a div to get the info
btn.addEventListener('click',function(event){
    event.preventDefault()
    const inputValue= input.value
    console.log(inputValue);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=2848bb8f26a968a447c566c29db5060c&units=metric`)
    .then(response=> response.json())
    .then(data=>{
        let sunRise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
      let sunSet = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        console.log(data);
        display.innerHTML=`<h1 class="city">${data.name}</h1><h2 class="temp" >Temperature:${data.main.temp}°C</h2>
        <img class="icon"  src= "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
        alt="${data.weather[0].description}"/>
        <h2 class="wind">Wind speed : ${data.wind.speed}</h2>
        <h2 class="description">Description : ${data.weather[0].main}</h2>
        <h2 class="sunrise">Sunrise :${sunRise}</h2>
        <h2 class="sunset">Sunset :${sunSet}</h2>`
        
    })
})


 
    


