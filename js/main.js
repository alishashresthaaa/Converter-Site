// Adding style to the display effect of icon names
const boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach((box) => {
  box.addEventListener('mouseover', () =>{

    const h3 = box.children[1];
    h3.style.opacity='1';
 
  })
})

Array.from(boxes).forEach((box) => {
  box.addEventListener('mouseout', () =>{

    const h3 = box.children[1];
    h3.style.opacity='0';
 
  })
})


// Adding event listener to the close button of modal
const modals = document.getElementsByClassName('modal');
Array.from(modals).forEach((modal) => {
  const close = modal.querySelector('.close');
  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });
})


// Opening modal when box is clicked
document.getElementById('mass').addEventListener('click', () => {
  document.getElementById('modal-mass').style.display = 'block';
})

document.getElementById('length').addEventListener('click', () => {
  document.getElementById('modal-length').style.display = 'block';
})

document.getElementById('volume').addEventListener('click', () => {
  document.getElementById('modal-volume').style.display = 'block';
})

document.getElementById('area').addEventListener('click', () => {
  document.getElementById('modal-area').style.display = 'block';
})

document.getElementById('temperature').addEventListener('click', () => {
  document.getElementById('modal-temperature').style.display = 'block';
})

document.getElementById('currency').addEventListener('click', () => {
  document.getElementById('modal-currency').style.display = 'block';
})

document.getElementById('speed').addEventListener('click', () => {
  document.getElementById('modal-speed').style.display = 'block';
})

document.getElementById('time').addEventListener('click', () => {
  document.getElementById('modal-time').style.display = 'block';
})