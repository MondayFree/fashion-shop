// import
import {HeaderEvent, LandingSlide, PromoSlide} from './module/landing-init.js';


// header-start
const sideBar = document.getElementById('side-bar');
const arrows = Array.from(document.getElementsByClassName('arrow'));
const searchField = document.getElementById('input-field');
const category = document.getElementById('category-list');
const header = document.getElementsByTagName('header')[0];
const show = document.getElementsByClassName('show');
const click = document.getElementsByClassName('click');

const headerEvent = new HeaderEvent(sideBar, arrows, searchField, category, header, show, click);
// header-end


// slider-start
const slide = document.getElementById('slide');
const slider = new LandingSlide(slide);

Array.from(document.getElementsByClassName('l-bullet')).forEach(el => {
    el.addEventListener('click', event => {
        switch(el.id) {
            case 'one' :
                slider.manualScroll(1);
                break;
            case 'two' :
                slider.manualScroll(2);
                break;
            case 'three' :
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
    if(scrollY < 50) {
        if(check) {
            slider.startIvl();
            check = false;
        }
    } else {
        slider.stopIvl();
        check = true;
    }
}, 300);
// slider-end

// promo-slide-start
const promo = document.getElementById('promo-product');
const scrollNav = document.getElementsByClassName('scroll-nav');
const promoSlider = new PromoSlide(promo);

Array.from(scrollNav).forEach((el, ind) => {
    el.addEventListener('click', event => {
        if(ind == 0) {
            promoSlider.previousSlide();
            return;
        }
        promoSlider.nextSlide();
    });
});
// promo-slide-end