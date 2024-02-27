//Theme switcher in header

const themeSwitch = document.getElementById('themeSwitch');

themeSwitch.addEventListener('change', function () {
  const logoIcon = document.querySelector('.logo-icon use');
  if (this.checked) {
    logoIcon.setAttribute('href', '../img/icons.svg#icon-logo-dark');
  } else {
    logoIcon.setAttribute('href', '../img/icons.svg#icon-logo-light');
  }
});

// When loading the page, we check the saved topic
window.addEventListener('DOMContentLoaded', function () {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark-theme') {
      themeSwitch.checked = true;
    }
  }
});

// When the switch state changes
themeSwitch.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
});

export const buttonClose = document.querySelector('.btn-close');
export const buttonMenu = document.querySelector('.burger-menu');
const modalMenu = document.querySelector('.menu-section');

//Functionality for opening the mobile menu
function openMobileMenu() {
  modalMenu.classList.add('is-open');
  buttonMenu.style.display = 'none';
  buttonClose.style.display = 'inline-block';
  modalMenu.style.display = 'block';
}

buttonMenu.addEventListener('click', openMobileMenu);

// Function to close the mobile menu
function closeMobileMenu() {
  buttonMenu.style.display = 'inline-block';
  buttonClose.style.display = 'none';
  modalMenu.style.display = 'none';
}

// Bind a click event handler to the close button
buttonClose.addEventListener('click', closeMobileMenu);
