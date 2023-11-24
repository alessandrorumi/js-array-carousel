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

});

// Al click di Arrow Up
arrowUp.addEventListener('click', function() {
  // Rimozione Classe 'active'
  items[activeItem].classList.remove('active');

  activeItem--;

  // Aggiunta Classe 'active'
  items[activeItem].classList.add('active');

  if (activeItem === 0) {
    // Aggiunta Classe 'hidden'
    arrowUp.classList.add('hidden');
  }

});
