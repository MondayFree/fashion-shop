class Popular {
    #tabChild;
    #indicator;
    #tabPosition;
    #groupProduct;
    #children;
    #ivlScroll;
    #value 
    #valueInc = 0;
    #run = 0;
    #contentPosition;

   constructor(groupProduct, tabChild, indicator) {
       this.#groupProduct = groupProduct;
       this.#children = Array.from(this.#groupProduct.children);
       this.#tabChild = tabChild;
       this.#indicator = indicator;
       this.#computePosition();
       this.#indicator.style.width = `${this.#tabChild[0].clientWidth}px`;
   }

   #computePosition() {
        const position = [0];
        const parentW = this.#tabChild[0].parentElement.clientWidth;
        let allEl = 0;
        this.#tabChild.forEach(el => allEl += el.clientWidth);
        const secondPosition = ((parentW - allEl) / 2) + this.#tabChild[0].clientWidth;
        position.push(secondPosition, (parentW - this.#tabChild[2].clientWidth));
        this.#tabPosition = position;
        const childW = Math.round(this.#groupProduct.clientWidth * (70 / 100) + 20);
        this.#contentPosition = new Map([
            ["featured", childW],
            ["justArived", childW * 2]
        ]);
    }

    moveTab(index) {
        this.#indicator.style.width = `${this.#tabChild[index].clientWidth}px`;
        this.#indicator.style.transform = `translateX(${this.#tabPosition[index]}px)`;
    }

    scrollContent(index) {
        this.#children[index].scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'center'});
    }

    #scrollByCheck(scrollLeft) {
        let idx;
        const justArived = this.#contentPosition.get('justArived');
        const featured = this.#contentPosition.get('featured');
        if(scrollLeft <= featured) {
            idx = 0;
        } else if(scrollLeft > featured && scrollLeft <= justArived) {
            idx = 1;
        } else if(scrollLeft > justArived) {
            idx = 2;
        }
        this.moveTab(idx);
        this.#groupProduct.children[idx].scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'center'}); 
    } 

    #checkScroll() {
        this.#ivlScroll = setInterval(() => {
            if(this.#value == this.#valueInc) {
                this.#scrollByCheck(this.#groupProduct.scrollLeft);
                this.#value = 0;
                this.#valueInc = 0;
                setTimeout(() => this.#run = 0, 500);
                clearInterval(this.#ivlScroll);
                return;
            }
            this.#value = this.#valueInc;
        }, 150);
    }

    incValue() {
        this.#value++;
    }

    runCheckScroll = () => {
        if(this.#run == 0) this.#checkScroll();
        this.#run = 1;
    };
}

export {Popular};