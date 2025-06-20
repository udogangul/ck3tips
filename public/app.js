async function fetchTips() {
  const res = await fetch('/api/tips');
  const tips = await res.json();
  return tips;
}

function renderTips(tips) {
  const container = document.getElementById('tips-container');
  container.innerHTML = '';
  tips.forEach(tip => {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = tip;
    container.appendChild(card);
  });
}

document.getElementById('refresh-btn').addEventListener('click', async () => {
  const tips = await fetchTips();
  renderTips(tips);
});

// Initial load
fetchTips().then(renderTips);
