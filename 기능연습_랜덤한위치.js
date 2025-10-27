const box = document.getElementById('box');
const button = document.getElementById('start');
const container = document.body;




function moveBoxRandomly() {

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const randomX = Math.random()*(containerWidth);
    const randomY = Math.random()*(containerHeight);

    box.style.left = randomX + 'px';
    box.style.top = randomY + 'px';

}



button.addEventListener('click', moveBoxRandomly);


