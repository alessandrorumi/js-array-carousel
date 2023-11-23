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
    // Rimozione Classe 'active'
    items[activeItem].classList.remove('active');

    activeItem++;
    // Aggiunta Classe 'active'
    items[activeItem].classList.add('active');

  }
    // Se è alla fine dell'array
    if (activeItem === items.length - 1) {
      // Aggiunta Classe 'hidden'
      arrowDown.classList.add('hidden');
    }

    // Al click di arrowDown se arrowUp è !== 0
    arrowUp.classList.remove('hidden');

});

// ArrowUp hidden
arrowUp.classList.add('hidden');

// Al click di Arrow Up
arrowUp.addEventListener('click', function() {
  // Rimozione Classe 'active'
  items[activeItem].classList.remove('active');

  activeItem--;

  if (activeItem >= 0) {
    // Aggiunta Classe 'active'
    items[activeItem].classList.add('active');
  }

  if (activeItem === 0) {
    arrowUp.classList.add('hidden');
  }

  // Al click di arrowUp se activeItem !== items.length - 1
  arrowDown.classList.remove('hidden');

});
