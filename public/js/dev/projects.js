function Projects () {
  let currentProjectSlide,
      projectSlideshow,
      projectSlideNav,
      projectSlides,
      prevProjectBtn,
      nextProjectBtn,
      resumeProjectBtn,
      autoRun,
      SCROLL_THRESHOLD = 60,
      scrolling = false;

  const PROJECT_TIMER = 5000;
  // Get the slide show
  projectSlideshow = document.getElementsByClassName('project-slideshow')[0];

  // Get the slides
  projectSlides = Array.from(projectSlideshow.getElementsByClassName('project-slide'));

  // Get the current visible
  currentProjectSlide = projectSlideshow.getElementsByClassName('visible')[0];

  // Get the projects nav
  projectSlideNav = Array.from(document.getElementsByClassName('project-slideshow-btn'));

  // Get the previous project button
  prevProjectBtn = document.getElementsByClassName('js-projects-prev-btn')[0];

  // Get the next project button
  nextProjectBtn = document.getElementsByClassName('js-projects-next-btn')[0];

  // Get the resume project button
  resumeProjectBtn = document.getElementsByClassName('js-projects-resume-btn')[0];

  // Every 5 seconds switch to next slide
  autoRun = setInterval(function () { nextProject(projectSlides, currentProjectSlide, projectSlideNav); }, PROJECT_TIMER);
  
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

  window.addEventListener('wheel', updateOnScroll);

  function updateOnScroll (event) {
    console.log('Called');
    event.preventDefault();

    window.removeEventListener('scroll', updateOnScroll);

    if (!scrolling) {
      scrolling = true;
      (!window.requestAnimationFrame) ? scrollHijack(event) : window.requestAnimationFrame(function () { scrollHijack (event); });
    }
  }

  function scrollHijack (event) {
    let delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

    if (delta > 0) {
      nextBtnEvent(event);
    }
    else {
      prevBtnEvent(event);
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
    resumeProjectBtn.classList.add('visible');
  }

  function nextBtnEvent (event) {
    nextProject(projectSlides, currentProjectSlide, projectSlideNav);
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
    newNav.classList.add('current');
    newSlide.classList.add('visible');
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
    newNav.classList.add('current');
    newSlide.classList.add('visible');
    currentProjectSlide = newSlide;
  }

  function changeProject (event) {
    let newSlide,
        index = parseInt(event.target.innerHTML) - 1,
        currentSlideIndex = projectSlides.indexOf(currentProjectSlide);

    currentProjectSlide.classList.remove('visible');
    projectSlideNav[currentSlideIndex].parentNode.classList.remove('current');
    newSlide = projectSlides[index];
    newSlide.classList.add('visible');
    event.target.parentNode.classList.add('current');
    currentProjectSlide = newSlide;
    clearInterval(autoRun);
    resumeProjectBtn.classList.add('visible');
  }
}



export {Projects};