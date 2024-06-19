const cardWrapper = document.querySelector('.card-wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function showCard(index) {
  cardWrapper.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cardWrapper.children.length) % cardWrapper.children.length;
  showCard(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cardWrapper.children.length;
  showCard(currentIndex);
});