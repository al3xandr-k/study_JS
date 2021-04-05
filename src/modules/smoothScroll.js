const smoothScroll = () => {
  //All buttons of sections menu.
  const btnScrollBlock = document.querySelectorAll('a[href="#service-block"]');
  const btnScrollPortfolio = document.querySelector('a[href="#portfolio"]');
  const btnScrollCalc = document.querySelector('a[href="#calc"]');
  const btnScrollCommand = document.querySelector('a[href="#command"]');
  const btnScrollConnect = document.querySelector('a[href="#connect"]');

  //All sections.
  const serviceSection = document.querySelector('#service-block');
  const portfolioSection = document.querySelector('#portfolio');
  const calcSection = document.querySelector('#calc');
  const commandSection = document.querySelector('#command');
  const connectSection = document.querySelector('#connect');

  //Menu button smooth scroll to next section.
  const allBtn = (button, section) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      section.scrollIntoView({ behavior: "smooth" });
    });
  };

  allBtn(btnScrollBlock[0], serviceSection);
  allBtn(btnScrollBlock[1], serviceSection);
  allBtn(btnScrollPortfolio, portfolioSection);
  allBtn(btnScrollCalc, calcSection);
  allBtn(btnScrollCommand, commandSection);
  allBtn(btnScrollConnect, connectSection);
};

export default smoothScroll;