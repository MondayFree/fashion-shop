// import
import {HeaderEvent, LandingSlide, PromoSlide, Popular} from './module/landing-init.js';


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

// popular-start
const popularTab = Array.from(document.getElementsByClassName('popular-tab-element'));
const indicator = document.getElementById('indicator');
const groupProduct = document.getElementById('group-product');
const popular = new Popular(groupProduct, popularTab, indicator);
const slidePopular = Array.from(document.getElementsByClassName('slide-popular'));

popularTab.forEach((el, ind) => {
    el.addEventListener('click', event => {
        popular.moveTab(ind);
        popular.scrollContent(ind);
    });
});

let currentSlide = 0;
slidePopular.forEach((el, ind) => {
    el.addEventListener('click', event => {
        if(ind == 1) {
            if(currentSlide == 2) return;
            currentSlide++;
            popular.moveTab(currentSlide);
            popular.scrollContent(currentSlide);
            return;
        } else {   
            if(currentSlide == 0) return;
            currentSlide--;
            popular.moveTab(currentSlide);
            popular.scrollContent(currentSlide);
        }
    });
});

groupProduct.addEventListener('scroll', event => {
    popular.incValue();
    popular.runCheckScroll();
});
// popular-end