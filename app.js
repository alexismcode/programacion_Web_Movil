const API_URL = 'https://api.sampleapis.com/futurama/characters';

async function fetchCharacters() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    renderCharacters(data);
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
}

function renderCharacters(characters) {
  const characterSection = document.getElementById('characters');
  characterSection.innerHTML = '';

  characters.forEach(character => {
    const characterCard = document.createElement('div');
    characterCard.className = 'character-card';

    const characterImage = document.createElement('img');
    characterImage.src = character.images.main;
    characterImage.alt = `${character.name.first} ${character.name.last}`;

    const characterName = document.createElement('div');
    characterName.className = 'character-name';
    characterName.textContent = `${character.name.first} ${character.name.last}`;

    characterCard.appendChild(characterImage);
    characterCard.appendChild(characterName);
    characterSection.appendChild(characterCard);
  });
}

fetchCharacters();
