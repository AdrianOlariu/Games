window.onload = document.addEventListener("keypress", (event) =>{
    if(event.key === "d" || event.key == "ArrowRight"){
        if((snakeDirection == 1)){
            return 1;
        }else{
            snakeDirection = 0;
        }
    }
    if(event.key === "a" || event.key == "ArrowLeft"){
        if((snakeDirection == 0)){
            return 1;
        }else{
            snakeDirection = 1;
        }
    }
    if(event.key === "s" || event.key == "ArrowDown"){
        if((snakeDirection == 3)){
            return 1;
        }else{
            snakeDirection = 2;
        }
    }
    if(event.key === "w" || event.key == "ArrowUp"){
        if(snakeDirection == 2){
            return 1;
        }else{
            snakeDirection = 3;
        }
    }
});

const canvasElement = /** @type {HTMLCanvasElement} */ (document.getElementById("cnvs"));
const ctx = canvasElement.getContext('2d');

const inc = 40;//increments

canvasElement.width = 1280;// + 480;
canvasElement.height = 720;// + 320;

let canvasW = 1280;
let canvasH = 720;


let snakeX = 7;
let snakeY = 0;

let portals = [
    {x:5, y:10, color:"#F15412"}, 
    {x:20, y: 10, color:"#34B3F1"}
];


let snakeHead;

let snake = [
    {
        x:snakeX,
        y:snakeY
    },
    {
        x:snakeX - 1,
        y:snakeY
    },
    {
        x:snakeX - 2,
        y:snakeY
    },
    {
        x:snakeX - 3,
        y:snakeY
    },
];


let fruitX;
let fruitY;

function generateFruit(){
    fruitX = Math.ceil(Math.random() * (canvasW / inc - 1));
    fruitY = Math.ceil(Math.random() * (canvasH / inc - 1));
    console.log(fruitX, fruitY);
}

generateFruit();


console.log(fruitX, fruitY);

let snakeDirection = 0;

//0 = right, 1 = left, 2 = down, 3 = up

console.log(snake);

let gameInterval = setInterval(() => {
    refreshCanvas(canvasW, canvasH);
    for(let i = 0; i < snake.length; i++){
        drawSnake(snake[i].x, snake[i].y);
    }
    drawFruit(fruitX, fruitY);
    drawGrid();
    drawPortal(portals[0].x, portals[0].y, portals[0].color);
    drawPortal(portals[1].x, portals[1].y, portals[1].color);
    
},100);


let snakeInterval = setInterval(() => {
    snakeCollisions();
    
    if(snakeDirection == 0){
            snakeHead = {x:snake[0].x + 1, y:snake[0].y};
            snake.unshift(snakeHead);
            snake.pop();
    }else if(snakeDirection == 1){
            snakeHead = {x:snake[0].x - 1, y:snake[0].y};
            snake.unshift(snakeHead);
            snake.pop();
    }else if(snakeDirection == 2){
            snakeHead = {x:snake[0].x, y:snake[0].y + 1};
            snake.unshift(snakeHead);
            snake.pop();
    }else if(snakeDirection == 3){
            snakeHead = {x:snake[0].x, y:snake[0].y - 1};
            snake.unshift(snakeHead);
            snake.pop();
    }
},250);


function drawFruit(x, y){
    ctx.beginPath();
    ctx.fillStyle = "#3FA796"
    ctx.arc(x * inc + inc / 2, y * inc + inc / 2, inc / 2, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}


function refreshCanvas(canvasW, canvasH){
    ctx.beginPath();
    ctx.clearRect(0,0,canvasW, canvasH);
    ctx.closePath();
}

function drawGrid(){
    for(let i = 0; i < canvasW / inc + 1; i++){
        ctx.beginPath();
        ctx.moveTo(i* inc, 0);
        ctx.lineTo(i * inc, canvasH + 2);
        ctx.stroke();
        ctx.closePath();
    }
    
    for(let i = 0; i < canvasH / inc + 1; i++){
        ctx.beginPath();
        ctx.moveTo(0, i* inc);
        ctx.lineTo(canvasW + 2, i * inc);
        ctx.stroke();
        ctx.closePath();
    }
}

function drawSnake(x, y){
    ctx.beginPath();
    ctx.fillStyle = "#F2D388";
    ctx.fillRect(x * inc,y * inc, inc, inc);
    ctx.closePath();
}

function drawPortal(x, y, color){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x * inc + inc / 2, y * inc + inc / 2, inc / 2, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();
}



function snakeCollisions(){
    //fruit
    if(snake[0].x == fruitX && snake[0].y == fruitY){
        console.log("ate fruit");
        snake.push({x:snake[snake.length - 1].x, y:snake[snake.length - 1].y});
        generateFruit();
        
    }
    //walls collision
    // if(snake[0].x < 0 || snake[0].y < 0 || snake[0].x > canvasW / inc - 1 || snake[0].y > canvasH / inc - 1){
    //     console.log(canvasH / inc);
    //     gameOver();
    // }

    //self collision

    for(let i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            console.log("self collision");
        }
    }

    //walls teleportation
    if(snake[0].x < 0){
        snake[0].x = canvasW / inc - 1;
    }else if(snake[0].x > canvasW / inc - 1){
        snake[0].x = 0;
    }else if(snake[0].y < 0){
        snake[0].y = canvasH / inc - 1;
    }else if(snake[0].y > canvasH / inc - 1){
        snake[0].y = 0;
    }

    //portal collision
    if(snake[0].x == portals[0].x && snake[0].y == portals[0].y){   
        console.log("portal 1");
        snake[0].x = portals[1].x;
        snake[0].y = portals[1].y;
    }else if(snake[0].x == portals[1].x && snake[0].y == portals[1].y){   
        console.log("portal 1");
        snake[0].x = portals[0].x;
        snake[0].y = portals[0].y;
    }

    
}


function gameOver(){
    alert("game over!");
    clearInterval(snakeInterval);
}

