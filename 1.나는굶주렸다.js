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


    const formattedSeconds = String(seconds).padStart(2, '0');                     //두자리 초 
    const formattedMilliseconds = String(milliseconds).padStart(2, '0');           //세자리 밀리초

    return `${formattedSeconds}:${formattedMilliseconds}`;

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
    if (currentscore>=45) {
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
    if (currentscore>=30 && currentscore<45) {
        const secondresult = document.createElement("img");
        secondresult.src = "secondresult.png";
        secondresult.style.position = "absolute";
        secondresult.style.width = "300px";
        secondresult.style.height = "auto";
        secondresult.style.top = "50%";
        secondresult.style.left = "50%";
        secondresult.style.transform = "translate(-50%, -50%)"; // 정확한 중앙 정렬
        secondresult.style.zIndex = 100; // 다른 요소 위에 표시
        secondresult.id = 'resultImage'; 
        document.body.appendChild(secondresult);
    }
    if (currentscore>0 && currentscore<30) {
        const thirdresult = document.createElement("img");
        thirdresult.src = "thirdresult.png";
        thirdresult.style.position = "absolute";
        thirdresult.style.width = "outo";
        thirdresult.style.height = "100%";
        thirdresult.style.top = "50%";
        thirdresult.style.left = "50%";
        thirdresult.style.transform = "translate(-50%, -50%)"; // 정확한 중앙 정렬
        thirdresult.style.zIndex = 100; // 다른 요소 위에 표시
        thirdresult.id = 'resultImage'; 
        document.body.appendChild(thirdresult);
    }

    if (resultImage) {
        resultImage.addEventListener('click', () => {
            window.location.reload();
        });
        }
}    }


//점수카운트
let currentscore = 1;
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
    newimg.style.width = `2%`;

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



//다른 아이템들 랜덤생성
function create1 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item2.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '5%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create2 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item2.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '5%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create3 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item3.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '5%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create4 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item4.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '5%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create5 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item5.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '5%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create6 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item6.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '5%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create7 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<5; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item7.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create8 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item8.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create9 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item9.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create10 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item10.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create11 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item11.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create12 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item12.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create13 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item13.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create14 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item14.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create15 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item15.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create16 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item16.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create17 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item17.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create18 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item18.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create19 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item19.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create20 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item20.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create21 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item21.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create22 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item2.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create23 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item23.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create24 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item24.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create25 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item25.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create26 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item26.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create27 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item27.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create28 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item28.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}
function create29 () {

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item29.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}

function create30 () {
    location();

    document.querySelectorAll('item').forEach(item => item.remove());

    for (let i=0; i<3; i++) {
    
        const obstacle = document.createElement("img");
    
            const x = bgx + Math.random() * (bgwidth - 100);
            const y = bgy + Math.random() * (bgheight - 100);

            obstacle.src = "item30.png";
            obstacle.style.position = "absolute";
            obstacle.style.height = '3%';
            obstacle.style.left = `${x}px`;
            obstacle.style.top = `${y}px`;
            obstacle.style.zIndex = 50;
        
                document.body.appendChild(obstacle);
        
    
    }
}



//--------------------본격시작--------------------

start.addEventListener('click', () => {
    start.remove();
    howtoplay1.remove();

    intervalId = setInterval(updateTimer, 10);        // 10밀리초 간격으로 updateTimer 함수 실행
    createmeat();
    create1();
    create2();
    create3();
    create4();
    create5();
    create6();
    create7();
    create8();
    create9();
    create10();
    create11();
    create12();
    create13();
    create14();
    create15();
    create16();
    create17();
    create18();
    create19();
    create20();
    create21();
    create22();
    create23();
    create24();
    create25();
    create26();
    create27();
    create28();
    create29();
    create30();
 



});

howtoplay1.addEventListener('click', () => {


instruction1.style.display= 'block';

});

instruction1.addEventListener('click', () => {


    instruction1.style.display= 'none';
    
    });
    






