export function dragElement(elmnt, { onDrag = null, onDragEnd = null } = {}) {
  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;
  let top = 0;
  let left = 0;

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    top = elmnt.offsetTop - pos2;
    left = elmnt.offsetLeft - pos1;

    elmnt.style.top = `${top}px`;
    elmnt.style.left = `${left}px`;

    elmnt.style.cursor = 'grabbing';
    if (onDrag) onDrag({ top, left });
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    elmnt.style.cursor = 'grab';
    if (onDragEnd) onDragEnd({ top, left });
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  elmnt.style.position = 'absolute';
  elmnt.style.cursor = 'grab';
  elmnt.onmousedown = dragMouseDown;
}

export function setPosition(elmnt, { top = 0, left = 0 }) {
  elmnt.style.position = 'absolute';
  elmnt.style.top = `${top}px`;
  elmnt.style.left = `${left}px`;
}
