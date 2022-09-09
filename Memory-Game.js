const cards = document.querySelectorAll(".memory-card");
let isFlipped = false;
let noThirdCardFlip = false;
let cardOne, cardTwo;

function flipCard() {
  if (noThirdCardFlip) return;
  if (this === cardOne) return;

  this.classList.add("flip");

  if (!isFlipped) {
    isFlipped = true;
    cardOne = this;
  } else {
    isFlipped = false;
    cardTwo = this;

    checkMatch();
  }
}

function checkMatch() {
  if (cardOne.dataset.framework === cardTwo.dataset.framework) {
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
  } else {
    noThirdCard = true;

    setTimeout(function () {
      cardOne.classList.remove("flip");
      cardTwo.classList.remove("flip");
      noThirdCardFlip = false;
    }, 1000);
  }
}

(function shuffle() {
  cards.forEach((card) => {
    let randomCard = Math.floor(Math.random() * 12);
    card.style.order = randomCard;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));
