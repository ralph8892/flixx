const global = {
  currentPage: window.location.pathname,
};

// Hightlight Active Link
function highlightActiveLink () {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  })
}

// Initialize App
function init () {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      console.log('Home');
      break;
    case '/shows.html':
      console.log('Shows');
      break;
    case '/movie-details.html':
      console.log('Movie Details');
      break;
    case '/tv-details.html':
      console.log('TV Details');
      break;
    case '/search.html':
      console.log('Search Box....');
      break;
  }

  highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);