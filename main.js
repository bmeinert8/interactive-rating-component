const submitButton = document.querySelector('.js-submit-btn');
const thankYouElement = document.querySelector('.js-thank-you-content');
const cardElement = document.querySelector('.js-card-content');
const ratingElements = document.querySelectorAll('.js-rating-button');
const ratingValue = document.querySelector('.review-value');

// Event Listener for rating buttons
ratingElements.forEach((button) => {
  button.addEventListener('click', (event) => {
    ratingElements.forEach((btn) => btn.classList.remove('active'));
    event.target.classList.add('active');
    return;
  });
});

// Submit button event listener
submitButton.addEventListener('click', () => {
  // Check if a rating is selected to proceed to thank you page
  const selectedRating = document.querySelector('.js-rating-button.active');
  if (!selectedRating) {
    return;
  } else {
    cardElement.classList.add('hidden');
    thankYouElement.classList.remove('hidden');
    ratingValue.textContent = selectedRating.getAttribute('value');
  }
});
