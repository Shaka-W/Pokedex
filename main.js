const cards = document.querySelector('.cards');

function createPokemonCard() {
  let card = document.createElement('div');
  card.classList.add('card');
  
  return card;
}

function createPokemonImage(id) {
  let image = document.createElement('img');
  image.src = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

  return image;
}

function createPokemonNumber() {
  let number = document.createElement('p');
  number.classList.add('number');

  return number;
}

function createPokemonName() {
  let pokemon = document.createElement('h2');
  return pokemon;
}

function createPokemonType() {
  let type = document.createElement('p');
  return type;
}

function changePokemonCardBg(pokemonCard, type) {
  if (type.textContent.includes('grass')) {
    pokemonCard.style.backgroundColor = '#90ee90';
  } else if (type.textContent.includes('fire')) {
    pokemonCard.style.backgroundColor = '#ffcccb';
  } else if (type.textContent.includes('water')) {
    pokemonCard.style.backgroundColor = '#add8e6';
  } else if (type.textContent.includes('bug')) {
    pokemonCard.style.backgroundColor = '#D2B48C';
  } else if (type.textContent.includes('normal')) {
    pokemonCard.style.backgroundColor = '#f2f2f2';
  } else if (type.textContent.includes('electric')) {
    pokemonCard.style.backgroundColor = '#ffffe0';
  } else if (type.textContent.includes('poison')) {
    pokemonCard.style.backgroundColor = '#b19cd9';
  } else if (type.textContent.includes('rock')) {
    pokemonCard.style.backgroundColor = '#D3D3D3';
  } else if (type.textContent.includes('psychic')) {
    pokemonCard.style.backgroundColor = '#FFFF66';
  } else if (type.textContent.includes('ice')) {
    pokemonCard.style.backgroundColor = '#addde6';
  } else if (type.textContent.includes('dragon')) {
    pokemonCard.style.backgroundColor = '#ac9cd9';
  }

  return pokemonCard;
}

function checkPokemonId(pokemonNumber, responseId) {
  if (responseId < 10) {
    pokemonNumber.textContent = `#00${responseId}`;
    } else if (pokemonNumber >= 10 && pokemonNumber < 100) {
      pokemonNumber.textContent = `#0${responseId}`;
    } else {
      pokemonNumber.textContent = `#${responseId}`;
    }

  return pokemonNumber;
}

function displayPokemon() { 
  for (let i = 1; i < 151; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`, {mode: 'cors'})
    .then(response => response.json())
    .then(response => {
      let pokemonCard = createPokemonCard();
      let pokemonImage = createPokemonImage(i);
      let pokemonNumber = createPokemonNumber();
      let pokemonName = createPokemonName();
      let pokemonType = createPokemonType();
      
      pokemonNumber = checkPokemonId(pokemonNumber, response.id);
      pokemonName.textContent = response.name;
      pokemonType.textContent = `Type: ${response.types[0]['type']['name']}`;

      pokemonCard = changePokemonCardBg(pokemonCard, pokemonType);
      pokemonCard.appendChild(pokemonImage);
      pokemonCard.appendChild(pokemonNumber);
      pokemonCard.appendChild(pokemonName);
      pokemonCard.appendChild(pokemonType);

      cards.appendChild(pokemonCard);
    }).catch(error => {
      console.error(error);
    });
  }
}

window.addEventListener('load', displayPokemon);