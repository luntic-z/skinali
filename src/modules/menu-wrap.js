const menuWrap = () => {
  const menuButtons = document.querySelectorAll('.menu-button')
  const menuClose = document.querySelector('.menu__button-close')
  const menuWrap = document.querySelector('.menu')
  //disappearing menu-button
  const navbarBtn = document.querySelector('.navbar__menu-button_mobile')

  const classActive = 'menu_active'
  const buttons = [...menuButtons, menuClose];
  buttons.forEach((menuButton) => {
    menuButton.addEventListener('click', () => {
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

  //if size < 569
  function SizeMediumEvent() {
    const btnToggle = () => {
      navbarBtn.classList.toggle('none');
    }

    this.add = () => {
      buttons.forEach((menuButton) => {
        menuButton.addEventListener('click', btnToggle)
      })
    }

    this.remove = () => {
      buttons.forEach((menuButton) => {
        menuButton.removeEventListener('click', btnToggle)
      })
    }
  }
  const sizeMediumEvent = new SizeMediumEvent()

  function SizeSmallEvent() {
    const scrollToggle = () => {
      const offer = document.querySelector('.offer')
      const top = offer.getBoundingClientRect().top

      if ((window.scrollY > top) && (!menuWrap.classList.contains(classActive))) {
        sizeMediumEvent.add();
        navbarBtn.classList.remove('none');
      } else {
        //remove btnToggle in this height value range
        sizeMediumEvent.remove();
        navbarBtn.classList.add('none');
      }
    }

    this.add = () => {
      navbarBtn.classList.add('none')
      window.addEventListener('scroll', scrollToggle)
    }

    this.remove = () => {
      navbarBtn.classList.remove('none')
      window.removeEventListener('scroll', scrollToggle)
    }
  }
  const sizeSmallEvent = new SizeSmallEvent()

  if (window.innerWidth <= 569) {
    sizeMediumEvent.add();
  }
  if (window.innerWidth <= 360) {
    sizeSmallEvent.add();
  }

  (function () {

    window.addEventListener("resize", resizeThrottler, false);

    var resizeTimeout;

    function resizeThrottler() {
      // ignore resize events as long as an actualResizeHandler execution is in the queue
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          resizeTimeout = null;
          actualResizeHandler();

          // The actualResizeHandler will execute at a rate of 15fps
        }, 66);
      }
    }

    function actualResizeHandler() {
      // handle the resize event
      if (window.innerWidth > 360) {
        sizeSmallEvent.remove();
        sizeMediumEvent.add();
      } else {
        sizeSmallEvent.add();
      }
    }

  }());
}

export default menuWrap