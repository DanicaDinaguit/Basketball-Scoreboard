let homeCount = document.getElementById("home-count");
let guestCount = document.getElementById("guest-count");

let counthome = 0;
let countguest = 0;

function plusone(){
    counthome += 1;
    homeCount.textContent = counthome;
}
function plustwo(){
    counthome += 2;
    homeCount.textContent = counthome;
}
function plusthree(){
    counthome += 3;
    homeCount.textContent = counthome;
}
function guestplusone(){
    countguest += 1;
    guestCount.textContent = countguest;
}
function guestplustwo(){
    countguest += 2;
    guestCount.textContent = countguest;
}
function guestplusthree(){
    countguest += 3;
    guestCount.textContent = countguest;
}
function newgame(){
    counthome = 0;
    countguest = 0;
    homeCount.textContent = counthome;
    guestCount.textContent = countguest;
}
