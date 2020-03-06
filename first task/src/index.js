'use strict';

let mainTool = document.querySelector('.tooltip');
mainTool.addEventListener('mouseover', makeTooltip);
mainTool.addEventListener('mouseout', removeTooltip);
function makeTooltip () {
    let span = document.createElement('span');
    mainTool.append(span);
    let tooltipText = event.target.dataset.tooltip;
    span.append(tooltipText);
    span.style = 'border:1px solid black;padding:15px;background:lightgreen';
}
function removeTooltip () {
    let sideTool = document.querySelector('span');
    sideTool.remove();
}

    


