(function() {
    "use strict";
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        paddleHeight = 10,
        paddleWidth = 75,
        paddleX = (canvas.width - paddleWidth) / 2,
        paddleY = canvas.height - paddleHeight,
        rightPressed = false,
        leftPressed = false,
        //---------------
        score = 0,
        lives = 3,
        //--------------
       
        W = canvas.width,
        H = canvas.height,
        a1 = W / 6,
        x,
        y,
        b1 = H / 3;
    //--------------
    function drawScore() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Score: " + score, +8, 20);
    }

    function drawLives() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Lives: " + lives, canvas.width - 60, 20);
    }
    //---------------
    //---------------
    function getRandomX() {
        var randomNumber = Math.floor((Math.random() * 5) + 1);
        x = a1 * randomNumber;
        return x;
    }
    //---------------
    function getRandomY() {
        var randomNumber = Math.floor((Math.random() * 2) + 1);
        y = b1 * randomNumber;
        return y;
    }
    //--------------
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e) {
        if (e.keyCode == 39) {
            rightPressed = true;
        } else if (e.keyCode == 37) {
            leftPressed = true;
        }
    }

    function keyUpHandler(e) {
        if (e.keyCode == 39) {
            rightPressed = false;
        } else if (e.keyCode == 37) {
            leftPressed = false;
        }
    }

    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
        if (rightPressed && paddleX < canvas.width - paddleWidth / 2) {
            paddleX += 1;
        } else if (leftPressed && paddleX > 0 - paddleWidth / 2) {
            paddleX -= 1;
        }
    }
    var ball = {
        x: getRandomX(),
        y: getRandomY(),
        radius: 15,
        color: "#0095DD",
        vy: 1,
        draw: function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }
    };

    function clearCanvas() {
        ctx.clearRect(0, 0, W, H);
    }

    function update() {
        var randomNumber = Math.floor((Math.random() * 2) + 1);
        clearCanvas();
        drawScore();
        drawLives();
        ball.draw();
        drawPaddle();
        ball.y += ball.vy;
        if (ball.y + ball.vy > H - ball.radius || ball.y + ball.vy < ball.radius) {
            ball.x = getRandomX();
            ball.y = getRandomY();
            if (randomNumber === 1) {
                ball.color = "red";
            } else {
                ball.color = "#0095DD";
            }
            ball.draw();
        }
        if ((ball.y) > (paddleY - paddleHeight) && (ball.x + ball.radius) > paddleX && (ball.x - ball.radius) < (paddleX + paddleWidth) && ball.color == "red") {
            score++;
            ball.x = getRandomX();
            ball.y = getRandomY();
            if (randomNumber === 1) {
                ball.color = "red";
            } else {
                ball.color = "#0095DD";
            }
            ball.draw();
        }
         if ((ball.y) > (paddleY - paddleHeight) && (ball.x + ball.radius) > paddleX && (ball.x - ball.radius) < (paddleX + paddleWidth) && ball.color == "#0095DD") {
            lives--;
            ball.x = getRandomX();
            ball.y = getRandomY();
            if (randomNumber === 1) {
                ball.color = "red";
            } else {
                ball.color = "#0095DD";
            }
            ball.draw();
        }

        if (lives === 0) {
            alert('Game Over');
        }
    }

    document.getElementById('start').onclick = function() {
        document.getElementById('menu').style.display= 'none';
        document.getElementById('canvas').style.display= 'block';
        setInterval(update, 10);
    };

    document.getElementById('buttonDisc').onclick = function() {
        document.getElementById('disc').style.display= 'block';

    };
    
})();