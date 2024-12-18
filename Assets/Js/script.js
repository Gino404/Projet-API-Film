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
