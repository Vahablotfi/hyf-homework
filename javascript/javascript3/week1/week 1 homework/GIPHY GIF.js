//making a gif search engin using GIPHY API
const apiKey='1GnflBcS5GtXEQWimLiAfFXZ5O3Y0rHV'
const gifSearch= document.querySelector(".gif-search")
const limit= document.querySelector(".limit")
const btn= document.querySelector("button")
const img= document.querySelector(".img")

btn.addEventListener('click',(e)=>{
  const rqsGif=gifSearch.value;
  const gifNumbers=limit.value;
  fetch('https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${gifSearch}&limit=${toNum}')
  .then(response=> response.json())
  .then(for (let i = 0; i < content.data.length; i++) {
      const gifImage=document.createElement("img")
      gifImage.src=content.data[i].images.downsized.url
      img.appendChild(gifImage)
      
  }
  )
})
