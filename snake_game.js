window.onload = function(){
 
    var difficult = prompt("Escolha uma dificuldade: (1) Fácil, (2) Médio, (3) Difícil.");
    var speed = 0;

    if (difficult == 1) {
        speed = 120;
    } else if (difficult == 2) {
        speed = 80;
    } else {
        speed = 50;
    }

    console.log(difficult);

    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, speed);
    console.log(prompt.value);
    const vel = 1;

    var velocidadeX = velocidadeY = 0;
    var posicaoX = 10;
    var posicaoY = 15;
    var tamanhoPeca = 30;
    var quatidadePeca = 20;
    var appleX = appleY = 15;
    var score = 0;

    var trail = [];
    tail = 5;

    function game(){
        posicaoX += velocidadeX;
        posicaoY += velocidadeY;
        if (posicaoX <0) {
            posicaoX = quatidadePeca-1;
        }
        if (posicaoX > quatidadePeca-1) {
            posicaoX = 0;
        }
        if (posicaoY < 0) {
            posicaoY = quatidadePeca-1;
        }
        if (posicaoY > quatidadePeca-1) {
            posicaoY = 0;
        }

        ctx.fillStyle = "#97BF06";
        ctx.fillRect(0,0, stage.width, stage.height);

        ctx.fillStyle = "#B22222";
        ctx.fillRect(appleX*tamanhoPeca, appleY*tamanhoPeca, tamanhoPeca,tamanhoPeca);

        ctx.fillStyle = "#2C4001";
        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x*tamanhoPeca, trail[i].y*tamanhoPeca, tamanhoPeca-1,tamanhoPeca-1);
            if (trail[i].x == posicaoX && trail[i].y == posicaoY)
            {
                velocidadeX = velocidadeY = 0;
                tail = 5;
                var scoreSnake = document.getElementById("score");
                scoreSnake.innerHTML = score;
                score = 0;
            }
        }

        trail.push({x:posicaoX,y:posicaoY })
        while (trail.length > tail) {
            trail.shift();
        }

        if (appleX==posicaoX && appleY==posicaoY){
            tail++;
            appleX = Math.floor(Math.random()*quatidadePeca);
            appleY = Math.floor(Math.random()*quatidadePeca);
            score += 100;
            var scoreSnake = document.getElementById("score");
            scoreSnake.innerHTML = score;
        }
    }

    function keyPush(event){
        switch (event.keyCode) {
            case 37: // Left
                velocidadeX = -vel;
                velocidadeY = 0;
                break;
            case 38: // up
                velocidadeX = 0;
                velocidadeY = -vel;
                break;
            case 39: // right
                velocidadeX = vel;
                velocidadeY = 0;
                break;
            case 40: // down
                velocidadeX = 0;
                velocidadeY = vel;
                break;          
            default:
                
                break;
        }
    }
}

for(a = 0; a < 10; a++) {
    console.log(a);
}