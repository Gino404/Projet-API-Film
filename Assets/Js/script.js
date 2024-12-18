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




