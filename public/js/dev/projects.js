function Projects () {
  let currentProjectSlide,
      projectSlideshow,
      projectSlideNav,
      projectSlides,
      prevProjectBtn,
      nextProjectBtn,
      resumeProjectBtn,
      carouselTip,
      autoRun,
      positionX,
      positionY,
      SCROLL_THRESHOLD = 60,
      scrolling = false;

  const PROJECT_TIMER = 5000;
  // Get the slide show
  projectSlideshow = document.getElementsByClassName('project-carousel')[0];

  // Get the slides
  projectSlides = Array.from(projectSlideshow.getElementsByClassName('project-slide'));

  // Get the current visible
  currentProjectSlide = projectSlideshow.getElementsByClassName('visible')[0];

  // Get the projects nav
  projectSlideNav = Array.from(document.getElementsByClassName('project-carousel-btn'));

  // Get the previous project button
  prevProjectBtn = document.getElementsByClassName('js-projects-prev-btn')[0];

  // Get the next project button
  nextProjectBtn = document.getElementsByClassName('js-projects-next-btn')[0];

  // Get the resume project button
  resumeProjectBtn = document.getElementsByClassName('js-projects-resume-btn')[0];

  // Get the carousel tips
  carouselTip = document.getElementById('project-carousel-tip');

  // Every 5 seconds switch to next slide
  autoRun = setInterval(function () { nextProject(projectSlides, currentProjectSlide, projectSlideNav); }, PROJECT_TIMER);
  
  // Loop through the nav
  projectSlideNav.forEach(function(nav) {
    let newIndex = parseInt(nav.innerHTML) + 1;

    nav.innerHTML = newIndex;

    nav.addEventListener('click', changeProject);
  });

  // Add click event listener
  prevProjectBtn.addEventListener('click', prevBtnEvent);

  // Add click event listener
  nextProjectBtn.addEventListener('click', nextBtnEvent);

  // Add click event listener
  resumeProjectBtn.addEventListener('click', function (event) {
    resumeProjectBtn.classList.remove('visible');
    nextProject(projectSlides, currentProjectSlide, projectSlideNav);
    autoRun = setInterval(function () { nextProject(projectSlides, currentProjectSlide, projectSlideNav); }, PROJECT_TIMER);
  });

  // Add keyboard event listener
  window.addEventListener('keydown', keydownEvent);

  // Add event for mouse wheel
  window.addEventListener('wheel', updateOnScroll);

  // Add event for touch starting
  window.addEventListener('touchstart', touchStartEvent);

  // Add event for touch moving
  window.addEventListener('touchmove', touchMoveEvent);

  function efficientFunction (event) {
    debounce(updateOnScroll, 250);
  }

  // let efficientFunction = debounce(function (event) {
  //   updateOnScroll(event);
  // }, 250);

  /**
   * @param  {} event
   */
  function touchStartEvent (event) {
    positionX = event.touches[0].clientX;
    positionY = event.touches[0].clientY;
  }

  /**
   * @param  {} event
   */
  function touchMoveEvent (event) {
    event.preventDefault();

    if (!positionX || !positionY) {
      return;
    }

    let newX = event.touches[0].clientX,
        newY = event.touches[0].clientY;

    let diffX = positionX - newX,
        diffY = positionY - newY;
    
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        // Left swipe
        prevBtnEvent(event);
      }
      else {
        // Right swipe
        nextBtnEvent(event);
      }
    }
    else {
      if (diffY > 0) {
        // Up swipe
        prevBtnEvent(event);
      }
      else {
        // Down swipe
        nextBtnEvent(event);
      }
    }

    positionX = positionY = null;
  }

  function updateOnScroll (event) {
    event.preventDefault();
    window.removeEventListener('scroll', updateOnScroll);

    if (!scrolling) {
      scrolling = true;
      (!window.requestAnimationFrame) ? scrollHijack(event) : window.requestAnimationFrame(function () { scrollHijack (event); });
    }
  }

  function scrollHijack (event) {
    let delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail))),
        pattern = /mac/,
        platform = navigator.platform;

    
    if (pattern.test(platform)) {
      if (delta > 0) {
        nextBtnEvent(event);
      }
      else {
        prevBtnEvent(event);
      }
    }
    else {
      if (delta > 0) {
        prevBtnEvent(event);
      }
      else {
        nextBtnEvent(event);
      }
    }

    
    scrolling = false;
    return false;
  }

  function keydownEvent (event) {
    if (event.which === 37 || event.which === 38) {
      prevBtnEvent(event);
    }
    else if (event.which === 39 || event.which === 40) {
      nextBtnEvent(event);
    }
  }

  function prevBtnEvent (event) {
    previousProject(projectSlides, currentProjectSlide, projectSlideNav);
    clearInterval(autoRun);
    carouselTip.classList.add('hide');
    resumeProjectBtn.classList.add('visible');
  }

  function nextBtnEvent (event) {
    nextProject(projectSlides, currentProjectSlide, projectSlideNav);
    carouselTip.classList.add('hide');
    clearInterval(autoRun);
    resumeProjectBtn.classList.add('visible');
  }

  function previousProject (slides, currentSlide, slideNav) {
    let newSlide,
        currentNav,
        newNav,
        currentSlideIndex = slides.indexOf(currentSlide);
    
    // Set the current nav item to the parent node using currentSlideIndex
    currentNav = slideNav[currentSlideIndex].parentNode;

    if (currentSlideIndex === 0) {
      newSlide = slides[slides.length - 1];
      newNav = slideNav[slides.length - 1].parentNode;
    }
    else {
      newSlide = slides[currentSlideIndex - 1];
      newNav = slideNav[currentSlideIndex - 1].parentNode;
    }
    
    currentNav.classList.remove('current');
    currentSlide.classList.remove('visible');
    currentSlide.setAttribute('aria-hidden', 'true');
    newNav.classList.add('current');
    newSlide.classList.add('visible');
    newSlide.setAttribute('aria-hidden', 'false');
    currentProjectSlide = newSlide;
  }

  function nextProject (slides, currentSlide, slideNav) {
    let newSlide,
        currentNav,
        newNav,
        currentSlideIndex = slides.indexOf(currentSlide);
    
    // Set the current nav item to the parent node using currentSlideIndex
    currentNav = slideNav[currentSlideIndex].parentNode;

    if (currentSlideIndex < (slides.length - 1)) {
      newSlide = slides[currentSlideIndex + 1];
      newNav = slideNav[currentSlideIndex + 1].parentNode;
    }
    else {
      newSlide = slides[0];
      newNav = slideNav[0].parentNode;
    }
    
    currentNav.classList.remove('current');
    currentSlide.classList.remove('visible');
    currentSlide.setAttribute('aria-hidden', 'true');
    newNav.classList.add('current');
    newSlide.classList.add('visible');
    newSlide.setAttribute('aria-hidden', 'false');
    currentProjectSlide = newSlide;
  }

  function changeProject (event) {
    let newSlide,
        index = parseInt(event.target.innerHTML) - 1,
        currentSlideIndex = projectSlides.indexOf(currentProjectSlide);

    currentProjectSlide.classList.remove('visible');
    currentProjectSlide.setAttribute('aria-hidden', 'true');
    projectSlideNav[currentSlideIndex].parentNode.classList.remove('current');
    newSlide = projectSlides[index];
    newSlide.classList.add('visible');
    newSlide.setAttribute('aria-hidden', 'false');
    event.target.parentNode.classList.add('current');
    currentProjectSlide = newSlide;
    clearInterval(autoRun);
    resumeProjectBtn.classList.add('visible');
  }

  // https://davidwalsh.name/essential-javascript-functions
  // function debounce (func, waitTime, immediate) {
  //   let timeout;
  //   console.log('called deb');
  //   debugger;
  //   return function () {
  //     let context = this,
  //         args = arguments;
      
  //     let later = function () {
  //       timeout = null;
  //       if (!immediate) func.apply(context, args);
  //     };

  //     let callNow = immediate && !timeout;

  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, waitTime);
  //     if (callNow) func.apply(context, args);
  //   };
  // };

  var debounce = function (func, wait) {
    // Variables
    var timeout, args, context, timestamp;
    console.log('debound v2 called');
    return function() {
      debugger;
      console.log('return');
      // Save details of last call
      context = this;
      args = [].slice.call(arguments, 0);
      timestamp = new Date();

      // Magic happens here
      var later = function () {
        // How long ago was the last call
        var last = (new Date()) - timestamp;
        console.log('Last: ' + last);
        // If the latest call was less than the wait period
        if (last < wait) {
          // Then we reset the timeout to wait for the difference
          timeout = setTimeout(later, wait - last);
        } else {
          // Or if not we can null out the time and run the latest
          timeout = null;
          func.apply(context, args);
        }
      };

      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
    }
  };
}

export {Projects};