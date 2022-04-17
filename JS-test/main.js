//Write a function that logs to the console numbers 1 to 100.
function counting() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("Jackpot!");
    } else if (i % 3 == 0) {
      console.log(" This is divisible by 3");
    } else if (i % 5 == 0) {
      console.log("This is divisible by 5");
    } else console.log(i);
  }
}

counting();

//2. (Main theme: DOM manipulation)
const body = document.querySelector("body");
const btn = document.createElement("button");
btn.appendChild(body);
btn.addEventListener("click", (e) => {
  document.createElement("img");
  const img = document.querySelector("img");
  img.src = "https://picsum.photos/seed/picsum/200/300";
  img.appendChild(img);
});

//3. (Main theme: Async API calls)
// fetch('https://reqres.in/api/users')
// .then(response => response.json())
// .then( for (let i=0;i<4;i++){
//     // const userName=i.first_name;
//     //const showCase=document.querySelector('api')
//     // showCase.innerHTML('userName')
// });
