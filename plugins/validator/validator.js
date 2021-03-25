class Validator {
  constructor({ selector, pattern = {}, method }) {
    this.input = document.querySelectorAll(selector);
    this.pattern = pattern;
    this.method = method;
    this.elementsInput = [...this.input].filter(item => {
      return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';
    });
    this.error = new Set();
  };

  init() {
    this.applyStyle();
    this.setPattern();
    this.elementsInput.forEach(item => {
      item.addEventListener('change', this.checkIt.bind(this));
    });

    // if (item.name === 'user_name' && item.name === 'user_message') {
    //   item.replace(/^[a-z]$/, gi);
    // };
  };

  isValid(elem) {
    const validatorMethod = {
      notEmpty(elem) {
        if (elem.value.trim() === '') {
          return false;
        }
        return true;
      },
      pattern(elem, pattern) {
        return pattern.test(elem.value);
      }
    };

    const method = this.method[elem.id];

    if (method) {
      return method.every(item => {
        console.log(item);
      });
    };

    return true;
  };

  checkIt(event) {
    const target = event.target;

    if (this.isValid(target)) {
      this.showSuccess(target);
      this.error.delete(target);
    } else {
      this.showError(target);
      this.error(target);
    };
  };

  showError(elem) {
    const errorDiv = document.createElement('div');

    elem.classList.remove('success');
    elem.classList.add('error');

    errorDiv.textContent = 'Ошибка в этом поле';
    errorDiv.classList.add('validator-error');
    elem.insertAdjacentElement('afterend', errorDiv);

    if (elem.nextElementSibling.classList.contains('validator-error')) {
      return;
    };
  };

  showSuccess(elem) {
    elem.classList.remove('error');
    elem.classList.add('success');

    // ТУТ какая та ошибка.

    // if (elem.nextElementSibling.classList.contains('validator-error')) {
    //   elem.nextElementSibling.remove();
    // };
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
        font-family: san-serif;
        color: red;
      };
    `;

    document.head.append(style);
  }

  setPattern() {
    if (!this.pattern.name) {

      this.pattern.name = (/^$/);
    };
  };
};

const valid = new Validator({
  selector: 'input',
  pattern: { name: /^[А-Яа-я]$/ },
  method: {
    'form1-name': [
      ['notEmpty'],
      ['pattern', 'name']
    ],
    'form2-message': [
      ['notEmpty'],
      ['pattern', 'message']
    ],
    'form3-name': [
      ['notEmpty'],
      ['pattern', 'name']
    ]
  }
});

valid.init();