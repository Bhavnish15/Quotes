const url = "https://api.kanye.rest/";
const message = document.querySelector("h2")
const btn = document.querySelector("button")

console.log(message)


const data = (response) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => (message.innerText = data.quote)) 
    .catch((e)=>e.message)
    .finally(("All Done"))
};


btn.addEventListener("click", ()=>{
    data();
})