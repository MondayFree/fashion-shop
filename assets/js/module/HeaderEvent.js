class HeaderEvent {
    #sideBar;
    #arrows;
    #searchField;
    #category;
    #header;
    #show;
    #click;

    constructor(sideBar, arrows, searchField, category, header, show, click) {
        this.#sideBar = sideBar;
        this.#arrows = arrows;
        this.#searchField = searchField;
        this.#category = category;
        this.#header = header;
        this.#show = show;
        this.#click = click;
        this.#showSideBar();
        this.#showSearchField();
        this.#addShadow();
    }

    #showSideBar() {
        Array.from(this.#show).forEach(el => {
            el.addEventListener('click', event => {
                this.#sideBar.classList.toggle('side-bar-on');
            });
        });
    }

    #showSearchField() {
        Array.from(this.#click).forEach((el, ind) => {
            let target, trigerOn, trigerOff;
            if(ind == 0) {
                target = this.#searchField;
                trigerOn = 'search-on';
                trigerOff = 'search-off';
            } else {
                target = this.#category;
                trigerOn = 'category-on';
                trigerOff = 'category-off';
            }
            el.addEventListener('click', event => {
                this.#arrows[ind].classList.toggle('arrow-off');
                this.#arrows[ind].classList.toggle('arrow-on');
                target.classList.toggle(trigerOn);
                target.classList.toggle(trigerOff);
            });
        });
    }
    
    #addShadow() {
        setInterval(() => {
            if(scrollY == 0) {
                this.#header.classList.remove('shadow-on');
                return;
            }
            this.#header.classList.add('shadow-on');
        }, 400);
    }
}

export {HeaderEvent};