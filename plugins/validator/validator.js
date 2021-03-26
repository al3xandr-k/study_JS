class Validator {
  constructor({ input, pattern = {}, method }) {
    this.input = document.querySelectorAll(input);
    this.pattern = pattern;
    this.method = method;
    this.form = document.querySelectorAll('form');
    this.elementsInput = [...this.input].filter(item => {
      return item.name !== 'user_email' && item.name !== 'user_phone' && item !== item.closest('.calc-item') && item.tagName.toLowerCase() !== 'button' && item.type !== 'button';
    });
    this.error = new Set();
  };

  init() {
    this.applyStyle();
    this.setPattern();
    this.elementsInput.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));

    this.form.forEach(item => {
      item.addEventListener('submit', (event) => {
        this.elementsInput.forEach(elem => this.checkIt({ target: elem }));

        if (this.error.size) {
          event.preventDefault();
        };
      });
    });

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

    if (this.method) {
      const method = this.method[elem.name];
      if (method) {
        return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
      };
    } else {
      console.warn('Необходимо передать user_name полей ввода и методы проверки этих полей для работы валидатора!');
    }

    return true;
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
    if (elem.nextElementSibling) {
      elem.nextElementSibling.remove();
    }

    const errorDiv = document.createElement('div');
    errorDiv.textContent = 'Ошибка в этом поле';
    errorDiv.classList.add('validator-error');

    elem.insertAdjacentElement('afterend', errorDiv);

    if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
      return;
    };

    elem.classList.remove('success');
    elem.classList.add('error');
  };

  showSuccess(elem) {
    elem.classList.remove('error');
    elem.classList.add('success');

    if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
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
      this.pattern.user_name = /^$/;
    };

    if (!this.pattern.user_message) {
      this.pattern.user_message = /^$/;
    };
  };
};

const valid = new Validator({
  input: 'input',
  pattern: {
    user_name: /^[а-яА-Я]+$/,
    user_message: /^[а-яА-Я]+$/
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