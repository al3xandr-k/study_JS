'use strict'

const modalCallBackForm = () => {

  const body = document.querySelector('body');

  const modalCallBack = document.querySelector('.modal-callback')
  const modalOverlay = document.querySelector('.modal-overlay')

  // PopUp Form ()
  body.addEventListener('click', (event) => {
    const target = event.target

    if (target.closest('.callback-btn')) {
      modalCallBack.style.display = 'block'
      modalOverlay.style.display = 'block'
    } else if (target.closest('.modal-close')) {
      modalCallBack.style.display = 'none'
      modalOverlay.style.display = 'none'
    } else if (target.closest('.modal-overlay')) {
      modalCallBack.style.display = 'none'
      modalOverlay.style.display = 'none'
    }
  })
}

modalCallBackForm()

const smoothScroll = () => {

  //btn top menu
  const servicesBtn = document.querySelectorAll('a[href="#services"]')
  const faqBtn = document.querySelectorAll('a[href="#faq"]')
  const contactsBtn = document.querySelectorAll('a[href="#contacts"]')

  //all sections
  const services = document.querySelector('#services')
  const faq = document.querySelector('#faq')
  const contacts = document.querySelector('#contacts')

  console.log(contactsBtn, servicesBtn, faqBtn);

  //Menu button smooth scroll to next section.
  const allSection = (button, section) => {
    button.addEventListener('click', (event) => {
      event.preventDefault()

      section.scrollIntoView({ behavior: 'smooth' })
    })
  }

  allSection(servicesBtn[0], services)
  allSection(faqBtn[0], faq)
  allSection(contactsBtn[0], contacts)
}

smoothScroll()