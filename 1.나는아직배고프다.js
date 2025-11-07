
const start = document.getElementById('title');
const howtoplay1 = document.getElementById('howtoplay1');
const instruction1 = document.getElementById('instruction1');

const timer = document.getElementById('timer');
const container = document.getElementById("imagecontainer")
const following = document.getElementById('following');
const current = document.getElementById('current');
const background = document.getElementById('background');
const all = document.querySelectorAll('items');
const obstacle = document.querySelectorAll('obstacle');

let intervalId = null;
let initialtime = 30000;    // 초기 시간 30초












//마우스 따라다니는 강아지
window.addEventListener('mousemove', (e) => {
    following.style.left = e.clientX + 'px';
    following.style.top = e.clientY + 'px';

});






//시간계산
function time(totalMs) {

        //   ? 이해 안감
    const seconds = Math.floor(totalMs / 1000); // 전체 밀리초를 1000으로 나누어 초 계산
    const milliseconds = totalMs % 100;    // 나머지 밀리초를 계산해서 세자리로 표시


    const setseconds = String(seconds).padStart(2, '0');                     //두자리 초 
    const setmilliseconds = String(milliseconds).padStart(2, '0');           //세자리 밀리초

    return `${setseconds}:${setmilliseconds}`;

};



//타이머세팅
timer.textContent = time(initialtime);


//타이머업데이트
function updateTimer() {

    initialtime -= 10; // 10ms 감소
    
    timer.textContent = time(initialtime);



    // 시간이 0이되면 타이머 중지
    if (initialtime <= 0) {

    initialtime = 0;
    timer.textContent = '00:00';

    clearInterval(intervalId);


  

    
    //------------승패판단---------------
    if (currentscore>=30) {
        const firstresult = document.createElement("img");
        firstresult.src = "firstresult.png";
        firstresult.style.position = "absolute";
        firstresult.style.width = "300px";
        firstresult.style.height = "auto";
        firstresult.style.top = "50%";
        firstresult.style.left = "50%";
        firstresult.style.transform = "translate(-50%, -50%)"; // 정확한 중앙 정렬
        firstresult.style.zIndex = 100; // 다른 요소 위에 표시
        firstresult.id = 'resultImage'; 
        document.body.appendChild(firstresult);
    }
    if (currentscore>0 && currentscore<30) {
        const thirdresult = document.createElement("img");
        thirdresult.src = "thirdresult.png";
        thirdresult.style.position = "absolute";
        thirdresult.style.width = "auto";
        thirdresult.style.height = "70%";
        thirdresult.style.top = "50%";
        thirdresult.style.left = "50%";
        thirdresult.style.transform = "translate(-50%, -50%)"; // 정확한 중앙 정렬
        thirdresult.style.zIndex = 100; // 다른 요소 위에 표시
        thirdresult.id = 'resultImage'; 
        document.body.appendChild(thirdresult);
    }

    const resultImage = document.getElementById('resultImage');

    if (resultImage) {
        resultImage.addEventListener('click', () => {
            window.location.reload();
        });
        }
}    }


//점수카운트
let currentscore = 0;
const total = 50;



//배경크기 계ㅅ산

    const backgroundRect = background.getBoundingClientRect();
    const bgx = backgroundRect.left;
    const bgy = backgroundRect.top;
    const bgwidth = backgroundRect.width;
    const bgheight = backgroundRect.height;
    







//랜덤하게 50개 고기가 생성 
const img = document.getElementById('item');
const totalitem = 50; 



    function createmeat () {

    document.querySelectorAll('.meat').forEach(item => item.remove());
    for (let i=0; i<totalitem; i++) {

    const newimg = document.createElement("img");

        const x = bgx + Math.random() * (bgwidth - 100);
        const y = bgy + Math.random() * (bgheight - 100);


    newimg.src = "item.png";
    newimg.style.position = "absolute";
    newimg.style.width = `5%`;

    newimg.style.left = `${x}px`;
    newimg.style.top = `${y}px`;
   
    newimg.style.zIndex = 40;

        document.body.appendChild(newimg);

        newimg.addEventListener('click', () => {
            newimg.remove();
            currentscore++;
        
            current.textContent = currentscore;
        
        });
        
}
};




const itemarray = [];

for (let i = 1; i <=30; i++) {
    itemarray.push(`item${i}.png`);
};



//다른 아이템들 랜덤생성
function createitems () {
    

    itemarray.forEach(itemsrc => {
    for (let i = 0; i < 3; i++) {
        const obstacle = document.createElement("img"); //선택한 이미지를 3번 반복해서 생성

    obstacle.src = itemsrc;

        const x = bgx + Math.random () * (bgwidth - 100);
        const y = bgy + Math.random () * (bgheight - 100);

     
        obstacle.style.position = "absolute";
        obstacle.style.height = '3%'; 
        obstacle.style.left = `${x}px`;
        obstacle.style.top = `${y}px`;
        obstacle.style.zIndex = 50;
        
        document.body.appendChild(obstacle);
    }
    });
}



//--------------------본격시작--------------------

document.addEventListener('DOMContentLoaded', function() {

start.addEventListener('click', () => {
    start.remove();
    instruction1.style.display= 'block';
    homebutton.style.display = 'none';

   


});
});






instruction1.addEventListener('click', () => {


    instruction1.style.display= 'none';



    intervalId = setInterval(updateTimer, 10);        // 10밀리초 간격으로 updateTimer 함수 실행

    createmeat();
    createitems();
 

    });
    