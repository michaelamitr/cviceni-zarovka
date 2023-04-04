console.log('funguju!');

const classAdd = () => {
  document.querySelector('.bulb').classList.toggle('bulb--on');
};

document.addEventListener('keydown', classAdd);
