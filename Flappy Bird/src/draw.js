function drawBird() {

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
    ctx.fillStyle = "#367E18";
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
    ctx.moveTo(bird.x + 95 + 5, bird.y + 70);
    ctx.lineTo(bird.x + 145, bird.y + 70);
    ctx.stroke();
    ctx.closePath();

    if(showBoundingBox){
        ctx.beginPath();
        ctx.rect(bird.x, bird.y, bird.w, bird.h);
        ctx.stroke();
        ctx.closePath();
    }
}