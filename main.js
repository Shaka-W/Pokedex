const cards = document.querySelector('.cards');

function displayPokemon() {
  for (let i = 1; i < 151; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`, {mode: 'cors'})
    .then(response => response.json())
    .then(response => {
      let card = document.createElement('div');
      card.classList.add('card');
      let imageContainer = document.createElement('div');
      imageContainer.classList.add('image-container');
      let image = document.createElement('img');
      let heading = document.createElement('h2');
      let para = document.createElement('p');
      para.classList.add('number');
      let para2 = document.createElement('p');

      image.src = `https://pokeres.bastionbot.org/images/pokemon/${i}.png`;

      if (response.id < 10) {
        para.textContent = `#00${response.id}`;
      } else if (response.id >= 10 && response.id < 100) {
        para.textContent = `#0${response.id}`;
      } else {
        para.textContent = `#${response.id}`;
      }
   
      heading.textContent = response.name;
      para2.textContent = `Type: ${response.types[0]['type']['name']}`;

      if (para2.textContent.includes('grass')) {
        card.style.backgroundColor = '#90ee90';
      } else if (para2.textContent.includes('fire')) {
        card.style.backgroundColor = '#ffcccb';
      } else if (para2.textContent.includes('water')) {
        card.style.backgroundColor = '#add8e6';
      } else if (para2.textContent.includes('bug')) {
        card.style.backgroundColor = '#D2B48C';
      } else if (para2.textContent.includes('normal')) {
        card.style.backgroundColor = '#f2f2f2';
      } else if (para2.textContent.includes('electric')) {
        card.style.backgroundColor = '#ffffe0';
      } else if (para2.textContent.includes('poison')) {
        card.style.backgroundColor = '#b19cd9';
      } else if (para2.textContent.includes('rock')) {
        card.style.backgroundColor = '#D3D3D3';
      } else if (para2.textContent.includes('psychic')) {
        card.style.backgroundColor = '#FFFF66';
      } else if (para2.textContent.includes('ice')) {
        card.style.backgroundColor = '#addde6';
      } else if (para2.textContent.includes('dragon')) {
        card.style.backgroundColor = '#ac9cd9';
      }

      imageContainer.appendChild(image);
      card.appendChild(imageContainer);
      card.appendChild(para);
      card.appendChild(heading);
      card.appendChild(para2);
      cards.appendChild(card);
    }).catch(error => {
      console.error(error);
    });
  }
}

window.addEventListener('load', displayPokemon);