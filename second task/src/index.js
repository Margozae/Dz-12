'use strict';

let container = document.querySelector('.container');
container.addEventListener('click', hideToolTip);

function hideToolTip (event) {
  if (event.target.className === 'tittle') {
    let toolTip = event.target.nextElementSibling;
    if (toolTip.hidden !== true) {
      toolTip.hidden = true;
      } else {
      toolTip.hidden = false;
    }
  }
}