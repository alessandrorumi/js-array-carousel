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

  } // else if??

  // PERCHè NON ELSE IF CON activeItem < items.length - 2? PERCHE VERIFICARE ENTRAMBE? SE ACTIVEITEM è O < 0 O ===?

    // Se è alla fine dell'array
    if (activeItem === items.length - 1) {
      // Aggiunta Classe 'hidden'
      arrowDown.classList.add('hidden');
    }

    // Al click di arrowDown se activeItem è !== 0
    if (activeItem !== 0) {
      // Rimozione Classe 'hidden'
      arrowUp.classList.remove('hidden');
    }

});

// ArrowUp hidden
arrowUp.classList.add('hidden');

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

  // Al click di arrowUp se activeItem !== items.length - 1
  if (activeItem !== items.length - 1) {
    // Rimozione Classe 'hidden'
    arrowDown.classList.remove('hidden');  
  }

});
