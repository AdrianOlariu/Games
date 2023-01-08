const canvasElement = /** @type {HTMLCanvasElement} */ (document.getElementById(`cv`));
const ctx = canvasElement.getContext("2d");

let canvasH = canvasElement.height;
let canvasW = canvasElement.width;

let ballX, ballY, dx, dy, gameRunning, paddleX, paddleY, paddleW, paddleH, brickW, brickH, collumns, rows, bricksOffset, score;

let bricks = [];

let paddleSpeed = 0;

initialize();

function startGame(){
    initialize();

    //move the ball
    dx = dx * (Math.random() < 0.5 ? -1 : 1);
    dy = -dy;


    myInterval = setInterval(() => {
        ballPositionUI();
        detectCollisionWalls();
        collisionPaddle();

        if(gameRunning == true){
            if(detectCollisionGameOver() || win()){
                clearInterval(myInterval);
                gameRunning = false;
                initialize();
            }
        };
    
        ctx.clearRect(0, 0, canvasW, canvasH);
        
        ballX = ballX + dx;
        ballY = ballY + dy;
        drawBall(ballX, ballY);
        drawPaddle(paddleX, paddleY, paddleW, paddleH);
        
        brickCollision(bricks);
        drawBricks(bricks, brickW, brickH);

        //move the paddle
        if(leftPressed){
            if(!(paddleX <= 10)){
                paddleX -= 5;
                
            }
        }
        if(rightPressed){
            if(!(paddleX >= canvasW - paddleW - 30)){
                paddleX += 5;
            }
        }

    }, 10);
}


function initialize(){
    
    console.log(bricks.length);

    //bricks
    brickW = 80;
    brickH = 20;
    collumns = 6;
    rows = 3;
    bricksOffset = 25;
    
    //score
    score = rows * collumns;

    //paddle
    paddleW = 120;
    paddleH = 30;

    paddleX = canvasW / 2 - paddleW / 2 - 10;
    paddleY = canvasH - 25;

    
    gameRunning = false;
    ballX = canvasW / 2;
    ballY = canvasH - 60;
    dx = 2;
    dy = 2;

    
    drawPaddle(paddleX, paddleY, paddleW, paddleH);
    drawBall(ballX,ballY);
    generateBricks(10,10,brickW,brickH,collumns,rows,bricksOffset);
    drawBricks(bricks, brickW, brickH);
}

console.log(bricks);