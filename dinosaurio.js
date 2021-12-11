const player = document.getElementById("player");

const cactus = document.getElementById("cactus");

const background = document.getElementById("background");

// const buttonFlow = document.getElementById("button-flow")

const buttonPlayStop = document.getElementById("buttonPlayStop");

let scoreInterval;

let score = 0;

const board = document.getElementById("board");

// let gameLoop;


board.addEventListener('click', function () {
    playerJump();
    console.log('foo');
})

function playerJump() {
    player.classList.add("playerJump");

}

// document.addEventListener("click", function(){
//     player.classList.add("playerJump");
// })

player.addEventListener('animationend',() => {
    removeJump();
});

function removeJump() {
    player.classList.remove("playerJump");

}

resumeScore();

function resumeGame() {
    resumenAnimation();
    resumeScore();
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
    pauseAnimation();
    stopScore();
}

// function lostGame() {
//     cancelAnimationFrame(gameLoop)
//     pauseGame();
//     buttonFlow.classList.add("reset")
// }

function stopScore() {
    clearInterval(scoreInterval);
}

function resumeScore() {
    scoreInterval = setInterval(() => {
        score++;
        document.getElementById("score").innerHTML = '<br>' + score
    }, 1000)
}

function pauseAnimation() {
    cactus.style.animationPlayState = 'paused';
    player.style.animationPlayState = 'paused';
    background.style.animationPlayState = 'paused';
}

function resumenAnimation() {
    cactus.style.animationPlayState = 'running';
    player.style.animationPlayState = 'running';
    background.style.animationPlayState = 'running';
}

const restartButton = document.getElementById("restartGame");

restartButton.addEventListener('click', restartGame)

function restartGame() {
    resetScore();
    removeJump();
    void cactus.offsetWidth;
    cactus.classList.remove("cactusMovement");
    cactus.classList.add("cactusMovement");

    // gameLoop = requestAnimationFrame(checkCondition);
}

// function checkCondition() {
//     if (
//         cactus.offsetLeft < (player.offsetLeft + 49)
//         && cactus.offsetLeft > player.offsetLeft
//         && (player.offsetTop >= (cactus.offsetTop - player.offsetHeight))
//     ) {
//         lostGame();
//     }
//     gameLoop = requestAnimationFrame(checkCondition)
// }

function resetScore() {
    score = 0;
    document.getElementById("score").innerHTML = '<br>' + score;
}

document.addEventListener("keyup", (event) => {
    const key = event.key;
    if(key == 'ArrowUp') {
        playerJump();
    }

    const keyLowerCase = key.toLowerCase();

    if (keyLowerCase == "w") {
        playerJump();
    }
})
