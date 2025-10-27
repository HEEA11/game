//  초 : 밀리초


let intervalId = null;
const UPDATE_INTERVAL = 10;


const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startBtn');
const resetButton = document.getElementById('resetBtn');




let totalMilliseconds = 30000;    // 초기 시간 30초


//시간계산

function time(totalMs) {
    const seconds = Math.floor(totalMs / 1000); // 전체 밀리초를 1000으로 나누어 초 계산
    const milliseconds = totalMs % 100;    // 나머지 밀리초를 계산해서 세자리로 표시


    //   ? 이해 안감
    const formattedSeconds = String(seconds).padStart(2, '0');                     //두자리 초 
    const formattedMilliseconds = String(milliseconds).padStart(2, '0');           //세자리 밀리초

    return `${formattedSeconds}:${formattedMilliseconds}`;

}


// 초기화면 30:000초 세팅
timerDisplay.textContent = time(totalMilliseconds);



// 타이머 업데이트 함수

function updateTimer() {


totalMilliseconds -= UPDATE_INTERVAL; // 10ms 감소

timerDisplay.textContent = time(totalMilliseconds);




// 시간이 0이되면 타이머 중지

if (totalMilliseconds <= 0) {

    timerDisplay.textContent = '00:00'; // 정확히 0으로 표시
    alert('시간 종료!');

}




};











// 시작버튼

startButton.addEventListener('click', () => {

intervalId = setInterval(updateTimer, UPDATE_INTERVAL);        // 10밀리초 간격으로 updateTimer 함수 실행

} );





// 재설정버튼

resetButton.addEventListener('click', () => {
    totalMilliseconds = 30000;
    totalMilliseconds = 30000;timerDisplay.textContent = formatTime(totalMilliseconds);

    clearInterval(intervalId);

});




// 메모
// setInterval()    일정한 시간 간격마다 특정한 함수를 반복해서 실행하도록 함
//    ex) let intervalID = setInterval ( 함수 이름, 지연시간 );

// intervalID       setInterval() 함수가 호출될 때 반환하는 고유 숫자값을 저자하는 변수

// clearInterval(intervalID);     intervalID에 저장된 함수 반복실행을 정지