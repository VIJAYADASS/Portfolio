function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

   
function openInNewTab(url) { // when a user click the URL path and will open a new tab.
  var win = window.open(url, '_blank');
  win.focus();
  } 