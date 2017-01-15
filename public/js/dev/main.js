import {Projects} from './projects';

(function() {
	'use strict';

  let openSidebarBtn = document.getElementById('open-menu-btn'),
      closeSidebarBtn = document.getElementById('close-menu-btn'),
      sidebar = document.querySelector('.nav-global');
  
  openSidebarBtn.addEventListener('click', openSidebar);
  closeSidebarBtn.addEventListener('click', closeSidebar);

  function openSidebar (event) {
    sidebar.classList.add('open');
  }

  function closeSidebar (event) {
    sidebar.classList.remove('open');
  }

  // If work page
  if (document.getElementsByClassName('project-slideshow').length > 0) {
    Projects();
  }

}());