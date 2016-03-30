    document.getElementById('start').onclick = function() {
        document.getElementById('menu').style.display = 'none';
        document.getElementById('canvas').style.display = 'block';
        setInterval(update, 10);
    };
    document.getElementById('buttonDisc').onclick = function() {
        document.getElementById('disc').style.display = 'block';
    };