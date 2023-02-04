import { removeClass } from "./utils/handleClass.js";

const list = document.getElementsByClassName('list-group')[0]
const firstItem = document.getElementsByClassName('list-group-item')[0]
const secondItem = document.getElementsByClassName('list-group-item')[1]

const fourthItem = firstItem.cloneNode(true);
const fifthItem = secondItem.cloneNode(true);

// firstItem.classList.remove('active');
removeClass(firstItem, 'active');


fourthItem.innerHTML = 'Quarto item'
fifthItem.innerHTML = 'Quinto item'

list.appendChild(fourthItem);
list.appendChild(fifthItem);
