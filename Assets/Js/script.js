let sidenav = document.querySelector('#mySidenav');
let openBtn = document.querySelector('#openBtn');
let closeBtn = document.querySelector('#closeBtn');


openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
    sidenav.classList.add('active');
}

function closeNav() {
    sidenav.classList.remove('active');
}



const url = 'https://api.themoviedb.org/3/certification/movie/list';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc0M2Y4NGRhYzAwNDBlZjEyNjgwMjMzZWU5NmEwZiIsIm5iZiI6MTczNDM0NDk4NC44MTUsInN1YiI6IjY3NjAwMTE4NWJkM2M3MmE4MmMxYzNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._wZmMme3uyW9tlwonW8YiyvgMC7zZTBAn4VG7ESRAWo'
    }
};

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));

// BAR DE RECHERCHE
let search = document.querySelector('.inputsearch');
let clear = document.querySelector('.clear');
let textInput = document.querySelector('#text');
let iconsearch = document.querySelector('.iconsearch')
let iconActive = false
let searchInput = document.querySelector('#text')


iconsearch.addEventListener('click', event => {
    if (iconActive) {
        search.style.display = 'none'
        iconActive = false;
    }

    else {
        document.querySelector('.containersearch').classList.toggle('active');
        search.style.display = 'flex'
        iconActive = true;
    }
});

clear.addEventListener('click', event => {
    if (textInput) {
        textInput.value = "";
    }
});

