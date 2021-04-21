const regularExpression = () => {
  const body = document.querySelector('body')

  body.addEventListener('input', (event) => {
    const target = event.target

    if (target.name === 'fio') {
      target.value = target.value.replace(/[a-z\d/.,:;-=()\]!@#$%^&*_`\[+<>"№?]/gi, '')
      target.value = target.value.trim().slice(0, 1).toUpperCase() + target.value.trim().slice(1).toLowerCase()
    } else if (target.name === 'tel') {
      target.value = target.value.replace(/[a-zа-я\s/.,!@#$%^&\]=*<>\["№?:;{}|_~`]/gi, '').trim()
    }
  })

  body.addEventListener('focusout', (event) => {
    const target = event.target

    if (target.name === 'fio') {
      target.value = target.value.replace(/[a-z\d/.,:;-=()\]!@#$%^&*_`\[+<>"№?]/gi, '')
      target.value = target.value.trim().slice(0, 1).toUpperCase() + target.value.trim().slice(1).toLowerCase()
    } else if (target.name === 'tel') {
      target.value = target.value.replace(/[a-zа-я\s/.,!@#$%^&\]=*<>\["№?:;{}|_~`]/gi, '').trim()
    }

    const allBtnForms = document.querySelectorAll('.feedback') 

    const btnSubmit = (boolean) => {
      allBtnForms.forEach(item => {
        item.disabled = boolean
      });
    };

    if (target.name === 'tel') {
      if (target.value.length < 7 || target.value.length > 12) {
        btnSubmit(true);
      };
    } else if (target.name === 'fio') {
      if (target.value.length < 2) {
        btnSubmit(true);
      };
    };
  })
}

export default regularExpression