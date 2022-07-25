(function () {
  const menuButton = document.querySelector('.menu-button')
  const menuWrap = document.querySelector('.menu')
  const classActive = 'menu_active'
  menuButton.addEventListener('click', () => {
    menuWrap.classList.toggle(classActive);
  })
  window.addEventListener('click', (e) => {
    if (!e.target.closest(".navbar") && !e.target.closest(".menu")) {
      menuWrap.classList.toggle(classActive);
    }
  })
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuWrap.classList.contains(classActive)) {
      menuWrap.classList.toggle(classActive);
    }
  })
})();