textInput.addEventListener('input', e => {

        let query = e.target.value
        const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`;

        fetch(searchUrl, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc0M2Y4NGRhYzAwNDBlZjEyNjgwMjMzZWU5NmEwZiIsIm5iZiI6MTczNDM0NDk4NC44MTUsInN1YiI6IjY3NjAwMTE4NWJkM2M3MmE4MmMxYzNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._wZmMme3uyW9tlwonW8YiyvgMC7zZTBAn4VG7ESRAWo'
            }
        }).then((res) => res.json())
        

.then((data) => {
                data.results.forEach(element => {
                console.log(data);

                let containerDiv = document.createElement('div')
                let imgDiv = document.createElement('img')
                let titleDiv = document.createElement('div')

                imgDiv.src = element.poster_path
                containerDiv.classList = "movie-container-search"
                containerDiv.appendChild(imgDiv)
            }
            )
})
})




// selection des films d'action
document.addEventListener('DOMContentLoaded', async () =>{
  let options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc0M2Y4NGRhYzAwNDBlZjEyNjgwMjMzZWU5NmEwZiIsIm5iZiI6MTczNDM0NDk4NC44MTUsInN1YiI6IjY3NjAwMTE4NWJkM2M3MmE4MmMxYzNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._wZmMme3uyW9tlwonW8YiyvgMC7zZTBAn4VG7ESRAWo'
    }
  };
  let containerPopular = document.querySelector(".containerPopular")
  let nextPopular = document.querySelector(".switchRightPopular")
  let prevPopular = document.querySelector(".switchLeftPopular")
  let popuPopular = document.getElementById("popuPopular")
  console.log(popuPopular);
  
  let releasePopular = document.getElementById("releasePopular")
  let timePopular = document.getElementById("timePopular")
  let urlPopular = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28';
  let containerAnimation = document.querySelector(".containerAnimation")
  let nextAnimation = document.querySelector(".switchRightAnimation")
  let prevAnimation = document.querySelector(".switchLeftAnimation")
  let popuAnimation = document.getElementById("popuAnimation")
  let releaseAnimation = document.getElementById("releaseAnimation")
  let timeAnimation = document.getElementById("timeAnimation")
  let urlAnimation = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16';
  let containerComedy = document.querySelector(".containerComedy")
  let nextComedy = document.querySelector(".switchRightComedy")
  let prevComedy = document.querySelector(".switchLeftComedy")
  let popuComedy = document.getElementById("popuComedy")
  let releaseComedy = document.getElementById("releaseComedy")
  let timeComedy = document.getElementById("timeComedy")
  let urlComedy = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35';
  let containerHorror = document.querySelector(".containerHorror")
  let nextHorror = document.querySelector(".switchRightHorror")
  let prevHorror = document.querySelector(".switchLeftHorror")
  let popuHorror = document.getElementById("popuHorror")
  let releaseHorror = document.getElementById("releaseHorror")
  let timeHorror = document.getElementById("timeHorror")
  let urlHorror = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27';
  let containerWestern = document.querySelector(".containerWestern")
  let nextWestern = document.querySelector(".switchRightWestern")
  let prevWestern = document.querySelector(".switchLeftWestern")
  let popuWestern = document.getElementById("popuWestern")
  let releaseWestern = document.getElementById("releaseWestern")
  let timeWestern = document.getElementById("timeWestern")
  let urlWestern = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=37';
  let i = 0
  let indexPopular = 0;
  let indexAnimation = 0;
  let indexComedy = 0;
  let indexHorror = 0;
  let indexWestern = 0;
  
  let getData=async(url) =>{
    let response = await fetch(url, options) ;
    let data = await response.json();
    return data
  }


  const displayData = (data, type)=>{
    
    let container;
    if(type === "populaire"){
      container = containerPopular
    }else if(type === "animation"){
      container = containerAnimation
    }else if(type === "comedy"){
      container = containerComedy
    }else if(type === "horror"){
      container = containerHorror
    }else if(type === "western"){
      container = containerWestern
    }
    container.innerHTML = ""
    for (i=0; i< 5; i++) {
      
      container.innerHTML+= 
      `<div class="card">
      <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
      <div class="intro">
      <h2>${data.results[i].original_title}</h2>
      <h2>${data.results[i].vote_average}/10</h2>
      <p class="white">${data.results[i].overview}</p>
      <i class="rate" class="fa-solid fa-star"></i>
      </div>
      </div>`
    }
  }
  
  function nextimg (data, index, type) {
    index+=5
    if (index > data.results.length-1 ){
      index = 0
    } 
    let container;
    if(type === "populaire"){
      container = containerPopular
      indexPopular = index
    }else if(type === "animation"){
      container = containerAnimation
      indexAnimation = index
    }else if(type === "comedy"){
      container = containerComedy
    }else if(type === "horror"){
      container = containerHorror
    }else if(type === "western"){
      container = containerWestern
    }
    container.innerHTML = ""
    for (i=index; i< index+5; i++) {
      container.innerHTML+= 
      `<div class="card">
      <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
      <div class="intro">
      <h2>${data.results[i].original_title}</h2>
      <h2>${data.results[i].vote_average}/10</h2>
      <p class="white">${data.results[i].overview}</p>
      <i class="rate" class="fa-solid fa-star"></i>
      </div>
      </div>`
    }
  } 
  
  function previmg (data, index, type) {
    index -= 5
    if ( index < 0){
      index = data.results.length-5
    }
    let container;
    if(type === "populaire"){
      container = containerPopular
      indexPopular = index
    }else if(type === "animation"){
      container = containerAnimation
      indexAnimation = index
    }else if(type === "comedy"){
      container = containerComedy
      indexComedy = index
    }else if(type === "comedy"){
      container = containerHorror
      indexHorror = index
    }else if(type === "western"){
      container = containerWestern
    }
    indexWestern = index
    container.innerHTML = ""
    for (i=index; i< index+5; i++) {
      container.innerHTML+= 
      `<div class="card">
      <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="">
      <div class="intro">
      <h2>${data.results[i].original_title}</h2>
      <h2>${data.results[i].vote_average}/10</h2>
      <p class="white">${data.results[i].overview}</p>
      <i class="rate" class="fa-solid fa-star"></i>
      </div>
      </div>`
    }
}    

async function ChangeUrlPopularPopu() {
    console.log("oui");
    
urlPopular = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28"
indexPopular = 0  
data = await getData(urlPopular);
  displayData(data, "populaire")
} 
popuPopular.addEventListener("click", ChangeUrlPopularPopu); 
async function ChangeUrlPopularRelease() {
urlPopular = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=primary_release_date.desc&with_genres=28"
indexPopular = 0  
data = await getData(urlPopular);
displayData(data, "populaire")
} 
releasePopular.addEventListener("click", ChangeUrlPopularRelease); 
async function ChangeUrlVotePopular() {
urlPopular = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.asc&with_genres=28"
indexPopular = 0  
data = await getData(urlPopular);
displayData(data, "populaire")
} 
timePopular.addEventListener("click", ChangeUrlVotePopular); 


async function ChangeUrlPopuAnimation() {
  urlAnimation = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16"
  indexAnimation = 0  
  dataAnimation = await getData(urlAnimation);
    displayData(dataAnimation, "animation")
  } 
  popuAnimation.addEventListener("click", ChangeUrlPopuAnimation); 
  async function ChangeUrlAnimationRelease() {
  urlAnimation = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=primary_release_date.desc&with_genres=16"
  indexAnimation = 0  
  dataAnimation = await getData(urlAnimation);
  displayData(dataAnimation, "animation")
  } 
  releaseAnimation.addEventListener("click", ChangeUrlAnimationRelease); 
  async function ChangeUrlAnimationTime() {
  urlAnimation = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.asc&with_genres=16"
  indexAnimation = 0  
  dataAnimation = await getData(urlAnimation);
  displayData(dataAnimation, "animation")
  } 
timeAnimation.addEventListener("click", ChangeUrlAnimationTime); 

async function ChangeUrlPopuComedy() {
  urlComedy = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35"
  indexComedy = 0  
  dataComedy = await getData(urlComedy);
    displayData(dataComedy, "comedy")
  } 
  popuComedy.addEventListener("click", ChangeUrlPopuComedy); 
  async function ChangeUrlComedyRelease() {
  urlComedy = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=primary_release_date.desc&with_genres=35"
  indexComedy = 0  
  dataComedy = await getData(urlComedy);
  displayData(dataComedy, "comedy")
  } 
  releaseComedy.addEventListener("click", ChangeUrlComedyRelease); 
  async function ChangeUrlComedyTime() {
  urlComedy = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.asc&with_genres=35"
  indexComedy = 0  
  dataComedy = await getData(urlComedy);
  displayData(dataComedy, "comedy")
  } 
timeComedy.addEventListener("click", ChangeUrlComedyTime); 

async function ChangeUrlPopuHorror() {
  urlHorror = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27"
  indexHorror = 0  
  dataHorror = await getData(urlHorror);
    displayData(dataHorror, "horror")
  } 
  popuHorror.addEventListener("click", ChangeUrlPopuHorror); 
  async function ChangeUrlHorrorRelease() {
  urlHorror = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=primary_release_date.desc&with_genres=27"
  indexHorror = 0  
  dataHorror = await getData(urlHorror);
  displayData(dataHorror, "horror")
  } 
  releaseHorror.addEventListener("click", ChangeUrlHorrorRelease); 
  async function ChangeUrlHorrorTime() {
  urlHorror = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.asc&with_genres=27"
  indexHorror = 0  
  dataHorror = await getData(urlHorror);
  displayData(dataHorror, "horror")
  } 
timeHorror.addEventListener("click", ChangeUrlHorrorTime); 

async function ChangeUrlPopuWestern() {
  urlWestern = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=37"
  indexWestern = 0  
  dataWestern = await getData(urlWestern);
    displayData(dataWestern, "western")
  } 
  popuWestern.addEventListener("click", ChangeUrlPopuWestern); 
  async function ChangeUrlWesternRelease() {
  urlWestern = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=primary_release_date.desc&with_genres=37"
  indexWestern = 0  
  dataWestern = await getData(urlWestern);
  displayData(dataWestern, "western")
  } 
  releaseWestern.addEventListener("click", ChangeUrlWesternRelease); 
  async function ChangeUrlWesternTime() {
  urlWestern = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.asc&with_genres=37"
  indexWestern = 0  
  dataWestern = await getData(urlWestern);
  displayData(dataWestern, "western")
  } 
timeWestern.addEventListener("click", ChangeUrlWesternTime); 


let data = await getData(urlPopular)
displayData(data, "populaire")
nextPopular.addEventListener('click', () => nextimg(data, indexPopular, "populaire"))
prevPopular.addEventListener("click", () => previmg(data, indexPopular, "populaire")); 
let dataAnimation = await getData(urlAnimation)
displayData(dataAnimation, "animation")
nextAnimation.addEventListener('click', () => nextimg(dataAnimation, indexAnimation, "animation"))
prevAnimation.addEventListener("click", () => previmg(dataAnimation, indexAnimation, "animation"));
let dataComedy = await getData(urlComedy)
displayData(dataComedy, "comedy")
nextComedy.addEventListener('click', () => nextimg(dataComedy, indexComedy, "comedy"))
prevComedy.addEventListener("click", () => previmg(dataComedy, indexComedy, "comedy"));
let dataHorror = await getData(urlHorror)
displayData(dataHorror, "horror")
nextHorror.addEventListener('click', () => nextimg(dataHorror, indexHorror, "horror"))
prevHorror.addEventListener("click", () => previmg(dataHorror, indexHorror, "horror"));
let dataWestern = await getData(urlWestern)
displayData(dataWestern, "western")
nextWestern.addEventListener('click', () => nextimg(dataWestern, indexWestern, "western"))
prevWestern.addEventListener("click", () => previmg(dataWestern, indexWestern, "western"));

  })
