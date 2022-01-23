//making a gif search engin using GIPHY API

const apiKey='1GnflBcS5GtXEQWimLiAfFXZ5O3Y0rHV'
const gifSearch= document.querySelector(".gif-search")
const limit= document.querySelector(".limit")
const btn= document.querySelector("button")
const img= document.querySelector(".img")

btn.addEventListener('click',(e)=>{
  e.preventDefault();
  const rqsGif=gifSearch.value;
  const gifNumbers=limit.value;
  const toNumber = parseInt(gifNumbers)
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=1GnflBcS5GtXEQWimLiAfFXZ5O3Y0rHV&q=${rqsGif}&limit=${toNumber}`)
  .then(response=> response.json())
  .then((content)=>{  
    console.log(content);
    for (let i = 0; i < content.data.length; i++) {
    const gifImage=document.createElement("img")
    gifImage.src=content.data[i].images.downsized.url;
    img.appendChild(gifImage);
    
}}
  )})
