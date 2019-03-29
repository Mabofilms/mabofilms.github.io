var parallax = {
    '#hero-vid': {
      factor: 0.2
    },
    '#logo-wrapper': {
      factor: 0.4
    },
    '#fifth': {
      factor: 0
    }
  };
  
  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY;
  var rAFScheduled = false;

  // Gather offset data
Object.keys(parallax).forEach(function(id) {
    parallax[id].element = document.querySelector(id).querySelector('.background');
    parallax[id].initialTop = parallax[id].element.getBoundingClientRect().top + window.scrollY;
  });
  
  window.addEventListener('scroll', function() {
    scrollY = window.scrollY;
    if(!rAFScheduled) {
      rADScheduled = true;
      requestAnimationFrame(updateParallaxImages);
    }
  });
  
  window.addEventListener('resize', function() {
    windowHeight = window.innerHeight;
  });

  function updateParallaxImages() {
    Object.keys(parallax).forEach(function(id) {
      // This offset alone would emulate fixed positioning
      var offset = -parallax[id].initialTop + scrollY;
  
      // If the top border of the container is on the bottom
      // border of the screen: scroll = 0
      // Of the bottom border of the container is on the top
      // border of the screen: scroll = 1
      var scroll = (scrollY - parallax[id].initialTop + windowHeight)/(2*windowHeight);
      offset -= (1-scroll)*windowHeight*parallax[id].factor;
      parallax[id].element.style.transform = 'translateY(' + Math.round(offset) + 'px)';
    });
  }