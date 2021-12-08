const player = document.getElementById("player");
const cactus = document.getElementById("cactus");
const background = document.getElementById("background");

const buttonPlayStop = document.getElementById("buttonPlayStop");
let scoreInterval;
let score = 0;

document.addEventListener("click", function(){
    player.classList.add("playerJump");
})

player.addEventListener('animationend',() => {
    player.classList.remove("playerJump");
})

scoreInterval = setInterval(() => {
    score++;
    document.getElementById("score").innerHTML = '<br>' + score
}, 1000)

function resumeGame() {
    cactus.style.animationPlayState = 'running';
    player.style.animationPlayState = 'running';
    background.style.animationPlayState = 'running';

    scoreInterval = setInterval(() => {
        score++;
        document.getElementById("score").innerHTML = '<br>' + score
    }, 1000)
}

buttonPlayStop.addEventListener('click', () => {
    if (buttonPlayStop.classList.contains("play")) {
        resumeGame();
    }
    else {
        pauseGame();
    }
    buttonPlayStop.classList.toggle("play");
})

function pauseGame() {
    cactus.style.animationPlayState = 'paused';
    player.style.animationPlayState = 'paused';
    background.style.animationPlayState = 'paused';
    clearInterval(scoreInterval);



}