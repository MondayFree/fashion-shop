class Popular {
   #tabChild;
   #indicator;
   #tabPosition;

   constructor(tabChild, indicator) {
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
    }

    moveTab(index) {
        this.#indicator.style.width = `${this.#tabChild[index].clientWidth}px`;
        this.#indicator.style.transform = `translateX(${this.#tabPosition[index]}px)`;
    }
}

export {Popular};