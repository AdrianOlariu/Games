function drawPaddle(x,y, padw, padh){
    ctx.beginPath();
    ctx.fillStyle = '#54BAB9';
    ctx.fillRect(x, y, padw, padh);
    ctx.fill();
    
    ctx.closePath();
}


function drawBall(x, y){
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI, true);
    ctx.fillStyle = "#54BAB9";
    ctx.fill();
    ctx.closePath();
} 

function generateBricks(x, y, brickWidth, brickHeight, nrOfColumns, nrOfRows, offset){
    for(let j = 0; j < nrOfRows; j++){
        bricks[j] = [];
        for(let i = 0; i < nrOfColumns; i++){
            let brickX = x + i * (brickWidth + offset);
            let brickY = y + j * (brickHeight + offset);
            // bricks[j].push([brickX,brickY]); push an array of tow values
            //or
            // bricks[j].push({x:brickX, y:brickY}); push an object that has value x and value y
            //or
            bricks[j][i] = {brickX, brickY, hit:false} //key value will be of form: {brickX:brickX, brickY:brickY}
        }
    }
}


function drawBricks(bricksArray, width, height){
    for(let i = 0; i < bricksArray.length;i++ ){
        for(let j = 0; j <bricksArray[i].length; j++){
            if(bricksArray[i][j].hit == false){
                ctx.beginPath();
                ctx.rect(bricksArray[i][j].brickX, bricksArray[i][j].brickY, width, height);
                ctx.fillStyle = '#A77979';
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            }
            
        }
    }
}

function testArray(){
    let arrTest = [];
    
    arrTest[0] = [];
    arrTest[1] = [];

    let arr = [];
    arr[0] = ["0"];
    arr[1] = ["1"];

    console.log(arrTest);
    arrTest[0] = arr; 
    
    console.log(arrTest);
    console.log(arrTest[0][0]);
    
    console.log(arrTest[0][1]);
}