const following = document.getElementById('following');



window.addEventListener('mousemove', (e) => {
    following.style.left = e.clientX + 'px';
    following.style.top = e.clientY + 'px';

});
