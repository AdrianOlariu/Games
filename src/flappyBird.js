console.log("flappy bird");
let score = 0;
let scoreElement = document.getElementById("score");
scoreElement.innerHTML = score;

let canvasElement = document.getElementById("cvs");
/** @type {CanvasRenderingContext2D} */
let ctx = canvasElement.getContext('2d');

let birdFalling = true;
let birdAscending;
let clicked = 0;
let eyeX = 0;
let eyeY = 0;

let wingX = 0;
let wingY = 0;
let showBoundingBox = false;

function boundingBox(){
    if(!showBoundingBox){
        showBoundingBox = true;
    }else{
        showBoundingBox = false;
    }
}

let gameRunning = false;
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
                velocityValue = 2.5;
                counter ++;
                if(counter == 20){
                        wingY = 0;
                        wingX = 0;
                    started = false;
                    clearInterval(birdAscending);
                    birdFalling = true;
                    velocityValue = 0;
                    clicked = 0;
                }
                velocityValue -= 0.5;
                birdVelocity += 3 + velocityValue;
                
            },20);
        }
})

// birdAscending = setInterval(() => {
            //     birdFalling = false;
            //     velocityValue = 2;
            //     counter ++;
            //     if(counter == 20){
            //         started = false;
            //         console.log('close');
            //         clearInterval(birdAscending);
            //         birdFalling = true;
            //         velocityValue = 0;
            //     }
            //     birdVelocity-=2;
            //     birdVelocity += 4 + velocityValue;
            // },20);


let canvasW = 1282; //window.innerWidth/1.5;
let canvasH = window.innerHeight / 1.5;
canvasElement.width = canvasW;
canvasElement.height = canvasH;



let blockX, blockY, blockWidth, blockHeight;

blockHeight = canvasH;
blockWidth = 120;
blockX = canvasW / 2;
blockY = canvasH - blockHeight;
console.log(canvasH);

let speed = 2;

//hole
let min = 100;
let max = 450;
let holeHeight = 200;
let randomPosition = Math.floor(Math.random() * (max - min) + min);
let birdVelocity = 5;
let velocityValue = 0;

let blocks = [
    {
        x:canvasW,
        y:0,
        w:blockWidth,
        h:blockHeight
    }
];

let holes = [{
        x:0,
        y:0,
        w:0,
        h:0
    }];

let bird = {
    x:canvasW / 4,
    y:200,
    w:120,
    h:90
};


drawBird();

let game = setInterval(()=>{
    
    if(gameRunning == true){
        
        ctx.clearRect(0, 0, canvasW, canvasH);
        moveBlock(blocks, speed);
    
        
        drawBlock(blocks);
        drawBird();

        if(checkBirdCollision()){
            
            
            eyeX = -4;
            drawBird();
            
            clearInterval(game);
            setTimeout(() => {
                alert("Game Over");
                gameRunning = false;
            }, 500);
            
        }
    }

    
    
    if(blocks[0].x < -blockWidth){
        score += 1;
        scoreElement.innerHTML = score;
        blocks.shift();
        randomPosition = Math.floor(Math.random() * (max - min) + min);
        blocks.push({x:canvasW, y:0, w:blockWidth, h:blockHeight});
        
        drawBlock(blocks);
    }
    let offset = 200;
    if(blocks[0].x < canvasW / 2){
        if(blocks.length < 3){
            offset += 200;
            blocks.push({x:blocks[0].x + offset, y:blocks[0].y, w:blocks[0].w, h:blocks[0].h});
            console.log(blocks);
        }
        
    }

        if(birdFalling){
            birdVelocity -= 1 + velocityValue;
            
        }else{
            eyeY = 0;
        }

        if((bird.y + bird.y) / 2 < (holes[0].y + holes[0].h) / 2  ){
            eyeY += 0.05;
        }else{
            eyeY -= 0.05;
        }

    bird.y = -birdVelocity;
    velocityValue += .03;
    
},10);

function generateBlocks(){

}


function generateBlocks(blocks){
    let offset = 200;
    if(blocks.length < 3){
        blocks.push({x:blocks[0].x + offset, y:blocks[0].y, w:blocks[0].w, h:blocks[0].h});
        console.log("DOUA");
    }else{
        blocks.shift();
        generateBlocks(blocks);
        console.log('recursive');
    }
    console.log(blocks);
}

