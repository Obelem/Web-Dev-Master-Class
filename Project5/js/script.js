let navCard = document.querySelector(".nav-card");
let menu = document.querySelector(".menu");
let close = document.querySelector(".close");



function displayNavCard() {
    navCard.classList.add("display");
}

menu.addEventListener("click", displayNavCard);


function removeNavCard() {
    navCard.classList.remove("display");
}

close.addEventListener("click", removeNavCard);