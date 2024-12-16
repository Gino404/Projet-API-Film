let images = document.querySelectorAll ("img")
let next = document.querySelector ("#next")
let previous = document.querySelector ("#prev")


n=0
images.forEach((image,index) => {
    if (index == 0) { 
        image.classList.add("show")
    }
    else { image.classList.add("hidden") } })


next.addEventListener("click", nextimg );
function nextimg(){
    n++
    if (n === images.length){
        n = 0 
    }
    images[n].classList.add("show")
    images[n].classList.remove("hidden")
    if (n == 0 ){
        images[images.length-1].classList.remove("show")
        images[images.length-1].classList.add("hidden")
    }
    else {
        images[n-1].classList.remove("show")
        images[n-1].classList.add("hidden")
    }
    }

previous.addEventListener("click", previmg );
function previmg(){
    images[n].classList.remove('show');
    images[n].classList.add('hidden');
    n = (n -1) ;
    if (n == -1){
        images[images.length -1].classList.remove('hidden');
        images[images.length -1].classList.add('show');
        n = images.length -1
    }else{
        images[n].classList.remove('hidden');
        images[n].classList.add('show');
    }
    }
