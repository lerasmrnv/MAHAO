
'use strict';
// слайдер
let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider-line');
const widthScreen = window.screen.width;

function displayWith(){
    if (widthScreen === 414) {
        document.querySelector('.slider-next').addEventListener('click', function() {
            offset += 170;
            if (offset> 680) {
                offset = 0;
            }
            sliderLine.style.left = -offset + 'px'; 
        });
        
        document.querySelector('.slider-prev').addEventListener('click', function() {
            offset -= 170;
            if (offset < 0) {
                offset = 680;
            }
            sliderLine.style.left = -offset + 'px'; 
        });
        
    }
    else {
        document.querySelector('.slider-next').addEventListener('click', function() {
            offset += 400;
            if (offset> 1170) {
                offset = 0;
            }
            sliderLine.style.left = -offset + 'px'; 
        });
        
        document.querySelector('.slider-prev').addEventListener('click', function() {
            offset -= 400;
            if (offset < 0) {
                offset = 800;
            }
            sliderLine.style.left = -offset + 'px'; 
        });
    }
}

displayWith ();


