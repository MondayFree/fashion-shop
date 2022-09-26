class LandingSlide {
    #slide; 
    #sldElement;
    #rmvElement;
    #setSlide = {
        behavior: 'smooth',
        block: 'nearest', 
        inline: 'center'
    };
    #ivl;
    #timeIvl = 4000;
    #column = 3;
    #mdl = 1;
    #numId = 0;
    #elId;
    #nextTimeout;

    constructor(slide) {
        this.#slide = slide;
        this.#sldElement = slide.firstElementChild;
        this.#rmvElement = slide.firstElementChild;
        this.#elId = this.#slide.firstElementChild;
        this.startIvl();
    }

    #addElement() {
        let img = document.createElement('img');
        img.setAttribute('alt', 'something went wrong');
        let contentSrc = 'assets/img/woman/';
        switch(this.#mdl) {
            case 1 :
                contentSrc += 'raamin.png';
                break;
            case 2 :
                contentSrc += 'ospan.png';
                break;
            case 3 :
                contentSrc += 'rendy.png';
                this.#mdl = 0;
                break;            
        }
        img.setAttribute('src', contentSrc);
        this.#slide.style.gridTemplateColumns = `repeat(${this.#column += 1}, 100%)`;
        this.#slide.appendChild(img);
        this.#mdl++;
    }

    #removeElement() {
        let node = document.createElement('i');
        node.innerHTML = '\u00A0';
        this.#slide.replaceChild(node, this.#rmvElement);
        this.#rmvElement = node.nextElementSibling;
    }

    #addId() {
        this.#elId.id = 1;
        let el = this.#elId.nextElementSibling;
        el.id = 2
        el.nextElementSibling.id = 3;
    }

    #removeId() {
        for(let i = 1; i <= 3; i++) {
            this.#elId.id = '';
            this.#elId = this.#elId.nextElementSibling;
        }
    }

    manualScroll(nth) {
        this.stopIvl();
        clearTimeout(this.#nextTimeout);
        document.getElementById(nth).scrollIntoView(this.#setSlide);
        this.#nextTimeout = setTimeout(() => this.startIvl(), this.#timeIvl);
    }

    startIvl() {
        this.#ivl = setInterval(() => {
            this.#addElement();
            if(this.#slide.children.length > 12) this.#removeElement(slide);
            this.#sldElement.scrollIntoView(this.#setSlide); 
            if(this.#numId == 3) {
                this.#removeId();
                this.#addId();
                this.#numId = 0;
            }
            this.#sldElement = this.#sldElement.nextElementSibling;
            this.#numId++;
        }, this.#timeIvl);
    };

    stopIvl() {clearInterval(this.#ivl)};
}

export {LandingSlide};