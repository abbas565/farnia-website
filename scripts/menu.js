// JavaScript Document

// Menu JS
window.onload=function(){

    const body = document.body;
    const hamburger = document.querySelector('.hamburger-menu');
    const bar = document.querySelector('.bar');
    
    hamburger.addEventListener('click', showMenu);
    
    function showMenu(){
        body.classList.toggle('show');
        bar.classList.toggle('animate');
    }
}

