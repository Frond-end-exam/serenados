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

    fallObject = true,
//--------------
    W = 566,
    H = 575,
    W = canvas.width,
    H = canvas.height,
    a1 = W / 6,
    b1 = H / 3;
//--------------

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score,+8, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + lives, canvas.width-60, 20);
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
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
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
    if (this.ball.y + this.ball.vy > H - ball.radius || this.ball.y + this.ball.vy < ball.radius) {
        this.ball.x = getRandomX();
        this.ball.y = getRandomY();
         if (randomNumber === 1) {
            console.log(randomNumber);
            this.ball.color = "red";
          } else {
            this.ball.color = "#0095DD";
          }
        
        ball.draw();
    
    }
   
    if ((this.ball.y) > (paddleY-paddleHeight) && (this.ball.x+this.ball.radius) > paddleX && (this.ball.x-this.ball.radius) < (paddleX+paddleWidth) && this.ball.color == "red" ) {
    score++;
     this.ball.x = getRandomX();
        this.ball.y = getRandomY();
        if (randomNumber === 1) {
            console.log(randomNumber);
            this.ball.color = "red";
          } else {
            this.ball.color = "#0095DD";
          }
        ball.draw();
}
}




setInterval(update, 10);
