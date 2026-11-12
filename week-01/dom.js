let cardCount = 3;
const btn = document.getElementById('add-card');
const box = document.getElementById('skill-box');
btn.addEventListener('click', () => {
  const card = document.createElement('div');
  card.textContent = 'JavaScript';
  box.appendChild(card);
  cardCount++;
  console.log('卡片数：', cardCount);
});
