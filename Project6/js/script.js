/*  === Project 6: Basic DOM Manipulation
"This project would help you see the 
need for loops in javascript"
 */



dropdown = document.querySelectorAll(".dropdown");
dropdownButton = document.querySelectorAll(".dropdown-button");
dropdownCard = document.querySelectorAll(".dropdown-card");


function dropdownNill() {
    dropdownCard[0].classList.toggle("display");

    for (i = 0; i < dropdownCard.length; i++) {
        if (i == 0) continue;
        dropdownCard[i].classList.remove("display");
    }
    
}

dropdownButton[0].addEventListener("click", dropdownNill);



function dropdownOne() {
    dropdownCard[1].classList.toggle("display");

    for (i = 0; i < dropdownCard.length; i++) {
        if (i == 1) continue;
        dropdownCard[i].classList.remove("display");
    }
}

dropdownButton[1].addEventListener("click", dropdownOne);



function dropdownTwo() {
    dropdownCard[2].classList.toggle("display");

    for (i = 0; i < dropdownCard.length; i++) {
        if (i == 2) continue;
        dropdownCard[i].classList.remove("display");
    }
}

dropdownButton[2].addEventListener("click", dropdownTwo);



function dropdownThree() {
    dropdownCard[3].classList.toggle("display");

    for (i = 0; i < dropdownCard.length; i++) {
        if (i == 3) continue;
        dropdownCard[i].classList.remove("display");
    }
}

dropdownButton[3].addEventListener("click", dropdownThree);



function dropdownFour() {
    dropdownCard[4].classList.toggle("display");

    for (i = 0; i < dropdownCard.length; i++) {
        if (i == 4) continue;
        dropdownCard[i].classList.remove("display");
    }
}

dropdownButton[4].addEventListener("click", dropdownFour);




function dropdownFive() {
    dropdownCard[5].classList.toggle("display");

    for (i = 0; i < dropdownCard.length; i++) {
        if (i == 5) continue;
        dropdownCard[i].classList.remove("display");
    }
}

dropdownButton[5].addEventListener("click", dropdownFive);




function dropdownSix() {
    dropdownCard[6].classList.toggle("display");

    for (i = 0; i < dropdownCard.length; i++) {
        if (i == 6) continue;
        dropdownCard[i].classList.remove("display");
    }
}
dropdownButton[6].addEventListener("mouseover", dropdownSix);

function removeDropDowns(e) {

    for (i = 0; i < dropdownCard.length; i++) {
        dropdownCard[i].classList.remove("display");
    }
}


document.body.addEventListener("click", removeDropDowns, true);

