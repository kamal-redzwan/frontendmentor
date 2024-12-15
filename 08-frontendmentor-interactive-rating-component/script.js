const card = document.querySelector('.card');
const ratings = document.querySelectorAll('.rating');
const submit = document.querySelector('.submit');
const errorMsg = document.querySelector('.errorMsg');

let ratingNum;

ratings.forEach((rating) => {
  // add click event listener to the rating button
  rating.addEventListener('click', function () {
    // remove selected class to the other rating button if they have the class
    ratings.forEach((rating) => rating.classList.remove('selected'));

    // add selected class to the clicked button
    rating.classList.add('selected');

    // add the text content to the variable ratingNum
    ratingNum = rating.textContent;

    submit.disabled = false;
    errorMsg.textContent = '';
  });
});

function thankYou() {
  if (!ratingNum) {
    // disable the button if no rating is selected and show error msg
    submit.disabled = true;
    errorMsg.textContent = 'Please rate us..';
  } else {
    //create thankyou card
    const thankYouCard = `
    <div class="thankyou-card">
      <img class="thankyou-image" src="./images/illustration-thank-you.svg" alt="" />
      <p class="selected-copy">
        You selected <span class="ratingNum">4</span> out of 5
      </p>
      <h2 class="thankyou-heading">Thank you!</h2>
      <p class="thankyou-copy">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
      </div>
  `;
    // render thankyou card
    card.innerHTML = thankYouCard;

    // add ratingNum to the total copy
    const ratingNumTotal = document.querySelector('.ratingNum');
    ratingNumTotal.innerHTML = ratingNum;
  }
}
