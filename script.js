const btn = document.getElementById('burger-btn');
const menu = document.getElementById('menu');
const toggleTop = document.getElementById('top');
const toggleMid = document.getElementById('mid');
const toggleBttm = document.getElementById('bttm');
/* function toggler() {
    menu.classList.toggle('burger-menu_active');
} */            
btn.addEventListener('click', function() {
    if (btn.className === 'burger-btn active') {
        menu.style.top = ``;
        /* menu.style.transform = ``; */
        toggleTop.style.transform = ``;
        toggleMid.style.width = ``;
        toggleBttm.style.transform = ``;
    } else {
        menu.style.top = `80px`;
        /* menu.style.transform = `translateY(100%)`; */
        toggleTop.style.transform = `rotate(-45deg)`;
        toggleMid.style.width = `0`;
        toggleBttm.style.transform = `rotate(45deg)`;
    }
    btn.classList.toggle('active');
});