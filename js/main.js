const wrapper = document.querySelector('.wrapper');

class DomElement {

  constructor(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  }

  addElement(selector) {
    const addDivElement = document.createElement('div');
    const addParagraphElement = document.createElement('p');

    if (selector.indexOf('.', 1)) {
      wrapper.append(addDivElement);
      addDivElement.setAttribute('class', 'addCLassDivElement');
    } else if (selector.indexOf('#', 1)) {
      wrapper.append(addParagraphElement);
      addParagraphElement.setAttribute('id', 'addParagraphIdElement');
    }
  }
};

const domElement = new DomElement();
// - если строка selector начинается с точки, создаем div с классом
// - если строка selector  начинается с решетки # то создаем параграф с id

console.log(domElement.addElement('.'));