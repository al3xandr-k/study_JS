class Validator {
  constructor({ selector, pattern, method }) {
    this.selector = selector;
    this.pattern = pattern;
    this.method = method;
  };

  init() {
    console.log(this.selector);
  };

  showError() {

  };

  showSuccess() {

  };
};

const valid1 = new Validator({
  selector: '#form1',
  pattern: {},
  method: {}
});
const valid2 = new Validator({
  selector: '#form2',
  pattern: {},
  method: {}
});
const valid3 = new Validator({
  selector: '#form3',
  pattern: {},
  method: {}
});

valid1.init();
valid2.init();
valid3.init();