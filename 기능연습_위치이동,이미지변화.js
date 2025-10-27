const button = document.getElementById('button');
const place1 = document.getElementById('place1');




// 버튼 3초후 생김

setTimeout(function(){

    button.style.display ='block';
}, 3000)








//위치에 이미지생성


button.addEventListener('click', () => {

    const newImage = document.createElement('img');    //<img> 요소를 생성
    newImage.src = 'image.png';
    place1.appendChild(newImage);


});