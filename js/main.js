const wrapper = document.querySelector('.wrapper');

wrapper.style.fontWeight = 'bold';
wrapper.style.display = 'flex';
wrapper.style.flexDirection = 'column';
wrapper.style.alignItems = 'center';
wrapper.style.alignItem = 'center';
wrapper.style.textAlign = 'center';
wrapper.style.margin = '50px';

class DomElement {

  constructor(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  }

  addElement(selector, height, width, bg, fontSize) {
    if (selector.includes('.')) {
      const addDivElement = document.createElement('div');

      addDivElement.setAttribute('class', selector.split('').slice(1).join(''));
      addDivElement.style.height = height;
      addDivElement.style.width = width;
      addDivElement.style.background = bg;
      addDivElement.style.fontSize = fontSize;
      addDivElement.innerHTML = 'Я есть DIV с class\'ом';
      wrapper.append(addDivElement);
    } else if (selector.includes('#')) {
      const addParagraphElement = document.createElement('p');

      addParagraphElement.setAttribute('id', selector.split('').slice(1).join(''));
      addParagraphElement.style.height = height;
      addParagraphElement.style.width = width;
      addParagraphElement.style.background = bg;
      addParagraphElement.style.fontSize = fontSize;
      addParagraphElement.innerHTML = 'Я есть P\'араграф с id\'шкой';
      wrapper.append(addParagraphElement);
    }

  };
};

const domElement = new DomElement();

domElement.addElement('.block', '600px', '800px', 'url("https://cdn.dribbble.com/users/1224367/screenshots/6777058/glo.jpg") 100% 100%', '2rem');