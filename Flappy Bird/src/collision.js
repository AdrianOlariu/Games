function checkBirdCollision(index){

    let collision = false;

    if(bird.x + bird.w > blocks[index].x){
        collision = true;
        if(bird.y > holes[index].y && bird.y + bird.h < holes[index].y + holes[index].h){
            eyeX -= .05;
            collision = false;
        }else{
            if(bird.x > blocks[index].x + blocks[index].w){
                collision = false;
            }
        }
    }

    if(bird.y - 100 > canvasH){
        collision = true;
    }

    return collision;
}