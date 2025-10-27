const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startBtn');


let totalSeconds = 0; // 초 단위로 시간을 저장할 변수
let intervalId = null; // setInterval의 고유 ID를 저장할 변수





// 시간을 n분 : n초 형식으로 

function formatTime(secs){
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    
    return `${formattedMinutes}:${formattedSeconds}`;
}




// 1초마다 타이머 업데이트

function updateTimer() {
    totalSeconds++; // 1초 증가
    timerDisplay.textContent = formatTime(totalSeconds); // 화면 업데이트
}


//실행


startButton.addEventListener('click', () => {

    intervalId = setInterval(updateTimer, 1000);    // 1chakek updateTimer 함수를 반복

});
