import { addStyle } from "./utils/addStyle.js";
import { addClass, removeClass } from "./utils/handleClass.js";

const container = document.getElementsByClassName('jumbotron')[0]
const paragraphs = document.querySelectorAll('.jumbotron p')
const button = document.getElementsByClassName('btn btn-primary btn-lg')[0]

const paragraphStyle = {
  'text-align': 'end'
}
const containerStyle = {
  'display': 'flex',
  'flex-direction': 'column',
  'align-items': 'end',
  'background-color': '#6c757d',
  'color': '#fff'
}

addStyle(container, containerStyle)

paragraphs.forEach(paragraph => {
  addStyle(paragraph, paragraphStyle)
})

removeClass(button, 'btn-primary')
addClass(button, 'btn-success')
