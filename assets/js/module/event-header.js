const SideBar = document.getElementById('side-bar');
Array.from(document.getElementsByClassName('show')).forEach(el => {
    el.addEventListener('click', event => {
        SideBar.classList.toggle('side-bar-on');
    });
});

const Arrows = Array.from(document.getElementsByClassName('arrow'));
const SearchField = document.getElementById('input-field');
const Category = document.getElementById('category-list');
Array.from(document.getElementsByClassName('click')).forEach((el, ind) => {
    let target, trigerOn, trigerOff;

    if(ind == 0) {
        target = SearchField;
        trigerOn = 'search-on';
        trigerOff = 'search-off';
    } else {
        target = Category;
        trigerOn = 'category-on';
        trigerOff = 'category-off';
    }

    el.addEventListener('click', event => {
        Arrows[ind].classList.toggle('arrow-off');
        Arrows[ind].classList.toggle('arrow-on');
        target.classList.toggle(trigerOn);
        target.classList.toggle(trigerOff);
    });
});

const header = document.getElementsByTagName('header')[0];
setInterval(() => {
    if(window.scrollY == 0) {
        header.classList.remove('shadow-on');
        return;
    }
    header.classList.add('shadow-on');
}, 400);