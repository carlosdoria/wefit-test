import { addStyle } from "./utils/addStyle.js";

const menu = document.querySelectorAll('div.btn-group-vertical')[0]
const buttons = document.querySelectorAll('.btn-secondary')

const buttonStyle = {
  'border-radius': '4px',
  'white-space': 'nowrap',
}

const menuStyle = {
  'flex-direction': 'row',
  'gap': '4px',
}

addStyle(menu, menuStyle)

buttons.forEach(button => {
  addStyle(button, buttonStyle)
})
