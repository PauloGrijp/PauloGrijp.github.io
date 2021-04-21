const header = document.querySelector('.header');
const home = document.querySelector('#home');
const opacityClass = document.querySelectorAll('.opacity');

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

let load = 0;
let int = setInterval(opacity, 40);

function opacity() {
  load++
  if (load > 99) {
    clearInterval(int);
  }

  header.style.opacity = scale(load, 10, 100, 0, 1)
  home.style.opacity = scale(load, 35, 100, 0, 1)
  opacityClass.forEach(opacity => {
    opacity.style.opacity = scale(load, 10, 100, 0, 1)
  });
}
