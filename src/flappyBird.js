let fps = 60;
let canvasElement = document.getElementById("cvs");

/** @type {CanvasRenderingContext2D} */
let ctx = canvasElement.getContext('2d');

let canvasW = window.innerWidth / 1.1;
let canvasH = window.innerHeight / 1.5;
canvasElement.width = canvasW;
canvasElement.height = canvasH;

let scoreElement = document.getElementById("score");
let score = 0;
scoreElement.innerHTML = score;
let birdFalling = true;
let birdAscending;
let clicked = 0;

//animated
let eyeX = 0;
let eyeY = 0;

let wingX = 0;
let wingY = 0;
let showBoundingBox = false;

let blockX, blockY, blockWidth, blockHeight;

blockHeight = canvasH;
blockWidth = 120;
blockX = canvasW / 2;
blockY = canvasH - blockHeight;

let speed = 2;

//hole
let holeMin = 100;
let holeMax = 450;
let holeHeight = 220;
let randomPosition;
let birdVelocity = -400;
let birdVelocityValue = 0;

function boundingBox(){
    if(!showBoundingBox){
        showBoundingBox = true;
    }else{
        showBoundingBox = false;
    }
}

let gameRunning = false;
let fps2 = 0;
canvasElement.addEventListener("click", () => {
    if(gameRunning == false){
        gameRunning = true;
    }
    if(clicked == 0){
        counter = 0;
        wingY = 15;
        wingX = -5;
        birdAscending = setInterval(() => {
                    clicked = 1;
                    birdFalling = false;
                    birdVelocityValue = 2.5;
                    counter++;
                    if(counter == 20){
                        wingY = 0;
                        wingX = 0;
                        started = false;
                        clearInterval(birdAscending);
                        birdFalling = true;
                        birdVelocityValue = 0;
                        clicked = 0;
                    }

                    birdVelocityValue -= 0.8;
                    birdVelocity += 3 + birdVelocityValue;
                    fps2 = 0;
            },20);
        }
})


let offset = 600;

let blocks = [
    {
        x:canvasW,
        y:0,
        w:blockWidth,
        h:blockHeight
    },
    {
        x:canvasW + offset,
        y:0,
        w:blockWidth,
        h:blockHeight
    },
    {
        x:canvasW + offset * 2,
        y:0,
        w:blockWidth,
        h:blockHeight
    },
    {
        x:canvasW + offset * 3,
        y:0,
        w:blockWidth,
        h:blockHeight
    }
];

let holes = [
    {
        x:canvasW,
        y:0,
        w:blockWidth,
        h:holeHeight
    },
    {
        x:canvasW + offset,
        y:0,
        w:blockWidth + 2,
        h:holeHeight
    },
    {
        x:canvasW + offset * 2,
        y:0,
        w:blockWidth,
        h:holeHeight
    },
    {
        x:canvasW + offset * 3,
        y:0,
        w:blockWidth,
        h:holeHeight
    },
];

let bird = {
    x:canvasW / 4 + 100,
    y:0,
    w:120,
    h:90
};


let currentBlock = 0;

let rand;
let genRand = true;

function generateRandom(){
    randomPosition = Math.floor(Math.random() * (holeMax - holeMin) + holeMin);
    return randomPosition;
}

function initialiseRandomValues(){
    for(let i = 0; i < holes.length; i++){
            holes[i].y = generateRandom();
    }
}

initialiseRandomValues();

function findNextBlockIndex(){
    let smallestX;
    for(let i = 0; i < holes.length; i++){
        smallestX = holes[i].x;
        if(bird.x > holes[i].x){
            if(holes[i].x < holes[i + 1]){
                smallestX = holes[i + 1]
            }
        }
    }
    let index = holes.map(val => {val.x}).indexOf(smallestX);
    return index;
}

let game = setInterval(()=>{
    for(let i = 0; i <= fps; i++){
        if(i == fps){
            
            ctx.clearRect(0, 0, canvasW, canvasH);
            if(gameRunning == true){
            if(birdFalling){
                birdVelocity -= 1 + birdVelocityValue;
            }else{
                eyeY = 0;
            }  
            
            for(let i = 0; i <= blocks.length - 1; i++){
                blocks[i].x -= speed;
                holes[i].x -= speed;
                if(blocks[i].x + blockWidth < 0){
                    let random;
                    if(!random){
                        random = generateRandom();
                    }

                    score += 1;
                    blocks.shift();
                    blocks.push({x:blocks[blocks.length - 1].x + offset, y:blocks[blocks.length - 1].y, w:blocks[blocks.length - 1].w, h:blocks[blocks.length - 1].h});
                    holes.shift();
                    holes.push({x:holes[holes.length - 1].x + offset, y:random, w:holes[holes.length - 1].w, h:holes[holes.length - 1].h});                    
                    random = null;
                    }
                    if(blocks[i].x + blockWidth < bird.x){
                        if(score == 0){
                            score = 1;
                        }
                        setTimeout(() => {eyeX = 0
                            }, 500);
                    }
                        if(checkBirdCollision(i)){
                            eyeX = -4;
                            drawBird();
                            clearInterval(game);
                            setTimeout(() => {
                                alert("Game Over");
                                gameRunning = false;
                            }, 500);
                        }    
                }
                scoreElement.innerHTML = score;
                drawBlocks();
            drawBird();
        }
        fps = 0;
            }
    }
    // bird flying
    if((bird.y + bird.y) / 2 < (holes[1].y + holes[1].h) / 2  ){
        eyeY += 0.05;
    }else{
        eyeY -= 0.05;
    }

    birdVelocityValue += .03;
    bird.y = -birdVelocity;

},10);


function drawBlocks(){
    for(let i = 0; i < blocks.length; i++){
    ctx.beginPath();
    ctx.fillStyle = "#6CC4A1";
    ctx.rect(blocks[i].x, blocks[i].y, blocks[i].w - 2, blocks[i].h);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.clearRect(holes[i].x - 2, holes[i].y, holes[i].w + 4, holes[i].h);
    }
}
