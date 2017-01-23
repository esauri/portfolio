function Gallery (gallery) {
  let slides = Array.from(gallery.getElementsByClassName('gallery-item')),
      nav = Array.from(gallery.getElementsByClassName('js-gallery-dot')),
      currentSlide = gallery.querySelector('.gallery-item.active'),
      currentNav = gallery.querySelector('.js-gallery-dot.current');
  
  let previousBtn,
      nextBtn;

  if (gallery.getElementsByClassName('js-gallery-prev').length > 0) {
    previousBtn = gallery.getElementsByClassName('js-gallery-prev')[0];
  }

  if (gallery.getElementsByClassName('js-gallery-next').length > 0) {
    nextBtn = gallery.getElementsByClassName('js-gallery-next')[0];
  }

  if (previousBtn) {
    previousBtn.addEventListener('click', prevSlide);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
  }

  nav.forEach(function (dot) {
    dot.addEventListener('click', changeSlide);
  });

  function prevSlide (event) {
    let newSlide,
        newNav,
        currentIndex = slides.indexOf(currentSlide);
    
    if (currentIndex === 0) {
      newSlide = slides[slides.length - 1];
      newNav = nav[nav.length - 1];
    }
    else {
      newSlide = slides[currentIndex - 1];
      newNav = nav[currentIndex - 1];
    }

    currentNav.classList.remove('current');
    currentSlide.classList.remove('active');
    currentSlide.setAttribute('aria-hidden', 'true');
    newNav.classList.add('current');
    newSlide.classList.add('active');
    newSlide.setAttribute('aria-hidden', 'false');
    currentNav = newNav;
    currentSlide = newSlide;
  }

  function nextSlide (event) {
    let newSlide,
        newNav,
        currentIndex = slides.indexOf(currentSlide);
    
    if (currentIndex < (slides.length - 1)) {
      newSlide = slides[currentIndex + 1];
      newNav = nav[currentIndex + 1];
    }
    else {
      newSlide = slides[0];
      newNav = nav[0];
    }

    currentNav.classList.remove('current');
    currentSlide.classList.remove('active');
    currentSlide.setAttribute('aria-hidden', 'true');
    newNav.classList.add('current');
    newSlide.classList.add('active');
    newSlide.setAttribute('aria-hidden', 'false');
    currentNav = newNav;
    currentSlide = newSlide;
  }

  function changeSlide (event) {
    let newSlide,
        newNav,
        currentIndex = nav.indexOf(event.target);
    
    newNav = nav[currentIndex];
    newSlide = slides[currentIndex];

    currentNav.classList.remove('current');
    currentSlide.classList.remove('active');
    currentSlide.setAttribute('aria-hidden', 'true');
    newNav.classList.add('current');
    newSlide.classList.add('active');
    newSlide.setAttribute('aria-hidden', 'false');
    currentNav = newNav;
    currentSlide = newSlide;
  }
}

export {Gallery};