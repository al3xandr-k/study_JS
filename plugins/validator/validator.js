class Validator {
  constructor({ input, pattern, method }) {
    this.input = document.querySelectorAll(input);
    this.pattern = pattern;
    this.method = method;
    this.elementsInput = [...this.input].filter(item => {
      return item.name !== 'user_email' && item.name !== 'user_phone' && item !== item.closest('.calc-item') && item.tagName.toLowerCase() !== 'button' && item.type !== 'button';
    });
    //console.log([...this.input]);
  };

  init() {
    this.applyStyle();
    console.log(this.elementsInput);
  };

  showError(elem) {
    const errorDiv = document.createElement('div');
    errorDiv.textContent = 'Ошибка в этом поле';
    errorDiv.classList.add('validator-error');

    elem.insertAdjacentElement('afterend', errorDiv);

    elem.classList.remove('success');
    elem.classList.add('error');
  };

  showSuccess(elem) {
    elem.classList.remove('error');
    elem.classList.add('success');

    if (elem.nextElementSibling.classList.contains('validator-error')) {
      elem.nextElementSibling.remove();
    };
  };

  applyStyle() {
    const style = document.createElement('style');
    style.textContent = `
    input.success {
      border: 2px solid green;
    };

    input.error {
      border: 2px solid red;
    };

    .validator-error {
      font-size: 12px;
      font-family: sans-serif;
      color: #FF6347;
    };
    `;
    document.head.append(style);
  };
};

const valid = new Validator({
  input: 'input',
  pattern: {},
  method: {}
});

valid.init();





    // if (item.name === 'user_name' && item.name === 'user_message') {
    //   item.replace(/^[a-z]$/, gi);
    // };