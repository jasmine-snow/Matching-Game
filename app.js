/*=============================
credit given to:
ga lecture, free code camp, GA TA's, stack overflow
=============================
*/
/*===========

===============*/
let handOfCards = []
let match = 0;
let nonMatch = 0;
let timeOutId;
let timeOutIdTwo;



const playHand = () => {
  if (handOfCards.length == 2) {
    checkHand()
  } else {
    console.log('adding to', handOfCards)
    handOfCards.push(event.currentTarget.innerText)
    if (handOfCards.length == 2) {

      playHand()
    }
  }
}

const checkHand = () => {

  console.log('Ok I will check your cards', handOfCards)
  if (handOfCards[0] == handOfCards[1]) {

    let selector = '.' + handOfCards[0]
    console.log('selector')
    match++
    timeOutId = setTimeout(() => {
      alert("Score: " + match + "")
      clearInterval(timeOutId)
      $(selector).hide()
    }, 500);

    if (match == 6) {
      alert("You are Winner!")
    }
  } else if (handOfCards[0] !== handOfCards[1]) {
    nonMatch++
    timeOutIdTwo = setTimeout(() => {
      alert("Not a match, your score is: " + match + "")
      clearInterval(timeOutId)
      $(selector).hide()
    }, 500);
  }
  if (nonMatch == 3) {
    document.location.reload(true);
    alert("You lost the game, press start to play again.")

  }
  handOfCards = []

}


$(() => {

  const $card = $('.card').on('click', (event) => {
    if (handOfCards.length == 0) {
      $('.card').addClass('card-back')
    }
    $(event.currentTarget).toggleClass('card-back')
    playHand()
  })

  $(".button").click(function() {
    let numCards = parseInt($('input').val());
    for (let i = 1; i < numCards; i++) {
      $(".main").append("<div class='card" + i + " cards'></div>") &&
        $(i).clone().appendTo(".container");
    }
    let parent = $(".main");
    let divs = parent.children()
    while (divs.length) {
      parent.append(divs.splice(Math.floor(Math.random() * divs.length), )[0]);
    }
  });
});
