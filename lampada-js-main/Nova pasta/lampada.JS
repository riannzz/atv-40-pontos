const lampYellow  = document.getElementById('yellow');
const lampTransp = document.getElementById('transp');
const lampBlue = document. getElementById('blue');
const lampWhite = document. getElementById('white');
const lampGreen = document. getElementById('green');
const lampRed = document. getElementById('red');
const lamp = document.getElementById('lamp');

function yellow() {

    lamp.src='./img/lamp yellow.png'
}

function transp() {

    lamp.src='./img/lamp transp.png'
}
function white() {

    lamp.src='./img/lamp white.png'
}
function blue() {

    lamp.src='./img/lamp blue.png'
}
function red() {

    lamp.src='./img/lamp red.png'
}
function green() {

    lamp.src='./img/lamp green.png'
}

 lampYellow.addEventListener ('click', yellow);
 lampTransp.addEventListener('click', transp);
 lampBlue.addEventListener('click', blue);
 lampGreen.addEventListener('click', green);
 lampRed.addEventListener('click', red);
 lampWhite.addEventListener('click', white);