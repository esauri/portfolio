function Projects () {
  let currentProjectSlide,
      projectSlideshow,
      projectSlideNav,
      projectSlides,
      prevProjectBtn,
      nextProjectBtn,
      autoRun;

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
  prevProjectBtn = document.getElementsByClassName('project-slideshow-up-arrow')[0];

  // Get the next project button
  nextProjectBtn = document.getElementsByClassName('project-slideshow-down-arrow')[0];

  // Add click event listener
  prevProjectBtn.addEventListener('click', function (event) {
    previousProject(projectSlides, currentProjectSlide, projectSlideNav);
    clearInterval(autoRun);
  });

  // Add click event listener
  nextProjectBtn.addEventListener('click', function (event) {
    nextProject(projectSlides, currentProjectSlide, projectSlideNav);
    clearInterval(autoRun);
  });

  // Every 5 seconds switch to next slide
  autoRun = setInterval(function () { nextProject(projectSlides, currentProjectSlide, projectSlideNav); }, PROJECT_TIMER);
  
  projectSlideNav.forEach(function(nav) {
    let newIndex = parseInt(nav.innerHTML) + 1;

    nav.innerHTML = newIndex;

    nav.addEventListener('click', changeProject);
  });

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
  }
}



export {Projects};