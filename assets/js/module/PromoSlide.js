class PromoSlide {
    #main;
    #mainSize;
    #timeout;
    #parent;
    #setScroll = {
        behavior: "smooth",
        block: "nearest",
        inline: `${(innerWidth <= 768 && innerWidth > 500) ? "start" : "center"}`
    };

    constructor(parent) {
        this.#parent = parent;
        let ind = (innerWidth <= 768) ? 1 : 2;
        this.#main = this.#parent.children[ind];
        let screenSize = 265;
        if(innerWidth < 768 && innerWidth > 500) {
            screenSize = 0;
        } else if(innerWidth <= 500) {
            screenSize = 40;
        }
        this.#parent.scrollLeft = screenSize;
    }

    #slideSmall() {
        let img = this.#main.firstElementChild.firstElementChild;
        img.classList.toggle('big-img');
        img.classList.toggle('normal-img');
        img.nextElementSibling.classList.toggle('price-off');
    } 

    #slideBig() {
        let img = this.#main.firstElementChild.firstElementChild;
        img.nextElementSibling.classList.toggle('price-off');
        img.classList.toggle('big-img');
        img.classList.toggle('normal-img');
    }

    nextSlide() {
        if(this.#main == this.#parent.children[6]) return;
        this.#slideSmall();
        this.#main = this.#main.nextElementSibling;
        this.#slideBig();
        this.#main.scrollIntoView(this.#setScroll);
    }

    previousSlide() {
        if(this.#main == this.#parent.children[1]) return;
        this.#slideSmall();
        this.#main = this.#main.previousElementSibling;
        this.#slideBig();
        this.#main.scrollIntoView(this.#setScroll);
    }
    
}

export {PromoSlide};