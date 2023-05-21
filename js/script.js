const niga = document.getElementById('niga');
const cactus = document.getElementById('cactus');



let isAlive = setInterval(function () {
    let nigaTop = parseInt(window.getComputedStyle(niga).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    if (cactusLeft < 35 && cactusLeft > 0 && nigaTop >= 140) {
        alert('Джусик, Потрачено')
        let name = prompt('Ваше имя?', '');
        alert(name + ' ' + 'сыграем ещё раз?');
    }
}, 5)


document.addEventListener('keydown', function (event) {
    nigajump();
});


function nigajump() {
    if (niga.classList != 'nigajump') {
        niga.classList.add('nigajump')
    }
    setTimeout(function () {
        niga.classList.remove('nigajump');
    }, 500)
}
