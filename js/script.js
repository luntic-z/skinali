(function () {
  const menuButtons = document.querySelectorAll('.menu-button')
  const menuWrap = document.querySelector('.menu')
  const classActive = 'menu_active'
  menuButtons.forEach((menuButton) => {
    menuButton.addEventListener('click', () => {
      console.log('toggle!')
      menuWrap.classList.toggle(classActive);
    })
  })
  window.addEventListener('click', (e) => {
    if (!e.target.closest(".navbar") &&
      !e.target.closest(".menu") &&
      !e.target.closest(".menu-button") &&
      menuWrap.classList.contains(classActive)) {
      menuWrap.classList.toggle(classActive);
    }
  })
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuWrap.classList.contains(classActive)) {
      menuWrap.classList.toggle(classActive);
    }
  })
})();