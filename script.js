const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

function isDesktop() {
  return window.innerWidth > 900;
}
function activateNav() {
  let currentSection = '';
  let scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (
      isDesktop() &&
      link.getAttribute('href') &&
      link.getAttribute('href').replace('#', '') === currentSection
    ) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', activateNav);

activateNav();

window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.skills-logos .skill-logo').forEach(function(el) {
    el.classList.add('visible');
  });

  const h1 = document.querySelector('.home-text h1');
  const h2 = document.querySelector('.home-text h2');
  if (h1 && h2) {
    const h1Text = h1.textContent;
    const h2Text = h2.textContent;
    function startTypingLoop() {
      typeEffect(h1, h1Text, 70, function() {
        setTimeout(function() {
          typeEffect(h2, h2Text, 40, function() {
            setTimeout(function() {
              startTypingLoop();
            }, 15000);
          });
        }, 600);
      });
    }
    startTypingLoop();
  }

  var menuIcon = document.getElementById('menu-icon');
  var navbar = document.querySelector('ul.navbar');
  if (menuIcon && navbar) {
    menuIcon.addEventListener('click', function() {
      navbar.classList.toggle('open');
    });
    navbar.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navbar.classList.remove('open');
      });
    });
  }
});

function typeEffect(element, text, speed = 45, callback) {
  element.textContent = '';
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if (callback) {
      callback();
    }
  }
  typing();
}

