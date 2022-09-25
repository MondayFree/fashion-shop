// import
import * as func from './module/landing-init.js';


// header-start
const sideBar = document.getElementById('side-bar');
const arrows = Array.from(document.getElementsByClassName('arrow'));
const searchField = document.getElementById('input-field');
const category = document.getElementById('category-list');
const header = document.getElementsByTagName('header')[0];
const show = document.getElementsByClassName('show');
const click = document.getElementsByClassName('click');

const headerEvent = new func.HeaderEvent(sideBar, arrows, searchField, category, header, show, click);
// header-end


// slider-start
const slide = document.getElementById('slide');
const slider = new func.LandingSlide(slide);

Array.from(document.getElementsByClassName('btn')).forEach(el => {
    el.addEventListener('click', event => {
        switch(el.id) {
            case 'play' :
                slider.startIvl();
                break;
            case 'stop' :
                slider.stopIvl();
                break;
            case '1' :
                slider.manualScroll(1);
                break;
            case '2' :
                slider.manualScroll(2);
                break;
            case '3' :
                slider.manualScroll(3);
        }
    });
});

addEventListener('visibilitychange', event => {
    if(document.hidden) {
        slider.stopIvl();
        return;
    }
    slider.startIvl();
});

let check;
setInterval(() => {
    if(scrollY == 0) {
        if(check) {
            slider.startIvl();
            check = false;
        }
    } else {
        slider.stopIvl();
        check = true;
    }
}, 400);
// slider-end