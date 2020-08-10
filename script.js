const professionText = document.querySelector("#profession");
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-link');

let professions = ["Developer", "Student", "UI/UX Designer", "Programmer"];

function professionChanger(){
    for (profession of professions){
        professionText.innerHTML = profession;
    }
}

setInterval(professionChanger, 1000)

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
})