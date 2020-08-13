const professionStr = document.querySelector("#profession");
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-link');

let professions = ["Student", "Web developer", "UI/UX Designer", "Programmer"];

let pChanger = function(arr){
    let current = 0
    let fn = function(){
        if(current == professions.length) {
        setTimeout(mainLoop, 1000);
        professionStr.classList.add('pre-animation');
        return;
    }
    arr[current++]
    professionStr.innerHTML = professions[current-1];
    
    setTimeout(fn, 1000);
    }
setTimeout(fn, 1000);
}

let i = 0;
let mainLoop = function(){
    pChanger(professions[i])
    professionStr.classList.remove('pre-animation');
}
mainLoop()

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
})


