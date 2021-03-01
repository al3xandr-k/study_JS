const wrapper = document.querySelector('.wrapper');

class DomElement {

  constructor(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  }

  addElement(selector, height) {
    const addDivElement = document.createElement('div');
    const addParagraphElement = document.createElement('p');
    const pStyle = document.querySelector(selector);
    const divStyle = document.querySelector(selector);
    console.log('selector: ', selector);
    console.log('pStyle: ', pStyle);

    if (selector.includes('.')) {
      wrapper.append(addDivElement);
      addDivElement.setAttribute('class', selector.split('').slice(1).join(''));
      divStyle.style.height = height;

    } else if (selector.includes('#')) {
      wrapper.append(addParagraphElement);
      addParagraphElement.setAttribute('id', selector.split('').slice(1).join(''));
      pStyle.style.height = height;
    }
  };
};

const domElement = new DomElement();

domElement.addElement('#best', '100px');


// - высотой - height,
// - шириной - width, 
// - background - bg
// - размер текста fontSize 