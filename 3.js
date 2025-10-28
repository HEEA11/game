
const gamearea = document.getElementById('gamearea');
const target = document.getElementById('target');
const timeleft = document.getElementById('timeleft');
const successtime = document.getElementById('successtime');
const result = document.getElementById('result');

const totalgametime = 15;
const wintime=5;
const targetmove =100;

let remaining = totalgametime ;
let mousemove =0;
let gameover = false;






//타겟 위cl 랜덤
function movetarget () {

    const maxX = gamearea.clientWidth - target.offsetWidth;
    const maxY = gamearea.clientHeight - target.offsetHeight;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    target.style.left = `${newX}px`;
    target.style.top = `${newY}px`;

}


//마우스 상태 감지
let mouseover = false;

target.addEventListener('mouseenter', () => {
    mouseover = true;
    });

target.addEventListener('mouseleave', () => {
    mouseover = false;
    });

const moveInterval = setInterval(movetarget, targetmove);





// 시간계산
const timer = setInterval(() => {


    if (mouseover) {
        mousemove = Math.min(mousemove +0.1, totalgametime);
    }

    successtime.textContent = mousemove.toFixed(2);

}, 100);





// 시간제한, 승패구현
const gametimer = setInterval(() => {
 

    remaining -= 1;
    timeleft.textContent = remaining.toFixed(2);



    if (remaining <= 0) {
        gameover = true;
        
   
        if (mousemove >= wintime) {
            result.textContent = "승리";
            result.style.color = "green";
        } else {
            result.textContent = `패배`;
            result.style.color = "red";
        }

     
        timeleft.textContent = "0.00";
    }
}, 1000);



