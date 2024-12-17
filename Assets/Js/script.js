document.addEventListener('DOMContentLoaded', async () =>{

  let container = document.querySelector(".container")
  let next = document.querySelector(".switchRight")
  let prev = document.querySelector(".switchLeft")
  const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc0M2Y4NGRhYzAwNDBlZjEyNjgwMjMzZWU5NmEwZiIsIm5iZiI6MTczNDM0NDk4NC44MTUsInN1YiI6IjY3NjAwMTE4NWJkM2M3MmE4MmMxYzNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._wZmMme3uyW9tlwonW8YiyvgMC7zZTBAn4VG7ESRAWo'
    }
  };
  let i = 0
  let data;
  let index = 0;
  let firstClick = false
  
  const getData=async() =>{
    let response = await fetch(url, options) ;
    let data = await response.json();
    return data
  }
  data = await getData()
  nextimg()
  function nextimg () {
    
    console.log(data);
    container.innerHTML = ""
    for (i=index; i< index+5; i++) {
      container.innerHTML+= 
      `<div class="card">
      <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
      <div class="intro">
      <h2>${data.results[i].original_title}</h2>
      <p class="white">${data.results[i].overview}</p>
      <i class="rate" class="fa-solid fa-star"></i>
      </div>
      </div>`
    }
    index+=5
    if (index > data.results.length-1 ){
      index = 0
    } 
  } 
  next.addEventListener("click", nextimg);
  
  function previmg () {
console.log(index);
index -= 5
    if ( index < 0  || firstClick == false){
      index = data.results.length-5
      firstClick = true
    }
    console.log(index);
    container.innerHTML = ""
    for (i=index; i< index+5; i++) {
      container.innerHTML+= 
      `<div class="card">
      <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
      <div class="intro">
      <h2>${data.results[i].original_title}</h2>
      <p class="white">${data.results[i].overview}</p>
      <i class="rate" class="fa-solid fa-star"></i>
      </div>
      </div>`
    }
} 
prev.addEventListener("click", previmg); 
})


let container2 = document.querySelector(".container2")
  let next2 = document.querySelector(".switchRight2")
  let prev2 = document.querySelector(".switchLeft2")
const url2 = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
const options2 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc0M2Y4NGRhYzAwNDBlZjEyNjgwMjMzZWU5NmEwZiIsIm5iZiI6MTczNDM0NDk4NC44MTUsInN1YiI6IjY3NjAwMTE4NWJkM2M3MmE4MmMxYzNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._wZmMme3uyW9tlwonW8YiyvgMC7zZTBAn4VG7ESRAWo'
  }
};

fetch(url2, options2)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
const getData2=async() =>{
  let response2 = await fetch(url2, options2) ;
  let data2 = await response2.json();
  return data2
}
data2 = await getData2()
nextimg2()
function nextimg2 () {
  
  console.log(data2);
  container2.innerHTML = ""
  for (i2=index2; i2< index2+5; i2++) {
    container2.innerHTML+= 
    `<div class="card">
    <img src="https://image.tmdb.org/t/p/w500${data2.results[i].poster_path}" alt="">
    <div class="intro">
    <h2>${data2.results[i].original_title}</h2>
    <p class="white">${data2.results[i].overview}</p>
    <i class="rate" class="fa-solid fa-star"></i>
    </div>
    </div>`
  }
  index2+=5
  if (index2 > data2.results.length-1 ){
    index2 = 0
  } 
} 
next2.addEventListener("click", nextimg2);

function previmg2 () {
index2 -= 5
  if ( index2 < 0  || firstClick2 == false){
    index2 = data2.results.length-5
    firstClick2 = true
  }
  container2.innerHTML = ""
  for (i2=index2; i2< index2+5; i2++) {
    container2.innerHTML+= 
    `<div class="card">
    <img src="https://image.tmdb.org/t/p/w500${data2.results[i].poster_path}" alt="">
    <div class="intro">
    <h2>${data2.results[i].original_title}</h2>
    <p class="white">${data2.results[i].overview}</p>
    <i class="rate" class="fa-solid fa-star"></i>
    </div>
    </div>`
  }
} 
prev2.addEventListener("click", previmg2); 
