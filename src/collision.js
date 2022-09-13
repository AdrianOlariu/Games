function checkBirdCollision(){
    let collision = false;
    if(bird.x + bird.w > blocks[0].x){
        collision = true;
        if(bird.y > holes[0].y && bird.y + bird.h < holes[0].y + holes[0].h){
            eyeX -= .05;
            collision = false;
        }else{
            if(bird.x > blocks[0].x + blocks[0].w){
                eyeX = 0;
                collision = false;
            }
        }
    }
    if(bird.y - 100 > canvasH){
        collision = true;
    }

    return collision;

    
}