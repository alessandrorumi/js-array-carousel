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
    
  } else if (activeItem === items.length - 1) {
    
    // Rimozione Classe 'active'
    items[activeItem].classList.remove('active');
    
    // Vai al primo elemento
    activeItem = 0;

    // Aggiunta Classe 'active'
    items[activeItem].classList.add('active');
    
  }

});

// Al click di Arrow Up
arrowUp.addEventListener('click', function() {
  
  // Rimozione Classe 'active'
  items[activeItem].classList.remove('active');

  // Se è all'inizio dell'array
  if (activeItem === 0) {

    // Vai all'ultimo elemento
    activeItem = items.length - 1;

    // Aggiunta Classe 'active'
    items[activeItem].classList.add('active');

  } else {

    // Decremento
    activeItem--;

    // Aggiunta Classe 'active'
    items[activeItem].classList.add('active');

  }
 
});
