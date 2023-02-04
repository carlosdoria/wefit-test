import { addClass, removeClass } from "./utils/handleClass.js";

const cardContainer = document.querySelectorAll('.row')[2]
const cards = document.querySelectorAll('.row .col-lg-3')
const button = document.querySelectorAll('.card .btn')[0]

removeClass(button, 'btn-primary')
addClass(button, 'btn-success')

const newCards = [
  cards[3].cloneNode(true),
  cards[0].cloneNode(true),
  cards[2].cloneNode(true),
  cards[1].cloneNode(true),
]

cards.forEach(card => {
  card.innerHTML = null
})

newCards.forEach(card => {
  cardContainer.appendChild(card);
})
