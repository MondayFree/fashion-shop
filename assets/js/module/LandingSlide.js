class LandingSlide {
  #slide;
  #sldElement;
  #rmvElement;
  #setSlide = {
    behavior: "smooth",
    block: "end",
    inline: "center",
  };
  #ivl;
  #timeIvl = 4000;
  #column = 3;
  #mdl = 1;
  #numId = 0;
  #elId;
  #nextTimeout;
  #navigation;
  #crtNav;

  constructor(slide) {
    this.#slide = slide;
    this.#sldElement = slide.firstElementChild;
    this.#rmvElement = slide.firstElementChild;
    this.#elId = this.#slide.firstElementChild;
    this.#navigation = slide.nextElementSibling.lastElementChild.children;
    this.#crtNav = this.#navigation[0];
    this.startIvl();
    slide.scrollLeft = 35;
  }

  #addElement() {
    let img = document.createElement("img");
    img.setAttribute("alt", "something went wrong");
    let contentSrc = "assets/img/woman/";
    let number;
    switch (this.#mdl) {
      case 1:
        contentSrc += "raamin.png";
        number = 0;
        break;
      case 2:
        contentSrc += "ospan.png";
        number = 1;
        break;
      case 3:
        contentSrc += "rendy.png";
        number = 2;
        this.#mdl = 0;
        break;
    }
    img.setAttribute("src", contentSrc);
    img.classList.add(number);
    this.#slide.style.gridTemplateColumns = `repeat(${(this.#column += 1)}, 100%)`;
    this.#slide.appendChild(img);
    this.#mdl++;
  }

  #removeElement() {
    let node = document.createElement("i");
    node.innerHTML = "\u00A0";
    this.#slide.replaceChild(node, this.#rmvElement);
    this.#rmvElement = node.nextElementSibling;
  }

  #addId() {
    this.#elId.id = 1;
    let el = this.#elId.nextElementSibling;
    el.id = 2;
    el.nextElementSibling.id = 3;
  }

  #removeId() {
    for (let i = 1; i <= 3; i++) {
      this.#elId.id = "";
      this.#elId = this.#elId.nextElementSibling;
    }
  }

  #changeCrtNav(index) {
    if (this.#navigation[index] == this.#crtNav) return;
    this.#crtNav.classList.toggle("normal-bullet");
    this.#crtNav.classList.toggle("big-bullet");
    this.#crtNav = this.#navigation[index];
    this.#crtNav.classList.toggle("normal-bullet");
    this.#crtNav.classList.toggle("big-bullet");
  }

  manualScroll(nth) {
    this.stopIvl();
    clearTimeout(this.#nextTimeout);
    const cnt = document.getElementById(nth);
    cnt.scrollIntoView(this.#setSlide);
    this.#changeCrtNav(parseInt(cnt.classList.item(0)));
    this.#nextTimeout = setTimeout(() => this.startIvl(), this.#timeIvl);
  }

  startIvl() {
    this.#ivl = setInterval(() => {
      this.#addElement();
      if (this.#slide.children.length > 12) this.#removeElement(slide);
      this.#sldElement.scrollIntoView(this.#setSlide);
      this.#changeCrtNav(parseInt(this.#sldElement.classList.item(0)));
      if (this.#numId == 3) {
        this.#removeId();
        this.#addId();
        this.#numId = 0;
      }
      this.#sldElement = this.#sldElement.nextElementSibling;
      this.#numId++;
    }, this.#timeIvl);
  }

  stopIvl() {
    clearInterval(this.#ivl);
  }
}

export { LandingSlide };
