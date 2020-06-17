/* eslint-disable no-restricted-syntax */

const cards = document.querySelectorAll('.card');

// DOM é a modelagem do HTML em objetos...
for (const card of cards) {
  card.addEventListener('click', () => {
    const videoId = card.getAttribute('id');
    window.location.href = `/video?id=${videoId}`;
  });
}
