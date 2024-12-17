// selection des films d'action
document.addEventListener('DOMContentLoaded', async () =>{

  let container = document.querySelector(".container")
  let next = document.querySelector(".switchRight")
  let prev = document.querySelector(".switchLeft")
  const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28';
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
index -= 5
    if ( index < 0  || firstClick == false){
      index = data.results.length-5
      firstClick = true
    }
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

// Selection film animation

document.addEventListener('DOMContentLoaded', async () =>{

let container2 = document.querySelector(".container2")
  let next2 = document.querySelector(".switchRight2")
  let prev2 = document.querySelector(".switchLeft2")
const url2 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16';
const options2 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc0M2Y4NGRhYzAwNDBlZjEyNjgwMjMzZWU5NmEwZiIsIm5iZiI6MTczNDM0NDk4NC44MTUsInN1YiI6IjY3NjAwMTE4NWJkM2M3MmE4MmMxYzNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._wZmMme3uyW9tlwonW8YiyvgMC7zZTBAn4VG7ESRAWo'
  }
};

let index2 = 0
let i2 = 0
let firstClick2 = false
let data2
fetch(url2, options2)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
const getData2=async() =>{
  let response2 = await fetch(url2, options2) ;
  let data2 = await response2.json();
  console.log(response2);
  
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
    <img src="https://image.tmdb.org/t/p/w500${data2.results[i2].poster_path}" alt="">
    <div class="intro">
    <h2>${data2.results[i2].original_title}</h2>
    <p class="white">${data2.results[i2].overview}</p>
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
    <img src="https://image.tmdb.org/t/p/w500${data2.results[i2].poster_path}" alt="">
    <div class="intro">
    <h2>${data2.results[i2].original_title}</h2>
    <p class="white">${data2.results[i2].overview}</p>
    <i class="rate" class="fa-solid fa-star"></i>
    </div>
    </div>`
  }
} 
prev2.addEventListener("click", previmg2); 

})

// selection de film comedy

document.addEventListener('DOMContentLoaded', async () =>{

  let container3 = document.querySelector(".container3")
    let next3 = document.querySelector(".switchRight3")
    let prev3 = document.querySelector(".switchLeft3")
  const url3 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35';
  const options3 = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc0M2Y4NGRhYzAwNDBlZjEyNjgwMjMzZWU5NmEwZiIsIm5iZiI6MTczNDM0NDk4NC44MTUsInN1YiI6IjY3NjAwMTE4NWJkM2M3MmE4MmMxYzNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._wZmMme3uyW9tlwonW8YiyvgMC7zZTBAn4VG7ESRAWo'
    }
  };
  
  let index3 = 0
  let i3 = 0
  let firstClick3 = false
  let data3
  fetch(url3, options3)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
  const getData3=async() =>{
    let response3 = await fetch(url3, options3) ;
    let data3 = await response3.json();
    
    return data3
    
  }
  data3 = await getData3()
  nextimg3()
  function nextimg3 () {
    container3.innerHTML = ""
    for (i3=index3; i3< index3+5; i3++) {
      container3.innerHTML+= 
      `<div class="card">
      <img src="https://image.tmdb.org/t/p/w500${data3.results[i3].poster_path}" alt="">
      <div class="intro">
      <h2>${data3.results[i3].original_title}</h2>
      <p class="white">${data3.results[i3].overview}</p>
      <i class="rate" class="fa-solid fa-star"></i>
      </div>
      </div>`
    }
    index3+=5
    if (index3 > data3.results.length-1 ){
      index3 = 0
    } 
  } 
  next3.addEventListener("click", nextimg3);
  
  function previmg3 () {
  index3 -= 5
    if ( index3 < 0  || firstClick3 == false){
      index3 = data3.results.length-5
      firstClick3 = true
    }
    container3.innerHTML = ""
    for (i3=index3; i3< index3+5; i3++) {
      container3.innerHTML+= 
      `<div class="card">
      <img src="https://image.tmdb.org/t/p/w500${data3.results[i3].poster_path}" alt="">
      <div class="intro">
      <h2>${data3.results[i3].original_title}</h2>
      <p class="white">${data3.results[i3].overview}</p>
      <i class="rate" class="fa-solid fa-star"></i>
      </div>
      </div>`
    }
  } 
  prev3.addEventListener("click", previmg3); 
  
  })



  // selection de film horror

document.addEventListener('DOMContentLoaded', async () =>{

  let container4 = document.querySelector(".container4")
    let next4 = document.querySelector(".switchRight4")
    let prev4 = document.querySelector(".switchLeft4")
  const url4 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27';
  const options4 = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc0M2Y4NGRhYzAwNDBlZjEyNjgwMjMzZWU5NmEwZiIsIm5iZiI6MTczNDM0NDk4NC44MTUsInN1YiI6IjY3NjAwMTE4NWJkM2M3MmE4MmMxYzNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._wZmMme3uyW9tlwonW8YiyvgMC7zZTBAn4VG7ESRAWo'
    }
  };
  
  let index4 = 0
  let i4 = 0
  let firstClick4 = false
  let data4
  fetch(url4, options4)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
  const getData4=async() =>{
    let response4 = await fetch(url4, options4) ;
    let data4 = await response4.json();
    
    return data4
    
  }
  data4 = await getData4()
  nextimg4()
  function nextimg4 () {
    container4.innerHTML = ""
    for (i4=index4; i4< index4+5; i4++) {
      container4.innerHTML+= 
      `<div class="card">
      <img src="https://image.tmdb.org/t/p/w500${data4.results[i4].poster_path}" alt="">
      <div class="intro">
      <h2>${data4.results[i4].original_title}</h2>
      <p class="white">${data4.results[i4].overview}</p>
      <i class="rate" class="fa-solid fa-star"></i>
      </div>
      </div>`
    }
    index4+=5
    if (index4 > data4.results.length-1 ){
      index4 = 0
    } 
  } 
  next4.addEventListener("click", nextimg4);
  
  function previmg4 () {
  index4 -= 5
    if ( index4 < 0  || firstClick4 == false){
      index4 = data4.results.length-5
      firstClick4 = true
    }
    container4.innerHTML = ""
    for (i4=index4; i4< index4+5; i4++) {
      container4.innerHTML+= 
      `<div class="card">
      <img src="https://image.tmdb.org/t/p/w500${data4.results[i4].poster_path}" alt="">
      <div class="intro">
      <h2>${data4.results[i4].original_title}</h2>
      <p class="white">${data4.results[i4].overview}</p>
      <i class="rate" class="fa-solid fa-star"></i>
      </div>
      </div>`
    }
  } 
  prev4.addEventListener("click", previmg4); 
  
  })


  // selection de film wester

  document.addEventListener('DOMContentLoaded', async () =>{

    let container5 = document.querySelector(".container5")
      let next5 = document.querySelector(".switchRight5")
      let prev5 = document.querySelector(".switchLeft5")
    const url5 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=37';
    const options5 = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc0M2Y4NGRhYzAwNDBlZjEyNjgwMjMzZWU5NmEwZiIsIm5iZiI6MTczNDM0NDk4NC44MTUsInN1YiI6IjY3NjAwMTE4NWJkM2M3MmE4MmMxYzNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._wZmMme3uyW9tlwonW8YiyvgMC7zZTBAn4VG7ESRAWo'
      }
    };
    
    let index5 = 0
    let i5 = 0
    let firstClick5 = false
    let data5
    fetch(url5, options5)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error(err));
    const getData5=async() =>{
      let response5 = await fetch(url5, options5) ;
      let data5 = await response5.json();
      
      return data5
      
    }
    data5 = await getData5()
    nextimg5()
    function nextimg5 () {
      container5.innerHTML = ""
      for (i5=index5; i5< index5+5; i5++) {
        container5.innerHTML+= 
        `<div class="card">
        <img src="https://image.tmdb.org/t/p/w500${data5.results[i5].poster_path}" alt="">
        <div class="intro">
        <h2>${data5.results[i5].original_title}</h2>
        <p class="white">${data5.results[i5].overview}</p>
        <i class="rate" class="fa-solid fa-star"></i>
        </div>
        </div>`
      }
      index5+=5
      if (index5 > data5.results.length-1 ){
        index5 = 0
      } 
    } 
    next5.addEventListener("click", nextimg5);
    
    function previmg5 () {
    index5 -= 5
      if ( index5 < 0  || firstClick5 == false){
        index5 = data5.results.length-5
        firstClick5 = true
      }
      container5.innerHTML = ""
      for (i5=index5; i5< index5+5; i5++) {
        container5.innerHTML+= 
        `<div class="card">
        <img src="https://image.tmdb.org/t/p/w500${data5.results[i5].poster_path}" alt="">
        <div class="intro">
        <h2>${data5.results[i5].original_title}</h2>
        <p class="white">${data5.results[i5].overview}</p>
        <i class="rate" class="fa-solid fa-star"></i>
        </div>
        </div>`
      }
    } 
    prev5.addEventListener("click", previmg5); 
    
    })