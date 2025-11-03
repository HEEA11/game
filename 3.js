const start = document.getElementById('start');
const gamearea = document.getElementById('gamearea');
const target = document.getElementById('target');
const timeleft = document.getElementById('timeleft');
const successtime = document.getElementById('successtime');
const result = document.getElementById('result');
const homebutton = document.getElementById('homebutton');
const instruction1 = document.getElementById('instruction1');

const success = document.getElementById('success');
const fail = document.getElementById('fail');

const totalgametime = 15;
const wintime=1;
const targetmove =400;

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


//마우스 따라다니는 강아지
window.addEventListener('mousemove', (e) => {
    following.style.left = e.clientX + 'px';
    following.style.top = e.clientY + 'px';

});



//마우스 상태 감지
let mouseover = false;



target.addEventListener('mouseenter', () => {
    mouseover = true;
    });

target.addEventListener('mouseleave', () => {
    mouseover = false;
    });





///--------------노션 정리 할 것--------------//

    window.addEventListener('touchstart', (e) => { 
   

        const touch = e.touches[0];
        const targetRect = target.getBoundingClientRect();

        const isInsideTarget = (
            touch.clientX >= targetRect.left &&
            touch.clientX <= targetRect.right &&
            touch.clientY >= targetRect.top &&
            touch.clientY <= targetRect.bottom
        );

        // target 위에서 터치가 시작됐다면 바로 충돌 상태 적용
        mouseover = isInsideTarget;
        
        if (isInsideTarget) {
             e.preventDefault(); // target 위에서 시작된 터치만 기본 동작(스크롤) 방지
        }
    }, { passive: false });


    // 모바일 터치이동, 터치확인
    window.addEventListener('touchmove', (e) => {
    

        const touch = e.touches[0];
        const clientX = touch.clientX;
        const clientY = touch.clientY;
        const targetRect = target.getBoundingClientRect();

        // 손가락 좌표가 target 영역 안에 있는지 실시간 확인
        const isInsideTarget = (
            clientX >= targetRect.left &&
            clientX <= targetRect.right &&
            clientY >= targetRect.top &&
            clientY <= targetRect.bottom
        );

        // isTouchingTarget 플래그 업데이트
        mouseover = isInsideTarget;
        
        // target 위에서 터치가 발생했다면 스크롤 방지
        if (mouseover) {
            e.preventDefault();
        }
    }, { passive: false });


    // 🌟🌟🌟 [모바일] 터치 종료 🌟🌟🌟
    window.addEventListener('touchend', () => { 
        // 손가락을 떼면 무조건 충돌 상태 해제
        mouseover = false; 
    });
    window.addEventListener('touchcancel', () => { 
        mouseover = false;
    });







    start.addEventListener('click', () => {
        start.remove();
        homebutton.style.display = 'none';
        instruction1.style.display= 'block';
    });







instruction1.addEventListener('click', () => {
    instruction1.style.display = 'none';
    targetlocation = true;


    moveIntervalId = setInterval(movetarget, targetmove);


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
        targetlocation = false;
        gameover = true;
        
   
        if (mousemove >= wintime) {
            success.style.display = 'block';

            target.style.display = 'none';

        } else {
            fail.style.display = 'block';

            target.style.display = 'none';
        }

     
        timeleft.textContent = "0.00";
    }
}, 1000);

});




success.addEventListener('click', () => {
    window.location.reload();
});
fail.addEventListener('click', () => {
    window.location.reload();
});

