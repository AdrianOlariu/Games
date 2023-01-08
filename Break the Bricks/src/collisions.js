function detectCollisionWalls(){
    if(ballX + dx + 15 >= canvasW || ballX + dx - 15 < 0){
        dx = dx * (-1);
    }

    if(ballY + dy - 15 < 0){
        dy = dy * (-1);
    }
}

function detectCollisionGameOver(){
    if(ballY + dy + -30 >= canvasH){
        return true;
    }else{
        return false;
    }
}

function detectCollisionFull(){
    if(ballX + dx + 15 >= canvasW || ballX + dx - 15 < 0){
        dx = dx * (-1);
    }

    if(ballY + dy + 15 >= canvasH || ballY + dy - 15 < 0){
        dy = (dy * (-1));
    }
}

function collisionPaddle(){
    if((ballX + dx > paddleX && ballX + dx < (paddleX + paddleW)) && ballY + dy > paddleY - 15){
        
        if(leftPressed && dx > 0){
            dx = dx * (-1);
        }else if(rightPressed && dx < 0){
            dx = -dx;
        }
        dy = -dy;
        dy = (dy + paddleSpeed / 10);
        dx = (dx + paddleSpeed / 10);
        console.log(paddleSpeed, dy, dx);
        
    }
}

function brickCollision(bricksArray){
    for(let i = 0; i < bricksArray.length; i++){
        for(let j = 0; j < bricksArray[i].length;j++){
            brick = bricksArray[i][j];
            if(bricksArray[i][j].hit == false){
                if((ballX >= brick.brickX && ballX <= brick.brickX + brickW) && (ballY >= brick.brickY && ballY <= brick.brickY + brickH + 15)){
                    dy = -dy;
                    bricksArray[i][j].hit = true;
                    score = score - 1;
                    if(dx < 0){
                        dx = -2;
                    }else{
                        dx = 2;
                    }
                }
            }
        }
    }
}