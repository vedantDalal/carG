/*const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");

let keys = {ArrowUp:false,ArrowDown:false,ArrowRight:false,ArrowLeft:false};

startScreen.addEventListener("click",start);
document.addEventListener("keydown",pressOn);
document.addEventListener("keyup",pressOff);

function playGame() {
    console.log("inplay");  
    //window.requestAnimationFrame(playGame());
}

function pressOn(e){
    e.preventDefault();
    keys[e.key] = true;
    console.log(keys);
}
function pressOff(e){
    e.preventDefault();
    keys[e.key] = false;
    console.log(keys);
}
function start(){
    console.log("click");
    window.requestAnimationFrame(playGame());
}*/


const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
let player = {};
let keys = {
    ArrowUp: false
    , ArrowDown: false
    , ArrowRight: false
    , ArrowLeft: false
};
startScreen.addEventListener("click", start);
document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);

function playGame() {
    console.log("inplay");
    if (player.start) {
        window.requestAnimationFrame(playGame);
    }
}

function pressOn(e) {
    e.preventDefault();
    keys[e.key] = true;
    console.log(keys);
}

function pressOff(e) {
    e.preventDefault();
    keys[e.key] = false;
    console.log(keys);
}

function start() {
    startScreen.classList.add("hide");
    gameArea.classList.remove("hide");
    player.start = true;
    window.requestAnimationFrame(playGame);
    //https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    let car = document.createElement("div");
    car.innerText = "Car";
    gameArea.appendChild(car);
}