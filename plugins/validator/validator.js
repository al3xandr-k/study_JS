class Validator {
  constructor({ input, pattern = {}, method }) {
    this.input = document.querySelectorAll(input);
    this.pattern = pattern;
    this.method = method;
    this.elementsInput = [...this.input].filter(item => {
      return item.name !== 'user_email' && item.name !== 'user_phone' && item !== item.closest('.calc-item') && item.tagName.toLowerCase() !== 'button' && item.type !== 'button';
    });
    this.error = new Set();
  };

  init() {
    this.applyStyle();
    this.setPattern();
    this.elementsInput.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
  };

  isValid(elem) {
    const validatorMethod = {
      notEmpty(elem) {
        if (elem.value.trim() === '') {
          return false;
        };
        return true;
      },
      pattern(elem, pattern) {
        return pattern.test(elem.value);
      }
    };

    const method = this.method[elem.id]; //здесь не массив а undefined

    console.log('method: ', method);

    return true; //при значении true ошибка.
  };

  checkIt(event) {
    const target = event.target;

    if (this.isValid(target)) {
      this.showSuccess(target);
      this.error.delete(target);
    } else {
      this.showError(target);
      this.error.add(target);
    };
  };

  showError(elem) {
    const errorDiv = document.createElement('div');
    errorDiv.textContent = 'Ошибка в этом поле';
    errorDiv.classList.add('validator-error');

    elem.insertAdjacentElement('afterend', errorDiv);

    if (elem.nextElementSibling.classList.contains('validator-error')) {
      return;
    };

    elem.classList.remove('success');
    elem.classList.add('error');
  };

  showSuccess(elem) {
    elem.classList.remove('error');
    elem.classList.add('success');

    //тут ошибка когда значение isValid - return true;

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

  setPattern() {

    if (!this.pattern.user_name) {
      this.pattern.user_name = /^[a-z\d/.,:;-=()\]!@#$%^&*_`\[+<>"№?]$/;
    };

    if (!this.pattern.user_message) {
      this.pattern.user_message = /^[a-z]$/;
    };
  };
};

const valid = new Validator({
  input: 'input',
  pattern: {
    user_name: /[a-zA-Z]/,
    user_message: /^[a-z]$/
  },
  method: {
    'user_name': [
      ['notEmpty'],
      ['pattern', 'user_name']
    ],
    'user_message': [
      ['notEmpty'],
      ['pattern', 'user_message']
    ]
  }
});

valid.init();





    // if (item.name === 'user_name' && item.name === 'user_message') {
    //   item.replace(/^[a-z]$/, gi);
    // };