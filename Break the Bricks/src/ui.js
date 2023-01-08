function ballPositionUI(){
    document.getElementById('score').innerHTML = score;
    document.getElementById('spanBallX').innerHTML = ballX.toFixed(0);
    document.getElementById('spanBallY').innerHTML = ballY.toFixed(0);
}

function win(){
    if(score == 0){
        setTimeout(() => {
               alert("CONGRATULATIONS. You WON!");
        }, 200);
        return true;
    }
}