function moveBlock(block, speed){

    holes[0].x = blocks[0].x - 3;
    holes[0].y = blocks[0].y + randomPosition;
    holes[0].w = blocks[0].w + 2;
    holes[0].h = holeHeight;
    block[0].x -= speed;
    
}

function drawBlock(block){
    
    ctx.beginPath();
    
    ctx.fillStyle = "#6CC4A1";
    
    ctx.rect(block[0].x, block[0].y, block[0].w, block[0].h);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    ctx.clearRect(holes[0].x, holes[0].y, holes[0].w, holes[0].h);
}



function drawBird() {
    // ctx.beginPath();
    // ctx.fillStyle = "#A62349";
    // ctx.arc(bird.x + 25, bird.y + 25, 25, 0, Math.PI * 2);
    // ctx.arc(bird.x + 45, bird.y - 10 + 25, 20, 0, Math.PI * 2);
    // ctx.fill();
    // ctx.closePath();
    // ctx.beginPath();
    // ctx.arc(bird.x + 70, bird.y - 30 + 25, 30, 20, Math.PI);
    // ctx.fill();
    // ctx.fill();
    // ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = "#A62349";
    ctx.arc(bird.x + 15 + 20 + 20, bird.y + 60 - 15, 55, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#F9F3EE";
    ctx.arc(bird.x + 15 + 40 + 20 + 5 + 20, bird.y + 60 - 20 - 20, 20, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    

    ctx.beginPath();
    ctx.fillStyle = "#383838";
    ctx.arc(bird.x + 15 + 40 + 30 + 20 + eyeX, bird.y + 60 - 20 - 20 + eyeY, 10, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#D7A86E";
    ctx.moveTo(bird.x + 15 + 60 + 20, bird.y + 60 - 10);
    ctx.lineTo(bird.x + 15 + 60 + 20, bird.y + 60 + 20);
    ctx.lineTo(bird.x + 15 + 110 + 20, bird.y + 60 + 10);
    ctx.fill();
    ctx.closePath();

    

    ctx.beginPath();
    ctx.fillStyle = "#383838";
    ctx.moveTo(bird.x + wingX + 15 - 22, bird.y + wingY + 60 - 22);
    ctx.bezierCurveTo(bird.x + wingX + 15 + (0.5522847498307936 * 43.5), bird.y + wingY + 60 - 21,  bird.x + wingX + 15 + 43.5, bird.y + wingY + 60 - (0.5522847498307936 * 21), bird.x + wingX + 15 + 43.5, bird.y + wingY + 60);
    ctx.bezierCurveTo(bird.x + wingX + 15 + 43.5, bird.y + wingY + 60 + (0.5522847498307936 * 21), bird.x + wingX + 15 + (0.5522847498307936 * 43.5), bird.y + wingY + 60 + 21, bird.x + wingX + 15, bird.y + wingY + 60 + 21);
    ctx.bezierCurveTo(bird.x + wingX + 15 - (0.5522847498307936 * 43.5), bird.y + wingY + 60 + 21, bird.x + wingX + 15 - 43.5, bird.y + wingY + 60 + (0.5522847498307936 * 21), bird.x + wingX + 15 - 43.5, bird.y + wingY + 60);
    ctx.bezierCurveTo(bird.x + wingX + 15 - 43.5, bird.y + wingY + 60 - (0.5522847498307936 * 21), bird.x + wingX + 15 - (0.5522847498307936 * 43.5), bird.y + wingY + 60 - 21, bird.x + wingX + 15, bird.y + wingY + 60 - 21);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo( bird.x + 95 + 5, bird.y + 70);
    ctx.lineTo(bird.x + 145, bird.y + 70);
    
    ctx.stroke();
    ctx.closePath();

    // ctx.beginPath();
    // ctx.fillStyle = "#E5E3C9";
    // ctx.moveTo(bird.x - 5 + 15, bird.y  - 10 + 60);
    // ctx.lineTo(bird.x + 30 + 15, bird.y + 15 + 60);
    // ctx.lineTo(bird.x + 10 + 15, bird.y + 20 + 60);
    // ctx.fill();
    // ctx.closePath();

    if(showBoundingBox){
        ctx.beginPath();
        ctx.rect(bird.x, bird.y, bird.w, bird.h);
        ctx.stroke();
        ctx.closePath();
    }
}