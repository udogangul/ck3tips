async function fetchTips() {
  const res = await fetch('/api/tips');
  const tips = await res.json();
  return tips;
}

function getMedievalEmoji(index) {
  // A selection of medieval/relevant emojis
  const emojis = [
    '⚔️', // Crossed swords
    '🛡️', // Shield
    '👑', // Crown
    '🏰', // Castle
    '🦁', // Lion
    '🕊️', // Dove
    '🧙‍♂️', // Wizard
    '🦅', // Eagle
    '🗡️', // Dagger
    '📜', // Scroll
    '⚜️', // Fleur-de-lis
    '🪶', // Feather
    '🧭', // Compass
    '🪓', // Axe
    '🦄', // Unicorn
    '🧝‍♂️', // Elf
    '🧚‍♀️', // Fairy
    '🦢', // Swan
    '🦌', // Deer
    '🦇', // Bat
  ];
  return emojis[index % emojis.length];
}

function renderTips(tips) {
  const container = document.getElementById('tips-container');
  container.innerHTML = '';
  tips.forEach((tip, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    // Add emoji and center text
    card.innerHTML = `<span class="emoji">${getMedievalEmoji(i)}</span><span class="tip-text">${tip}</span>`;
    container.appendChild(card);
  });
}

document.getElementById('refresh-btn').addEventListener('click', async () => {
  const tips = await fetchTips();
  renderTips(tips);
});

// Initial load
fetchTips().then(renderTips);
