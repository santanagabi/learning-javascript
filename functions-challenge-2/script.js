'use strict';

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

// document.querySelector('body').addEventListener('click', function () {
//   const body = document.querySelector('body');
//   body.style.background = 'blue';
// });
