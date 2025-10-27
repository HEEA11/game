const box = document.getElementById('box');
const current = document.getElementById('current');


//사라지게
box.addEventListener('click', () => {
    box.style.opacity = 0; 

});



//점수카운트

let currentscore = 1;
const total = 50;





box.addEventListener('click', () => {
    box.style.opacity = 0; 
    currentscore++;

    current.textContent = currentscore;


});

