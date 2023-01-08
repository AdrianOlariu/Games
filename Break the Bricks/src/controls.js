let rightPressed = false;
let leftPressed = false;

canvasElement.addEventListener("click",() =>{
    if(gameRunning == false){
        startGame();
        gameRunning = true;
    }
})

document.addEventListener('keydown', (event) => {
    if(event.code === "KeyA" || event.key === "ArrowLeft"){
        leftPressed = true;
        paddleSpeed -= 1;
    }
    
    if(event.code === "KeyD" || event.key === "ArrowRight"){
        rightPressed = true;
        paddleSpeed += 1;
    }
})

document.addEventListener('keyup', (event) => {
    if(event.code === "KeyA" || event.key === "ArrowLeft"){
        leftPressed = false;
        paddleSpeed = 0;
    }
    
    if(event.code === "KeyD" || event.key === "ArrowRight"){
        rightPressed = false;
        paddleSpeed = 0;
    }
})


