console.log('funguju!');

const classToggle = () => {
  document.querySelector('.bulb').classList.toggle('bulb--on');
};

document.addEventListener('click', classToggle);
