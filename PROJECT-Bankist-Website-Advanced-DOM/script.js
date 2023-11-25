'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// Button learn more
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
// Nav links + logo
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button scrolling - learn more
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );

  // Scrolling
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////////////////////////////////////
// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Event delegation
// 1. Add event listener to common parent element
// 2. Determinate what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching stategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/////////////////////////////////////////////////
// 186. Selecting, creating and deleting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// // console.log(allSections);

// document.getElementById('sections--1');
// const allButtons = document.getElementsByTagName('button');
// // console.log(allButtons);

// // console.log(document.getElementsByClassName('btn'));

// // Creating and inseting elements
// // .insertAdjacentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved funcionality and analytics.';
// message.innerHTML =
//   'We use cookied for improved funcionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // Inseting the element into the DOM
// // header.prepend(message); // (first child)
// header.append(message); // (last child)
// // header.append(message.cloneNode(true));
// // header.before(message);
// // header.after(message);

// // Delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// /////////////////////////////////////////////////////////////////////
// // 187. styles, attributes and classes

// // styles
// message.style.backgroundColor = '#37282d';
// message.style.width = '120%';

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// // increasing cookie message height
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// // setproperty
// document.documentElement.style.setProperty('--color-primary', 'red');

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);

// logo.alt = 'Beaultifulll';
// console.log(logo.alt);

// // non-standard
// console.log(logo.getAttribute('dev'));
// // create a new attribute
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // data attributes
// // strore data ih UI/html
// console.log(logo.dataset.versionNumber);

// // Classes
// // logo.classList.add();
// // logo.classList.remove();
// // logo.classList.toggle();
// // logo.classList.contains(); // not includes

////////////////////////////////////////////////////////////////////////
// 188. implementing smooth scrolling

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

//   window.scrollTo(
//     s1coords.left + window.pageXOffset,
//     s1coords.top + window.pageYOffset
//   );

//   // Scrolling
//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   section1.scrollIntoView({ behavior: 'smooth' });
// });

////////////////////////////////////////////////////////
// 189. types of events and event handlers

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading : D');
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading : ))');
// };

//////////////////////////////////////////////////////////////
// 191. event propagation: bubbling and capturing

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // Stop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

///////////////////////////////////////////////////////////////////////////////
// 194. Building a Tabbed Component

// // Adding an event for each button
// tabs.forEach(t => t.addEventListener('click', () => {
//   console.log('TAB');
// }))

// Using event delegation
// We should attach the event handler on the common parent element of the elements we are interested in
// using closest

tabsContainer.addEventListener('click', function (e) {
  // const clicked = e.target.parentElement;
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  if (!clicked) return;

  // Remove active classes
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(tab =>
    tab.classList.remove('operations__content--active')
  );

  // Activate tab
  // Guard clause
  clicked.classList.add('operations__tab--active');

  // Activate content area
  // console.log('clicked.dataset.tab', clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 195. Passing Arguments to Event Handlers

// When hovering over one of the links, the rest disappears

// Menu fade animation
const handleHover = function (e, opacity) {
  // console.log(this, e.currentTarget);
  // e.currentTarget = points to exact html element that is triggering the event

  if (e.target.classList.contains('nav__link')) {
    const link = e.target; // `e.target` = HTML element where the "mouseover" ocurred, for example, `<a> </a>`
    // console.log(e.target)

    // selecting all other links
    //  i go to the parent ---> link.closest('.nav') and select all children ---> .querySelector('.nav__link')
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el != link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
// The term "mouseover" is similar to "mouseenter," but "mouseenter" does not bubble
// mouseover ---> mouseout
// bind(): returns a new function and has the value of "this" inside
nav.addEventListener('mouseover', handleHover.bind(0.5));

// undoing the "mouseouver"
nav.addEventListener('mouseout', handleHover.bind(1));

///////////////////////////////////////////////////////////////////////////////
// 196. Implementing a Sticky Navigation: The Scroll Event
// getBoundingClientRect() => gets the position and size of an element on the pagem within the window

// const initialCoords = section1.getBoundingClientRect();
// // console.log('initialCoords', initialCoords);

// window.addEventListener('scroll', function () {
//   // console.log(window.scrollY);

//   // scrolling affects the page`s performance negatively (mobile)
//   if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

////////////////////////////////////////////////////////////////////////////////////////////////////
// 197. A Better Way: The Intersection Observer API

// allows observing changes in how a target element captures another element or the viewport
// Sticky navigation: Intersection Observer API

// it will be called by the IntersectionObserver whenever section1 enters or exits the viewport
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry)
//     // intersectionRatio
//   })
// };

// const obsOptions = {
//   root : null, // the target in this case will check if section1 enters and exits the browser's screen
//   threshold: [0, 0.2]  // the percentage of visibility that an element should be on the screen before triggering an action (e.g., 0.1 = 10%)
// };

// // IntersectionObserver() -> it allows tracking when an HTML element enters or exits the visible area of the browser window
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries; // using destructuring, extract the first element from 'entries' and store it in the 'entry' variable as 'entries[0]'

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, // 90px that will be applied outside of our element, in this case, the header
});

headerObserver.observe(header);

//  Reveal sections
const allSections = document.querySelectorAll('.section');

const revelSection = function (entries, observer) {
  const [entry] = entries;

  // podemos usar target para descobrir qual a section exata que aparece no viewport
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revelSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // TODO: comentei aqui
  // section.classList.add('section--hidden');
});

//////////////////////////////////////////////////////////////////////////////////////////////////
// 199. Lazy Loading Images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  // Substituir src pelo data-src
  entry.target.src = entry.target.dataset.src;

  // Evento de carregamento = load
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 200. Building a Slider Component: Part 1

// Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
const maxSlide = slides.length;

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible';

// slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
//  0%. 100%, 200%, 300%

// a função aceita um parâmetro slide, portanto ao chamar a função deve ser fornecido o valor de slide
const goToSlide = function (slide) {
  slides.forEach(
    // função de callback
    // s = slide no array de slides e i = indice do slide em relação ao slide alvo
    // translateX calcula a translação horizontal para cada slide
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);

// Next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
