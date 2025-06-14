const submitButton = document.querySelector('.js-submit-btn');
const thankYouElement = document.querySelector('.js-thank-you-content');
const cardElement = document.querySelector('.js-card-content');

submitButton.addEventListener('click', () => {
  cardElement.classList.add('hidden');
  thankYouElement.classList.remove('hidden');
});
