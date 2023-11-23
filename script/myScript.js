// Dichiarazione .item
const items = document.getElementsByClassName('item');
console.log(items);

let activeItem = 0;

// Dichiarazione Arrow Down
const arrowDown = document.querySelector('.next');

// Dichiarazione Arrow Up
const arrowUp = document.querySelector('.previous');

// Al click di Arrow Down
arrowDown.addEventListener('click', function() {

  if (activeItem < items.length - 1) {

    items[activeItem].classList.remove('active');

    activeItem++;

    items[activeItem].classList.add('active');

  }

    if (activeItem === items.length - 1) {

      arrowDown.classList.add('hidden');

    }

});